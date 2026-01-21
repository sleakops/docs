const fs = require("fs");
const path = require("path");

const CONTENT_DIR = "content";

const docsPrefixes = [
  "/cluster",
  "/domain",
  "/environment",
  "/network",
  "/project",
  "/provider",
  "/quickstart",
  "/user",
  "/cli",
  "/basicconcepts",
  "/changelog",
  "/connect_to_git",
  "/gettingstarted",
  "/responsability-model",
];

function getAllFiles(dir, allFiles = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getAllFiles(name, allFiles);
    } else if (name.endsWith(".mdx") || name.endsWith(".md")) {
      allFiles.push(name);
    }
  });
  return allFiles;
}

const allFiles = getAllFiles(CONTENT_DIR);

allFiles.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");
  let originalContent = content;

  docsPrefixes.forEach((prefix) => {
    // Regex to match links like (/cluster...) and NOT matching (/docs/cluster...) or (/img/...) or external links
    // We look for [text](/prefix...)
    const regex = new RegExp(
      `\\(\(${prefix.replace(/\//g, "\\/")}\)\(\[\\s\\)\\#\/\]\|\$\\)\)`,
      "g",
    );

    // We need to be careful not to replace if it already has /docs
    // So we use a negative lookbehind (not supported in all node versions easily, but we can do a replace function)
    content = content.replace(
      /\(\/([a-z_]+)([\s\)#\/]|$)/g,
      (match, p1, p2) => {
        const matchedPrefix = "/" + p1;
        if (docsPrefixes.includes(matchedPrefix)) {
          return "(/docs/" + p1 + p2;
        }
        return match;
      },
    );
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Fixed links in ${file}`);
  }
});

console.log("✅ Done!");

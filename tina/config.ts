import { defineConfig } from "tinacms";

// Check if we're running locally
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Point to the self-hosted NextJS backend
  // For local development, backend runs on port 3000
  // For production, update TINA_CONTENT_API_URL environment variable
  contentApiUrlOverride:
    process.env.TINA_CONTENT_API_URL || "http://localhost:3000/api/tina/gql",

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },

  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },

  schema: {
    collections: [
      {
        name: "doc",
        label: "Docs",
        path: "docs",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "sidebar_position",
            label: "Sidebar Position",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

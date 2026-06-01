// Docusaurus's Details component calls e.stopPropagation() + e.preventDefault()
// for all clicks inside <summary>, which prevents anchor links from updating the
// URL. We intercept in capture phase (runs before React's delegation) to fix this.
if (typeof document !== "undefined") {
  document.addEventListener(
    "click",
    (e) => {
      // Case 1: clicking the # anchor icon on a heading inside <summary>
      const anchor = e.target.closest("a[href]");
      if (anchor && anchor.closest("summary")) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          setTimeout(() => window.history.pushState(null, "", href), 0);
          return;
        }
      }

      // Case 2: clicking <summary> to open a <details> — update URL to heading ID
      // so the open FAQ is directly linkable/shareable
      const summary = e.target.closest("summary");
      if (summary) {
        const details = summary.closest("details");
        if (details && !details.open) {
          const heading = details.querySelector(
            "h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"
          );
          if (heading) {
            setTimeout(
              () => window.history.pushState(null, "", "#" + heading.id),
              0
            );
          }
        }
      }
    },
    true // capture phase — fires before Docusaurus's handler
  );
}

export function onRouteDidUpdate() {
  if (typeof window === "undefined") return;

  const hash = window.location.hash;
  if (!hash) return;

  // Wait one frame so React has finished rendering the new page
  requestAnimationFrame(() => {
    const element = document.getElementById(hash.slice(1));
    if (!element) return;

    const targetDetails =
      element.tagName === "DETAILS" ? element : element.closest("details");

    if (targetDetails && !targetDetails.open) {
      // Docusaurus Details is React-controlled — clicking the summary
      // triggers its internal state update (setCollapsed/setOpen)
      const summary = targetDetails.querySelector("summary");
      if (summary) {
        summary.click();
      }
    }

    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  });
}

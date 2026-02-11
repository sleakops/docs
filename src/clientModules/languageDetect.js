const STORAGE_KEY = "locale_redirected";

export function onRouteDidUpdate() {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(STORAGE_KEY)) return;

  const browserLangs = navigator.languages || [navigator.language];
  const isSpanish = browserLangs.some((lang) => lang.startsWith("es"));
  const alreadyOnSpanish = window.location.pathname.startsWith("/es");

  localStorage.setItem(STORAGE_KEY, "true");

  if (isSpanish && !alreadyOnSpanish) {
    window.location.replace("/es" + window.location.pathname);
  }
}

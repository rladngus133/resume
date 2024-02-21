export default function Comment() {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.setAttribute("repo", "rladngus133/resume");
        scriptElem.setAttribute("issue-term", "pathname");
        scriptElem.setAttribute("theme", "github-light");
        scriptElem.setAttribute("label", "comments");
        scriptElem.crossOrigin = "anonymous";
        elem.replaceChildren(scriptElem);
      }}
    />
  );
}

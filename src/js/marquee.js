document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const elmsDisplayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elms-displayed"
  );
  const marqueeContent = document.querySelector("ul.marquee-content");

  root.style.setProperty("--marquee-elements", marqueeContent.children.length);

  for (let i = 0; i < elmsDisplayed; i++) {
    marqueeContent?.appendChild(marqueeContent.children[i].cloneNode(true));
  }
});

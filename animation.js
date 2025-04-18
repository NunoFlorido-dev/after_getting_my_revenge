import { gsap } from "gsap";

//Animate the inventions' images from TinkerWiki main page
const inventionImages = document.querySelectorAll(
  ".mainwindow_tinkerwiki #tinkerwiki_inventory .inventory_item img"
);

inventionImages.forEach((invention) => {
  invention.addEventListener("mouseover", () => {
    gsap.to(invention, { scale: 1.5, duration: 1, ease: "back.inOut" });
  });

  invention.addEventListener("mouseout", () => {
    gsap.to(invention, { scale: 1, duration: 1, ease: "back.inOut" });
  });
});

//Animate the inventions' images from TinkerWiki' specific pages
document.addEventListener("DOMContentLoaded", () => {
  const specificInventionImages = document.querySelectorAll(
    "#tinkerwiki_specificitem .invention_left img"
  );

  specificInventionImages.forEach((invention) => {
    invention.addEventListener("mouseover", () => {
      gsap.to(invention, { scale: 1.5, duration: 1, ease: "back.inOut" });
    });

    invention.addEventListener("mouseout", () => {
      gsap.to(invention, { scale: 1, duration: 1, ease: "back.inOut" });
    });
  });
});

import { gsap } from "gsap";

// TINKER WIKI ////////// TINKER WIKI /////// TINKER WIKI //////
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

// CHEESE NOTES ////////// CHEESE NOTES /////// CHEESE NOTES //////

document.addEventListener("DOMContentLoaded", () => {
  const cheeseNotesPreview = document.querySelectorAll(
    ".mainwindow_cheesenotes .cheesenotes_messagepreview div"
  );

  const cheeseNotesMessages = document.querySelectorAll(
    ".mainwindow_cheesenotes .cheesenotes_message"
  );

  cheeseNotesPreview.forEach((notePrev) => {
    notePrev.addEventListener("mouseover", () => {
      gsap.to(notePrev, { backgroundColor: "#ffff71", duration: 0.25 });

      notePrev.addEventListener("click", () => {
        cheeseNotesMessages.forEach((message) => {
          gsap.to(message, { opacity: 1, duration: 0.5 });
        });
      });
    });

    notePrev.addEventListener("mouseout", () => {
      gsap.to(notePrev, { backgroundColor: "#292929", duration: 0.25 });
    });
  });
});

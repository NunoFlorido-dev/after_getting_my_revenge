import { gsap } from "gsap";
import { Howl } from "howler";

// TINKER WIKI ////////// TINKER WIKI /////// TINKER WIKI //////
//Animate the inventions' images from TinkerWiki main page
const inventionImages = document.querySelectorAll(
  ".mainwindow_tinkerwiki #tinkerwiki_inventory .inventory_item img"
);

inventionImages.forEach((invention) => {
  invention.addEventListener("mouseover", () => {
    gsap.to(invention, { scale: 1.5, duration: 1, ease: "elastic.out" });
  });

  invention.addEventListener("mouseout", () => {
    gsap.to(invention, { scale: 1, duration: 1, ease: "elastic.out" });
  });
});

//Animate the inventions' images from TinkerWiki' specific pages
document.addEventListener("DOMContentLoaded", () => {
  const specificInventionImages = document.querySelectorAll(
    "#tinkerwiki_specificitem .invention_left img"
  );

  specificInventionImages.forEach((invention) => {
    invention.addEventListener("mouseover", () => {
      gsap.to(invention, { scale: 1.5, duration: 1, ease: "elastic.out" });
    });

    invention.addEventListener("mouseout", () => {
      gsap.to(invention, { scale: 1, duration: 1, ease: "elastic.out" });
    });
  });
});

// CHEESE BOOK ////////// CHEESE BOOK /////// CHEESE BOOK //////

const likes = document.querySelectorAll(
  ".cheesebook_main .cheesebook_posts .posts .cracker_like"
);

document.addEventListener("DOMContentLoaded", () => {
  likes.forEach((like) => {
    let toggle = false;

    like.addEventListener("click", () => {
      toggle = !toggle;

      const postMain = like.closest(".post_main");
      const cracksP = postMain.querySelector("p:last-of-type");

      let currentText = cracksP.textContent;
      let numberMatch = currentText.match(/\d+/);
      let currentNumber = numberMatch ? parseInt(numberMatch[0]) : 0;
      let newNumber = toggle ? currentNumber + 1 : currentNumber - 1;
      cracksP.textContent = `${newNumber} Cracks!`;

      // ✅ Animation
      if (toggle) {
        gsap.to(like, {
          filter:
            "brightness(0) saturate(100%) invert(79%) sepia(79%) saturate(740%) hue-rotate(3deg) brightness(91%) contrast(101%)",
          scale: 1.5,
          ease: "ease.in",
          duration: 0.5,
          onComplete: () => {
            gsap.to(like, {
              scale: 1,
              duration: 0.8,
              ease: "ease.in",
            });
          },
        });
      } else {
        gsap.to(like, {
          filter: "none",
        });
      }
    });
  });
});

// CHEESE NOTES
const minigame = document.getElementById("wererabbit_minigame");

minigame.addEventListener("mouseover", () => {
  gsap.to(minigame, {
    scale: 1.5,
    duration: 0.5,
    ease: "bounce.out",
  });
});

minigame.addEventListener("mouseout", () => {
  gsap.to(minigame, {
    scale: 1,
    duration: 0.5,
    ease: "bounce.out",
  });
});

// Moon Rocket Easter Egg
const moonRocket = document.getElementById("rocket_easter_egg");

let rocket_launch = new Howl({
  src: ["/sounds/rocket-launch.mp3"],
  loop: false,
  volume: 0.5,
});

moonRocket.addEventListener("click", () => {
  rocket_launch.play();
  gsap.to(moonRocket, {
    y: -100,
    duration: 5,
    ease: "bounce.out",
  });
});

// Feathers Adware Easter Egg
const adwareButton = document.querySelector(".feathers_message p button");

adwareButton.addEventListener("mouseover", () => {
  gsap.to(adwareButton, {
    scale: 1.5,
    duration: 0.5,
    ease: "bounce.out",
  });

  setTimeout(() => {
    gsap.to(adwareButton, {
      scale: 1,
      duration: 0.5,
      ease: "bounce.out",
    });
  }, 500);
});

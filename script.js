import { Howl } from "howler";

let musicButton = document.getElementById("play_music");
let iconArea = document.querySelector(".mainwindow_iconarea");

let cheeseNotesPage = document.querySelector(".mainwindow_cheesenotes");
let cheeseNotesIcon = document.querySelector(".cheese_notes_app");

let cheeseNotesLeaveIcon = document.querySelector(".cheesenotes_leave");

let tinkerWikiPage = document.querySelector(".mainwindow_tinkerwiki");
let tinkerWikiIcon = document.querySelector(".tinker_wiki_app");

let tinkerWikiLeaveIcon = document.querySelector(".tinkerwiki_leave");

let cheeseBookPage = document.querySelector(".mainwindow_cheesebook");
let cheeseBookIcon = document.querySelector(".cheese_book_app");

let cheeseBookLeaveIcon = document.querySelector(".cheesebook_leave");

let norbotPage = document.querySelector(".mainwindow_norbot");
let norbotIcon = document.querySelector(".norbot_app");

let norbotLeaveIcon = document.querySelector(".norbot_leaveicon");

let feathersIcon = document.getElementById("friend_feathers");
let feathersMessages = document.querySelector(".feathers_messages");
let feathersLeaveIcon = document.querySelector(".feathers_leave");

let wererabbitButton = document.getElementById("wererabbit_minigame");

// MUSIC //
let activateMusic = false;
let music = new Howl({
  src: ["/sounds/main_music.mp3"],
  loop: true,
  volume: 0.5,
});

musicButton.addEventListener("click", () => {
  activateMusic = !activateMusic;
  if (activateMusic) {
    music.play();
    musicButton.textContent = "Stop Music";
    musicButton.style.backgroundColor = "#ff3d44";
  } else {
    music.stop();
    musicButton.textContent = "Play Music!";
    musicButton.style.backgroundColor = "#ffec42";
  }
});

// DISPLAY NORBOT /////
let click = new Howl({
  src: ["/sounds/mouse-click.mp3"],
  loop: true,
  volume: 0.5,
});

norbotIcon.addEventListener("click", () => {
  if (norbotPage.style.display === "none" || norbotIcon.style.display === "") {
    norbotPage.style.display = "flex";
  } else {
    norbotPage.style.display = "none";
  }
});

// DISPLAY CHEESE BOOK /////

cheeseBookIcon.addEventListener("click", () => {
  if (
    cheeseBookPage.style.display === "none" ||
    cheeseBookIcon.style.display === ""
  ) {
    cheeseBookPage.style.display = "grid";
    iconArea.style.display = "none";
  } else {
    cheeseBookPage.style.display = "none";
    iconArea.style.display = "block";
  }
});

feathersIcon.addEventListener("click", () => {
  if (feathersMessages.style.display === "none") {
    feathersMessages.style.display = "grid";
  } else {
    feathersMessages.style.display = "none";
  }
});

feathersLeaveIcon.addEventListener("click", () => {
  feathersMessages.style.display = "none";
});

// DISPLAY CHEESE NOTES /////

cheeseNotesIcon.addEventListener("click", () => {
  if (
    cheeseNotesPage.style.display === "none" ||
    cheeseNotesPage.style.display === ""
  ) {
    cheeseNotesPage.style.display = "grid";
    iconArea.style.display = "none";
  } else {
    cheeseNotesPage.style.display = "none";
    iconArea.style.display = "block";
  }
});

// DISPLAY TINKER WIKI /////

tinkerWikiIcon.addEventListener("click", () => {
  if (
    tinkerWikiPage.style.display === "none" ||
    tinkerWikiPage.style.display === ""
  ) {
    tinkerWikiPage.style.display = "grid";
    iconArea.style.display = "none";
  } else {
    tinkerWikiPage.style.display = "none";
    iconArea.style.display = "block";
  }
});

cheeseNotesLeaveIcon.addEventListener("click", () => {
  cheeseNotesPage.style.display = "none";
  iconArea.style.display = "block";
});

tinkerWikiLeaveIcon.addEventListener("click", () => {
  tinkerWikiPage.style.display = "none";
  iconArea.style.display = "block";
});

cheeseBookLeaveIcon.addEventListener("click", () => {
  cheeseBookPage.style.display = "none";
  iconArea.style.display = "block";
});

norbotLeaveIcon.addEventListener("click", () => {
  norbotPage.style.display = "none";
});

// DISPLAY CHEESE NOTES MESSAGES //////

document.addEventListener("DOMContentLoaded", function () {
  // Hide all notes initially
  document.querySelectorAll(".cheesenotes_message > div").forEach((note) => {
    note.style.display = "none";
  });

  // Add click event listeners to each preview
  document
    .querySelectorAll(".cheesenotes_messagepreview div")
    .forEach((preview) => {
      preview.addEventListener("click", function () {
        // Hide all notes
        document
          .querySelectorAll(".cheesenotes_message > div")
          .forEach((note) => {
            note.style.display = "none";
          });

        // Get the ID of the clicked preview and find its corresponding note
        const noteId = this.id.replace("preview_", ""); // Remove "preview_" prefix
        const noteToShow = document.getElementById(noteId);

        // Show the selected note
        if (noteToShow) {
          noteToShow.style.display = "block";
        }
      });
    });
});

// POSITION DESKTOP FOLDERS //////

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#desktop .desktop_mainwindow");
  const folders = document.querySelectorAll(
    "#desktop .desktop_mainwindow .mainwindow_iconarea .green_folder, #desktop .desktop_mainwindow .mainwindow_iconarea .pink_folder"
  );

  const containerWidth = 500; // Directly set width in pixels
  const containerHeight = 200; // Directly set height in pixels

  folders.forEach((folder) => {
    const randomLeft = Math.random() * (containerWidth - folder.clientWidth);
    const randomTop = Math.random() * (containerHeight - folder.clientHeight);

    folder.style.position = "absolute"; // Ensure absolute positioning
    folder.style.left = `${randomLeft}px`;
    folder.style.top = `${randomTop}px`;
  });
});

// DISPLAY AND HIDE TINKER WIKI ITEMS //////

document.addEventListener("DOMContentLoaded", () => {
  const inventoryItems = document.querySelectorAll(".inventory_item");
  const inventionPages = document.querySelectorAll(".invention_page");
  const inventionContainerPage = document.querySelector(
    "#tinkerwiki_specificitem"
  );
  const leaveButtons = document.querySelectorAll(".invention_leave");

  function hideAllInventionPages() {
    // Hide each specific invention page
    inventionPages.forEach((page) => {
      page.style.display = "none";
    });
    inventoryItems.forEach((item) => {
      item.style.display = "flex";
    });
    // Hide the container
    inventionContainerPage.style.display = "none";
  }

  // Handle inventory item clicks dynamically
  inventoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-id");
      const targetPage = document.getElementById(targetId);

      if (targetPage) {
        hideAllInventionPages(); // hide everything first
        targetPage.style.display = "grid"; // show only the clicked one
        inventionContainerPage.style.display = "grid"; // show container

        inventoryItems.forEach((item) => {
          item.style.display = "none";
        });
      }
    });
  });

  // Handle back buttons
  leaveButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      hideAllInventionPages();
    });
  });

  // Initial state: hide everything
  hideAllInventionPages();
});

// Wererabbit minigame
wererabbitButton.addEventListener("click", () => {
  window.open(
    "/wererabbit.html",
    "Wererabbit Minigame",
    "width=600,height=400,fullscreen=no"
  );
});

//Feathers Adware
let shock = new Howl({
  src: ["/sounds/crowd-shocked.mp3"],
  loop: false,
  volume: 0.5,
});

const adwareButton = document.querySelector(".feathers_message p button");
let shockPlayed = false;
adwareButton.addEventListener("click", () => {
  if (!shockPlayed) {
    shock.play();
    shockPlayed = true;
  }
  window.open(
    "/feathers_adware.html",
    "Feathers Adware",
    "width=600,height=400,fullscreen=no"
  );
});

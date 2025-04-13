let iconArea = document.querySelector(".mainwindow_iconarea");

let cheeseNotesPage = document.querySelector(".mainwindow_cheesenotes");
let cheeseNotesIcon = document.querySelector(".cheese_notes_app");

let cheeseNotesLeaveIcon = document.querySelector(".cheesenotes_leave");

let tinkerWikiPage = document.querySelector(".mainwindow_tinkerwiki");
let tinkerWikiIcon = document.querySelector(".tinker_wiki_app");

let tinkerWikiLeaveIcon = document.querySelector(".tinkerwiki_leave");

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

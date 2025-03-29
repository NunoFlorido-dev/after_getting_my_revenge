let iconArea = document.querySelector(".mainwindow_iconarea");

let cheeseNotesPage = document.querySelector(".mainwindow_cheesenotes");
let cheeseNotesIcon = document.querySelector(".cheese_notes_app");

let cheeseNotesLeaveIcon = document.querySelector(".cheesenotes_leave");

cheeseNotesIcon.addEventListener("click", () => {
  if (cheeseNotesPage.style.display == "none") {
    cheeseNotesPage.style.display = "grid";
    iconArea.style.display = "none";
  } else {
    cheeseNotesPage.style.display = "none";
    iconArea.style.display = "block";
  }
});

cheeseNotesLeaveIcon.addEventListener("click", () => {
  cheeseNotesPage.style.display = "none";
  iconArea.style.display = "block";
});

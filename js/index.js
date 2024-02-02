const toggleBtn = document.querySelector(".sidebar_toggle");
const closeBtn = document.querySelector(".sidebar_close");
const sideBar = document.querySelector(".sidebar_area");

toggleBtn.addEventListener("click", () => {
  /*
    if (sideBar.classList.contains('show_sidebar')) {
        sideBar.classList.remove('show_sidebar');
    } else {
        sideBar.classList.add('show_sidebar');
    }
    */
  sideBar.classList.toggle("show_sidebar");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("show_sidebar");
});

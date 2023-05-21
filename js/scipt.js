var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/**
 * Hero type effect
 */
var typed = new Typed(".auto-type", {
  strings: ["College Student", "Web Development", "UI/UX"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
});

var list = document.querySelectorAll(".list");
var itemBox = document.querySelectorAll(".itemBox");

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (var j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    var dataFilter = this.getAttribute("data-filter");

    for (var k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
  sidemenu.style.transform = "translateX(5px)";
}
function closemenu() {
  sidemenu.style.right = "-200px";
  sidemenu.style.transform = "translateX(5px)";
}

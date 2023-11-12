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
  strings: ["University Student", "Web Development", "UI/UX"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
});

// MY PROJECT
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
// END PROJECT

// MY DOCUMENT PICTURE
var list1 = document.querySelectorAll(".list1");
var itemBox1 = document.querySelectorAll(".itemBox1");

for (var i = 0; i < list1.length; i++) {
  list1[i].addEventListener("click", function () {
    for (var j = 0; j < list1.length; j++) {
      list1[j].classList.remove("active");
    }
    this.classList.add("active");

    var dataFilter1 = this.getAttribute("data-filter1");

    for (var k = 0; k < itemBox1.length; k++) {
      itemBox1[k].classList.remove("active");
      itemBox1[k].classList.add("hide");

      if (
        itemBox1[k].getAttribute("data-item1") == dataFilter1 ||
        dataFilter1 == "all"
      ) {
        itemBox1[k].classList.remove("hide");
        itemBox1[k].classList.add("active");
      }
    }
  });
}
//END DOCUMENT PICTURE

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
  sidemenu.style.transform = "translateX(5px)";
}
function closemenu() {
  sidemenu.style.right = "-200px";
  sidemenu.style.transform = "translateX(5px)";
}

// BUTTON SUBMIT CONTACT
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

// BUTTON SCROLL POJOK KANAN
// ketika pengunjung scroll kebawah 20px dari atas dokumen, maka tampilkan tombol scroll-btn
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-btn").style.display = "block";
  } else {
    document.getElementById("scroll-btn").style.display = "none";
  }
}

// ketika tombol tersebut di klik, maka lakukan scroll keatas laman
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// MODAL ALFIN
function showImage() {
  var imageContainer = document.getElementById("imageContainer");
  imageContainer.style.display = "block";
}

function hideImage() {
  var imageContainer = document.getElementById("imageContainer");
  imageContainer.style.display = "none";
}

'use strict';
//コメント
let header1 = document.getElementById("header-Id");
let header2 = document.getElementsByClassName("header2-buttom");
let none = "none";
let block = "block";

for (let i = 0; i < header2.length; i++) {
  header2[i].style.display = none;
}
header1.addEventListener('click', function () {
  for (let i = 0; i < header2.length; i++) {
    if (header2[i].style.display === none) {
      header2[i].style.display = block;
    } else {
      header2[i].style.display = none;
    }
  }
});

let overlay = document.getElementById("overlay-id");
let headerMenu = document.getElementById("header-menu-id");
let menuClose = document.getElementById("menu-close-id");
let header2Buttom = document.getElementsByClassName("header2-buttom");

overlay.style.display = none;

headerMenu.addEventListener('click', function () {
  overlay.setAttribute('style', 
  'width:100%; height:100%; background-color:rgba(0, 0, 0, 0.7); position:fixd; z-index:2; top:0; display:flex; justify-contents: center; align-items: center; font-famiry: A1 Mincho", "游明朝", "Yu Mincho", "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", serif'
  );
  for (let i = 0; i < header2Buttom.length; i++) {
    header2Buttom[i].style.display = none;
  };
});
menuClose.addEventListener('click', function () {
  overlay.style.display = none;
});

let toTop = document.getElementById("to-top-id");

toTop.addEventListener('click', function () {
  window.scroll ({
    top: 0,
    behavior: "auto",
  });
});
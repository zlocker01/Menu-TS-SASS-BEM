"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var headerButton = document.querySelector('.header__button');
  var headerNav = document.querySelector('.header__nav');
  headerButton.addEventListener('click', function () {
    headerNav.classList.toggle('header__nav--active');
  });
});
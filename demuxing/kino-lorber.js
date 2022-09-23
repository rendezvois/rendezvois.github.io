"use strict";

const tabContainer = document.querySelector(".buttons");
const tabs = document.querySelectorAll(".tab");

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".button-50");
  if (!clicked) return;

  tabs.forEach((t1) => t1.classList.remove("tab--active"));
  document
    .querySelectorAll(`.tab-${clicked.dataset.tab}`)
    .forEach((t2) => t2.classList.add("tab--active"));
});

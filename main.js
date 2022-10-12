const imageContainerEl = document.querySelector(".image-container");

const imgsEl = 9;

let currentImg = 1;

updateImg();

function updateImg() {
  if (currentImg > imgsEl) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 800}px)`;
  setTimeout(() => {
    currentImg++;
    updateImg();
  }, 2000);
}

const lists = document.querySelectorAll(".list-expand");
const optionLists = document.querySelectorAll(".option-list");
const borderBottoms = document.querySelectorAll(".border-btm");

lists.forEach((list) => {
  list.addEventListener("click", () => {
    const optionList = optionLists;
    const display = optionList.style.display;

    if (display == "block") {
      optionList.style.display = "none";
      borderBottom.style.borderBottom = "0.01px solid #afafb3";
    } else {
      optionList.style.display = "block";
      borderBottom.style.borderBottom = "none";
    }
  });
});

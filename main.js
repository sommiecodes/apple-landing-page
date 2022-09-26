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

const list = document.querySelector(".list-expand");
const optionList = document.querySelector(".option-list");
const borderBottom = document.querySelector(".border-btm");

list.addEventListener("click", () => {
  optionList.style.display = "block";
  borderBottom.style.borderBottom = "none";

  list.addEventListener("click", () => {
    const visibility = optionList.style.display;
    if (visibility == "block") {
      optionList.style.display = "none";
      borderBottom.style.borderBottom ="0.01px solid #afafb3"
    } else {
      optionList.style.display = "block";
      borderBottom.style.borderBottom = "none";
    }
  });
});

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

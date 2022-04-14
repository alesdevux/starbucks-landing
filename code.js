const bigImg = document.getElementById('big-img');

const imgFirst = document.getElementById('change-img-first');
const imgSecond = document.getElementById('change-img-second');
const imgThird = document.getElementById('change-img-third');

function changeImg(img) {
  bigImg.src = img;
}

imgFirst.addEventListener('click', () => { changeImg('./img/img1.png'); });
imgSecond.addEventListener('click', () => { changeImg('./img/img2.png'); });
imgThird.addEventListener('click', () => { changeImg('./img/img3.png'); });
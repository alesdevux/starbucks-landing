const bigImg = document.getElementById('big-img');

const imgFirst = document.getElementById('change-img-first');
const imgSecond = document.getElementById('change-img-second');
const imgThird = document.getElementById('change-img-third');

function changeImg(img, color) {
  bigImg.src = img;
  document.documentElement.setAttribute('data-color', color);
}

imgFirst.addEventListener('click', () => { changeImg('./img/img1.png', 'green'); });
imgSecond.addEventListener('click', () => { changeImg('./img/img2.png', 'orange'); });
imgThird.addEventListener('click', () => { changeImg('./img/img3.png', 'pink'); });
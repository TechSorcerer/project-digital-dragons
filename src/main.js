const button = document.getElementById('myButton');
const modal = document.getElementById('myModal');
const closeBtn = document.getElementById('closeBtn');
const menuLinks = document.querySelectorAll('.mob-tab-link');

// button.addEventListener('click', function () {
//   modal.className = 'mob-tab is-open';
// });

// closeBtn.addEventListener('click', function () {
//   modal.className = 'mob-tab';
// });

// menuLinks.forEach(link =>
//   link.addEventListener('click', function () {
//     modal.classList.toggle('is-open');
//   })
// );

function toggleModal() {
  modal.classList.toggle('is-open');
}
button.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
menuLinks.forEach(link => link.addEventListener('click', toggleModal));

const fruitsItem = document.querySelectorAll('.fruits-item');
const showMoreBtn = document.querySelector('.btn-mob-fruits');

function showMore() {
  fruitsItem.forEach(item => {
    const computedStyles = window.getComputedStyle(item);
    // console.log(computedStyles.getPropertyValue('display'));
    if (computedStyles.getPropertyValue('display') === 'none') {
      console.log('here');
      item.style.display = 'block';
    }
  });
  this.style.display = 'none';
}

showMoreBtn.addEventListener('click', showMore);

const button = document.getElementById('myButton');
const modal = document.getElementById('myModal');
const closeBtn = document.getElementById('closeBtn');
const menuLinks = document.querySelectorAll('.mob-tab-link');

button.addEventListener('click', function () {
  modal.className = 'mob-tab is-open';
});

closeBtn.addEventListener('click', function () {
  modal.className = 'mob-tab';
});

menuLinks.forEach(link =>
  link.addEventListener('click', function () {
    modal.classList.toggle('is-open');
  })
);

// function toggleModal() {
//   modal.classList.toggle('is-open');
// }
// button.addEventListener('click', toggleModal);
// closeBtn.addEventListener('click', toggleModal);
// menuLinks.forEach(link => link.addEventListener('click', toggleModal));

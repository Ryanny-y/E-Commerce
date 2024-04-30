// slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// this function make the header sidebar interactive
const headerSideBar = () => {
  const exitLanguageBtn = document.querySelector('.exit-language');
  const globeBtn = document.querySelector('.select-language')
  const sideBarHeader = document.querySelector('.small-active');

  globeBtn.addEventListener('click', () => {
    sideBarHeader.classList.toggle('active');
    globeBtn.classList.add('hidden');
  })

  exitLanguageBtn.addEventListener('click', () => {
    sideBarHeader.classList.toggle('active');
    setTimeout(() => {
      globeBtn.classList.remove('hidden')
    }, 500);
  })
}

function renderProducts() {

};

function renderHomePage() {
  
  // Header sidebar
  headerSideBar();

  renderProducts();

}

renderHomePage();


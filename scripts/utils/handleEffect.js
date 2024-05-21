// this function make the header sidebar effect/animation
export const headerSideBar = () => {
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

export const sideMenu = () => {
  const sideMenus = document.querySelectorAll('.hero-body-sidebar ul li i');
  sideMenus.forEach(menu => {
    menu.addEventListener('click', (e) => {
      console.log(menu);
      const sub = menu.previousElementSibling;
      sub.classList.toggle('hidden');
      sub.classList.toggle('flex');
    });
  });
} 
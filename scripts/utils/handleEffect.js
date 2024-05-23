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

export const flashSaleCountdown = () => {

  let days = 3;
  let hours = 23;
  let minutes = 19;
  let seconds = 50;

  const daysEl = document.querySelector('.fs-countdown .days');
  const hoursEl = document.querySelector('.fs-countdown .hours');
  const minutesEl = document.querySelector('.fs-countdown .minutes');
  const secondsEl = document.querySelector('.fs-countdown .seconds');

  const intervalId = setInterval(() => {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      return;
    }

    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        hours--;
        if (hours < 0) {
          hours = 23;
          days--;
        }
      }
    }

    secondsEl.textContent = seconds.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    daysEl.textContent = days.toString().padStart(2, 0);
  }, 1000);

};
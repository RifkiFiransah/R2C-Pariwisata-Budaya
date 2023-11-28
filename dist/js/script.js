// in this for interactive website using JS

// Navbar Fixed
// window.onscroll = () => {
//   const header = document.querySelector('nav')
//   const fixedNav = header.offsetTop
//   // const toTop = document.querySelector('#toTop')

//   if (window.pageYOffset > fixedNav) {
//     header.classList.remove('absolute')
//     header.classList.remove('bg-transparent')
//     header.classList.add('bg-white')
//     header.classList.remove('dark:bg-dark')
//     header.classList.add('navbar-fix')
//     // toTop.classList.remove('hidden')
//     // toTop.classList.add('flex')
//   } else {
//     header.classList.add('bg-transparent')
//     header.classList.remove('bg-white')
//     header.classList.add('absolute')
//     header.classList.remove('dark:bg-dark')
//     header.classList.remove('navbar-fix')
//     // toTop.classList.remove('flex')
//     // toTop.classList.add('hidden')
//   }
// }

// Hamburger Menu
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})

// Hidden hamburger in click window
window.addEventListener('click', (e) => {
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
  }
})

// Current Year
const year = document.querySelector('#year')
const date = new Date()
year.innerHTML = date.getFullYear()

// Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle')
const iconTheme = document.querySelector('.icon-theme')
const html = document.querySelector('html')

darkToggle.addEventListener('click', () => {
  darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark')
  darkToggle.checked ? localStorage.theme = 'dark' : localStorage.theme = 'light'
  darkToggle.checked ? iconTheme.classList.remove('fa-sun') : iconTheme.classList.add('fa-sun')
  darkToggle.checked ? iconTheme.classList.add('fa-moon') : iconTheme.classList.remove('fa-moon')
})

// Move position dark mode by theme
if (localStorage.theme == 'dark' || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)")).matches) {
  darkToggle.checked = true
} else {
  darkToggle.checked = false
}
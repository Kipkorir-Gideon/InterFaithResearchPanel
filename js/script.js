window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 30)
})



const events = document.querySelectorAll('.event');

events.forEach(event => {
    event.addEventListener('click', () => {
        event.classList.toggle('open')
    })
})


const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);




// const friends = [
//     {
//       firstName: "Nancy",
//       lastName: "Burgess",
//       company: {
//         name: "Flatbook Labs",
//         jobTitle: "Developer Apprentice",
//       },
//     },
//     {
//       firstName: "Corinna",
//       lastName: "Jackson",
//       company: {
//         name: "Flatbook Labs",
//         jobTitle: "Lead Developer",
//       },
//     },
//   ];
  // loop through the object and console.log each firstName
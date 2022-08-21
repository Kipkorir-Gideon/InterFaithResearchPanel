window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 30)
})



const events = document.querySelectorAll('.event');

events.forEach(event => {
    event.addEventListener('click', () => {
        event.classList.toggle('open')
    })
})
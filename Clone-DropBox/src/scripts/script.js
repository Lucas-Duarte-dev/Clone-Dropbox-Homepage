const form = document.querySelector('#form-container');
const allImages = document.querySelector('.contain-all-information')
const scroll = document.querySelector('.scroll-thumb');
window.addEventListener('scroll', () => {
    let scrolling = window.pageYOffset;
    let scrollingCovert = Math.round((scrolling - 1990) / 4.9)
    scrolling < 700 ? form.style.transform = 'translateX(0)' : form.style.transform = 'translateX(1000px)'
    if (scrolling >= 1910 && scrolling <= 3657) {
        allImages.style.position = 'fixed'
        scroll.style.transform = `translateY(${scrollingCovert}px)`
    } else {
        allImages.style.position = 'static'
    }
    console.log(scrolling)
})
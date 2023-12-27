const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const slider = document.querySelector('.slider')

const imgLength = document.querySelectorAll('.img').length
const img = document.querySelector('.img')
const sliderMax = (imgLength -1) * img.offsetWidth


next.addEventListener('click',() => {

        if(slider.scrollLeft < sliderMax){
                   slider.scrollLeft  += img.offsetWidth
        }else if(slider.scrollLeft == sliderMax){
                slider.scrollLeft =0;
        }
})

prev.addEventListener('click',() => {
        if(slider.scrollLeft > 0){
                slider.scrollLeft -=img.offsetWidth
        }
})

const cars = [
    {
        id : 01,
        img : "../carrs/01audipexels-photo-1719647.jpeg",
        category : "audi"
    },
    {
        id : 02,
        img : "../carrs/01mercepexels-photo-120049.jpeg",
        category : "merc"
    },
    {
        id : 03,
        img : "../carrs/01minipexels-photo-457418.jpeg",
        category : "cooper"
    },
    {
        id : 04,
        img : "../carrs/01range-photo-116675.jpeg",
        category : "range"
    },
    {
        id : 05,
        img : "../carrs/02audipexels-photo-5998732.jpeg",
        category : "audi"
    },
    {
        id : 06,
        img : "../carrs/02mercepexels-photo-136872.jpeg",
        category : "merc"
    },
    {
        id : 07,
        img : "../carrs/02minipexels-photo-5088303.jpeg", 
        category : "cooper"
    },
    {
        id : 08,
        img : "../carrs/02rangepexels-photo-6168079.jpeg",
        category : "range"
    },
    {
        id : 09,
        img : "../carrs/03audipexels-photo-7126210.jpeg",
        category : "audi"
    },
    {
        id : 10,
        img : "../carrs/03mercepexels-photo-164654.jpeg",
        category : "merc"
    },
    {
        id : 11,
        img : "../carrs/03mercepexels-photo-215529.jpeg",
        category : "merc"
    },
    {
        id : 12,
        img : "../carrs/03minipexels-photo-7459246.jpeg",
        category : "cooper"
    },
    {
        id : 13,
        img : "../carrs/03rangepexels-photo-9427659.jpeg",
        category : "range"
    },
    {
        id : 14,
        img : "../carrs/04minipexels-photo-10945891.jpeg",
        category : "cooper"
    },
    {
        id : 15,
        img : "../carrs/04mercepexels-photo-2777530.jpeg",
        category : "merc"
    },
    {
        id : 16,
        img : "../carrs/05mercepexels-photo-3457780.jpeg",
        category : "merc"
    },
    {
        id : 17,
        img : "../carrs/audi.jpeg",
        category : "audi"
    },
    {
        id : 18,
        img : "../carrs/rangepexels-photo-13202281.jpeg",
        category : "range"
    },
]

const carsContainer = document.querySelector(".c-all-cars")
const buttons = document.querySelectorAll(".c-c-button")

window.addEventListener("DOMContentLoaded", function(){
    loadImages(cars)
})

buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const cat = e.currentTarget.dataset.id
        const amaCategory = cars.filter(function(items){
            if(items.category === cat){
                return items
            }
        })
        if(cat === "all"){
            return loadImages(cars)
        }else{
            return loadImages(amaCategory)
        }
    })
})

function loadImages(e){
    const allImages = e.map(function(items){
        return `<img class="c-image" src=${items.img} alt="image">`
    }).join("")

    carsContainer.innerHTML = allImages
}



const cards = document.querySelectorAll(".card");



for(let card of cards) {
    card.addEventListener("click", function () {
        
        const cardIndex = card.getAttribute("id")
        //console.log(cardIndex)
        window.location.href = `/recipe-detail?id=${cardIndex}`
        //window.location.href = `/recipe-detail`
    } )
}


var card = document.getElementsByClassName("card")
console.log(card)
let products = [...card]
console.log(products)

products.map(item => {
    console.log(item)
    item.addEventListener("mouseover", () => {
        item.childNodes[9].focus()
    })
    item.addEventListener("mouseleave", () => {
        item.childNodes[9].blur()
    })
})
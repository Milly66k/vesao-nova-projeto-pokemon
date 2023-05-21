const Pokebola = document.querySelector(".pokebola")
const sidbar = document.querySelector(".sidbar")
const ImgsItems1 = document.querySelector(".ImgsItems1")
const ImgsItems2 = document.querySelector(".ImgsItems2")
const ImgsItems3 = document.querySelector(".ImgsItems3")
const ImgsItems4 = document.querySelector(".ImgsItems4")
const ImgBackground = document.querySelector(".imagem")


function AddEvento (tag, change, changeImg = false) {
    tag.addEventListener("click", () => {
        change.classList.toggle("visible")
        if(changeImg){
            ImgBackground.src = changeImg
        }
    })

}
AddEvento(Pokebola, sidbar)
AddEvento(ImgsItems1, sidbar, "./src/imagens/img1pokemon.jpg")
AddEvento(ImgsItems2, sidbar, "./src/imagens/img2pokemon.jpg")
AddEvento(ImgsItems3, sidbar, "./src/imagens/img3pokemon.jpg")
AddEvento(ImgsItems4, sidbar, "./src/imagens/img5pokemon.jpg")
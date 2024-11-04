

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
function cliqueiNoBotao() {
    form.style.left = "45%"
    form.style.transform = "transleteX(-70%)"
    mascara.style.visibility = "visible"

}

function mascaraButton() {
    form.style.left = "-300px"
    form.style.transform = "transleteX(0)"
    mascara.style.visibility = "hidden"


}

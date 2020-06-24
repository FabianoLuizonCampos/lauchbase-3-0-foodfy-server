/*

const buttonHideShow = document.querySelector("#page-recipe-detail .card-preparation .card-remove p");

const textHideShow = document.querySelector("#card-text-preparation");


buttonHideShow.addEventListener("click", () => {
    const btnText = buttonHideShow.innerHTML;
    
    if (btnText == "Esconder") {
        buttonHideShow.innerHTML = "Mostrar";   
        textHideShow.classList.add("hide");
    } else {
        buttonHideShow.innerHTML = "Esconder";  
        textHideShow.classList.remove("hide"); 
    }
    
});

*/

/*
const btnsHideShow = document.querySelectorAll(".card-hide")

const txtIngredients = document.querySelector("#card-text-ingredients")
const txtPreparation = document.querySelector("#card-text-preparation")
const txtInformation = document.querySelector("#card-text-information")


for (const btn of btnsHideShow) {

    btn.addEventListener("click", function () {

        const btnText = btn.innerHTML;

        const id = btn.id

        switch (id) {
                case '0':
                    if (btnText == "Esconder") {
                        btn.innerHTML = "Mostrar";   
                        txtIngredients.classList.add("hide");
                    } else {
                        btn.innerHTML = "Esconder";  
                        txtIngredients.classList.remove("hide"); 
                    } 
                    break; 

                case '1':
                    if (btnText == "Esconder") {
                        btn.innerHTML = "Mostrar";   
                        txtPreparation.classList.add("hide");
                    } else {
                        btn.innerHTML = "Esconder";  
                        txtPreparation.classList.remove("hide"); 
                    } 
                    break; 

                case '2':
                        if (btnText == "Esconder") {
                            btn.innerHTML = "Mostrar";   
                            txtInformation.classList.add("hide");
                        } else {
                            btn.innerHTML = "Esconder";  
                            txtInformation.classList.remove("hide"); 
                        } 
                        break; 
        }


    })    
}
*/

const btnsHideShow = document.querySelectorAll(".card-hide")

const txtsHideShow = document.querySelectorAll(".card-text")

for (const btn of btnsHideShow) {

    btn.addEventListener("click", function () {

        const btnText = btn.innerHTML;

        if (btnText == "Esconder") {
            btn.innerHTML = "Mostrar";   
            txtsHideShow[btn.id].classList.add("hide");
        } else {
            btn.innerHTML = "Esconder";  
            txtsHideShow[btn.id].classList.remove("hide"); 
        }

    })    
}

const btnClics = document.querySelectorAll('.btn');
let result = document.getElementById("bt0");

// let freezClic = 5;
// for(freezClic = 0; freezClic < 15 ; freezClic ++){
  
// }


btnClics.forEach((btnClic) => {
  
  
    btnClic.addEventListener('click', (e) => {
        console.log("j'ai cliqué");
        e.preventDefault();
      result.value += e.target.id;
       
     
});

})

equal.addEventListener('click', () => {
    result.value = eval(result.value)

})
clear.addEventListener('click', () => {
    // console.log("j'ai tout supprimé");
    result.value = ""
})

pourcent.addEventListener('click', () => {
    // pourcentage //
    result.value = (result.value) / 100;

})

remove.addEventListener('click', () => {
    // console.log("je revien en arriere ");
    result.value = (result.value).slice("", -1);


})

// console.log(navigator.userAgent);

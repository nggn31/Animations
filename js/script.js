//Para que el puerquito brinque
const piggyBank = document.getElementById('piggyBank');
const coinsContainer = document.querySelector('.coinsContainer'); //Pusimos el query selector por que no tenemos un id, tenemos una clase
const initialCoins=20; 
let currentCoins=initialCoins; 
const coinValue = document.querySelector('.coinValue');

//Mostrar el valor inicial de las monedas en el HTML
coinValue.textContent = `Tengo $${initialCoins}`;

piggyBank.addEventListener('click', () => {
    if (currentCoins > 0) {
    //Salto del puerquito
    piggyBank.classList.add('jump');

    setTimeout(() => { //Esto es para cuando le de click al puerquito la animacion vuelva a ocurrir
        piggyBank.classList.remove('jump');
    }, 500);

    //Crear monedas
    const coin = document.createElement('div'); 
    coin.classList.add('coins'); //Agrega los estilos
    coinsContainer.appendChild(coin); //Agrega los elementos al contenedor
    setTimeout(()=>{
       coin.remove(); //Remueve la moneda ya que la tengamos, es decir aparece y desaparece
    },500); 

    //Actualizar valor de monedas
    currentCoins -= 1; // eso es igual a decir initialCoins = initialCoins - 1;
    coinValue.textContent = `Me quedan $ ${currentCoins}`; //text.content es para agregarle valores a nuestro html desde js
    }
    else{
        alert('you dont have any more coins :c');
    }
    });





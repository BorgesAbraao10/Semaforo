const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons');
let colorIndex = 0;

const trafficligth = ( event ) => {
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if ( colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex = 0;
    }
    
}

const changecolor = () => {
    const colors = ['red', 'yellow', 'green'] //array de cores
    const color = colors[ colorIndex ];
    turnOn [color] ();
    nextIndex();
}

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => setInterval( changecolor, 1000 ) // setInterval executa um código no intervalo de tempo que você determinar.

}

buttons.addEventListener('click', trafficligth );
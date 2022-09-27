const spinningJs = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(-30deg) scale(0)' }
]

const spinningTime = {
  duration: 2000,
  iterations: 1,
}


const javaScript = document.querySelector('.javaScript');
const javaScriptCursor = document.querySelector('.javaScript').style.cursor = "pointer";


javaScript.addEventListener('click', () => {
  javaScript.animate(spinningJs, spinningTime)
})


// ##################################################
// Teste de funcionalidade de alteração da seta para um circle, algum bug no scroll, desativada.
// const circle = document.querySelector('#circle');
// function followMouse(event){
//   circle.style.top = event.y + 'px';
//   circle.style.left = event.x + 'px';
// }
// window.addEventListener('mousemove', followMouse);
//##################################################



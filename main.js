const bgColor = ['red', 'green', '#45f234', 'rgba(133,122, 100)'];
const btn = document.querySelector('button');
const color = document.querySelector('.color');
const container = document.querySelector('.container')
btn.addEventListener('click', function(e){
    const conColor = randomColor();
    document.body.style.backgroundColor = bgColor[conColor]; 
    color.textContent = bgColor[conColor]
});
function randomColor(){
    return Math.floor(Math.random() * bgColor.length)
}
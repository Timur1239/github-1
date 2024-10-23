const burger = document.querySelector('#burger');
const open = document.querySelector('#open');
const closeTag = document.querySelector('#close');

burger.onclick = () =>{
    open.style.display = 'block'
}
closeTag.onclick = () => {
    open.style.display = 'none'
}
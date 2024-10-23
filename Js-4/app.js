const h1 = document.querySelector('h1')
const btns = document.querySelectorAll('button')

let count = 0;

btns[0].onclick = () => {
    h1.innerText = count++;
}

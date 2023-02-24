let menuSelector = document.getElementsByClassName('navContainer');
let content = document.getElementsByClassName('header');

console.log(content[0].style);

menuSelector[0].addEventListener('change', () => {
    if (menuSelector[0].checked) {
        console.log(menuSelector[0].checked);
        content[0].style.height = "0px";
        console.log(content[0].style);
    } else {
        console.log(menuSelector[0].checked);
        content[0].style.height = "100vh";
        console.log(content[0].style);
    }
})
/* const placeForValue = document.getElementById('hakutulos'); */
const hakutulos = document.getElementById('hakutulos');

function lisaaArvo(){
for(let i = 0;i < sessionStorage.length; i++){
        const key = sessionStorage.key(i);
        const arvo = sessionStorage.getItem(key);
        hakutulos.innerHTML += `${arvo}<br />`;
        console.log(arvo);
    }           
    }

const menuToggle = document.querySelector('.toggle');
        const showcase = document.querySelector('.showcase');
        menuToggle.addEventListener('click', ()=> {
            menuToggle.classList.toggle('active');
            showcase.classList.toggle('active');
        });

const moveToHae = () => {
    location.replace('otherAreas.html');
}


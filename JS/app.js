
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');


const menuToggle = document.querySelector('.toggle');
        const showcase = document.querySelector('.showcase');

        menuToggle.addEventListener('click', ()=> {
            menuToggle.classList.toggle('active');
            showcase.classList.toggle('active');
        });

function link1Active(){
    link1.classList.add('.linkActive');

}

link1.addEventListener('click', link1Active);

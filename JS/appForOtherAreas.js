
let userInput = document.getElementById("userInput");
const etsiNappi = document.querySelector(".etsiNappi");
const output = document.getElementById('output');


const menuToggle = document.querySelector('.toggle');
        const showcase = document.querySelector('.showcase');
        menuToggle.addEventListener('click', ()=> {
            menuToggle.classList.toggle('active');
            showcase.classList.toggle('active');
        });



const lisaaSessionStorageen = () => {
    const arvo = userInput.value;
    const key = "avain";
    
    if(arvo){
        let pienella = arvo.toLowerCase();
        if(pienella==="puotila"){
            sessionStorage.setItem(key, pienella);
            window.location.href="./areas/puotilanranta.html";
        }else if(pienella!=="puotila"){
            sessionStorage.setItem(key, arvo);
            window.location.href="noPlans.html";
        }   
    }else if(!arvo){
        sessionStorage.setItem(key, arvo);
        window.location.href="emptyField.html";
    }

    /* for(let i = 0;i < localStorage.length; i++){
        const key = localStorage.key(i);
        const arvo = localStorage.getItem(key);
        output.innerHTML += `${arvo}<br />`;
    } */

}

etsiNappi.addEventListener('click', lisaaSessionStorageen);

userInput.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        etsiNappi.click();
    }
})
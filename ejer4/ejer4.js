

function renderizaBotones () {
    for (let i = 1; i <= 100; i++) {
        const botones = document.createElement("button");
        
        const section = document.querySelector(".section");
        botones.id=[i];
        botones.textContent = `${i}`;
    
        section.appendChild(botones)
        
    }
    const botonesDom = document.querySelectorAll("button")
    botonesDom.forEach((element)=>{
        const buttonNumber = element.innerText;
        if (buttonNumber % 2 === 0){
            element.style.backgroundColor = "blue"
        }else {
            element.style.backgroundColor = "red"
        }
    })
    
    
    }
    renderizaBotones();
    



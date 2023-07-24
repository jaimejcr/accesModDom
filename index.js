const firstParagraph = document.querySelector("p");
console.log(firstParagraph);
const firstP = document.querySelector("#firstP")
const secondP = document.querySelector("#secondP")
const thirdP = document.querySelector("#thirdP")
const fourthP = document.querySelector("#fourthP")
console.log(firstP);
console.log(secondP);
console.log(thirdP);
console.log(fourthP);
const allParragraphs = document.querySelectorAll("p");
allParragraphs.forEach((parrafo, i) => {
    console.log(`parrafo ${i +1 } : ${parrafo.textContent}`);
})
fourthP.innerHTML = "Forth Paragraph ";

// Cambia el estilo de cada párrafo usando JavaScript (color, background, border, font-size, font-family).
firstP.style.color = "blue"; 
firstP.style.backGroundColor = "yellow";
firstP.style.border = "black";
firstP.style.fontSize = "40px";

secondP.style.color = "blue"; 
secondP.style.backGroundColor = "orange";
secondP.style.border = "black";
secondP.style.fontSize = "30px";

thirdP.style.color = "blue"; 
thirdP.style.backGroundColor = "green";
thirdP.style.border = "black";
thirdP.style.fontSize = "20px";

fourthP.style.color = "blue"; 
fourthP.style.backGroundColor = "brown";
fourthP.style.border = "black";
fourthP.style.fontSize = "10px";

// Selecciona todos los párrafos, itera por cada uno de ellos y dale al 1º y 3º un color green, y al 2º y 4º red

allParragraphs.forEach((parra, i) => {
    if (i === 0 || i === 2) {
        parra.style.color = "green";
    }
    else if (i === 1 || i === 3) {
        parra.style.color = "red"; 
    }
})

// Cambia el texto, id y class de cada párrafo.

allParragraphs.forEach((p, i) => {
    
        p.textContent = "New first Parragraph";
        p.id = `parrafo ${i + 1}`;
        p.className = `parrafo ${i + 1}`;
})



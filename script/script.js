//övre del

const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

for (let i = 1; i < 6; i = i + 1) {
    const elementales = document.createElement('h1');
    document.body.appendChild(elementales);
    elementales.innerText = "Rad" + " " + i;
    elementales.style.textAlign = 'center';
    elementales.style.color = "hsl(215,80%,50%)";
    elementales.style.fontSize = `${i * 12}px`;
    elementales.style.backgroundColor = `hsl(${(120) + (i * 15)},70%,80%)`;
}

//undre delen

const flexelement = document.createElement('div');
document.body.appendChild(flexelement);
flexelement.style.display = "flex";
flexelement.style.flexFlow = "row  nowrap";
flexelement.style.border = "black 2px solid";
flexelement.style.justifyContent = "space-around";
flexelement.style.padding = "50px";



//ul1
const ul1 = document.createElement('ul');
flexelement.appendChild(ul1);
ul1.style.border = "hsl(250,86%,87%) 10px solid";
ul1.style.padding = "0";


for (let i = 0; i < 10; i++) {
    console.log(numbers[i]);
    const siffror1 = document.createElement('li');
    ul1.appendChild(siffror1);
    siffror1.innerText = i;
    siffror1.style.width = "4vw";
    siffror1.style.listStyleType = "none";
    if (i == 4) {
        siffror1.style.backgroundColor = "hsl(250,86%,87%)";
    }
    else if (i % 2 == 0) {
        siffror1.style.backgroundColor = "black";
        siffror1.style.color = "white";
    }


}
//andra ul

const ul2 = document.createElement('ul');
flexelement.appendChild(ul2);
ul2.style.border = "hsl(250,86%,87%) 10px solid";
ul2.style.padding = "0";

for (let i = 9; i > -1; i = i - 1) {
    console.log(numbers[i]);
    const siffror2 = document.createElement('li');
    ul2.appendChild(siffror2);
    siffror2.innerText = i;
    siffror2.style.width = "4vw";
    siffror2.style.textAlign = "center";
    siffror2.style.listStyleType = "none";
    if (i % 2 == 0) {
        siffror2.style.backgroundColor = "black";
        siffror2.style.color = "white";
    }
    if (i == 8) {
        siffror2.style.backgroundColor = "hsl(250,86%,87%)";
    }
}
// ul3
const ul3 = document.createElement('ul');
flexelement.appendChild(ul3);
ul3.style.border = "hsl(250,86%,87%) 10px solid";
ul3.style.padding = "0";

for (let i = 0; i < 10; i = i + 1) {
    console.log(numbers[i]);
    const siffror3 = document.createElement('li');
    ul3.appendChild(siffror3);
    siffror3.innerText = numbers[i];
    siffror3.style.width = "4vw";
    siffror3.style.textAlign = "right";
    siffror3.style.listStyleType = "none";
    if (i % 2 == 0) {
        siffror3.style.backgroundColor = "black";
        siffror3.style.color = "white";
    }
    if (i == 5) {
        siffror3.style.backgroundColor = "hsl(250,86%,87%)";
    }
}

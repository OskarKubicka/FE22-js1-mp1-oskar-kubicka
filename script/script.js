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


for (let i = 0; i < 3; i++) {
    const ulhard = document.createElement('ol');
    flexelement.appendChild(ulhard);
    ulhard.style.border = "hsl(250,86%,87%) 10px solid";
    ulhard.style.padding = "0";
    ulhard.style.display = "flex";
    ulhard.style.flexFlow = "column";
    for (let j = 0; j < 10; j++) {
        const siffror1 = document.createElement('li');
        ulhard.appendChild(siffror1);
        siffror1.innerText = j;
        siffror1.style.width = "4vw";
        siffror1.style.listStyleType = "none";
        if (j % 2 == 0 && (i == 0 || i == 2)) {
            siffror1.style.backgroundColor = "black";
            siffror1.style.color = "white";
        }
        else if (j % 2 == 0 && (i == 1)) {
            siffror1.style.backgroundColor = "black";
            siffror1.style.color = "white";
        }
        if (i == 2) {
            siffror1.innerText = numbers[j];
            siffror1.style.textAlign = "end";
        }

        if (i == 0 && (j == 4) || i == 2 && (j == 5) || i == 1 && (j == 8)) {
            siffror1.style.backgroundColor = "hsl(250,86%,87%)";
        }
        if (i == 1) {
            siffror1.style.textAlign = "center";
            siffror1.style.order = (j - 9) * - 1;
        }
      
    
    }

}

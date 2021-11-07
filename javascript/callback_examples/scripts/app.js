function buttonExample1(){
    var button = document.getElementById("button");
    
    button.innerHTML = "Este é o exemplo [1]";
    button.style.backgroundColor = "#674EA7";
    button.style.color = "#FCFCFC"
    button.style.borderColor = "#FCFCFC";
    button.style.border = "none";
    button.style.padding = "12px";
    button.style.borderRadius = "10px 5px";
    button.style.cursor = "not-allowed";
    button.style.fontSize = "20px";

    button.onmouseover = null;
    button.onmouseout = null;
    button.onclick = null;
}

function buttonExample2(){
    var button = document.getElementById("button");

    button.innerHTML = "Este é o exemplo [2]";
    button.style.backgroundColor = "#FCFCFC";
    button.style.color = "#0E81EA";
    button.style.borderColor = "#0E81EA";
    var button = document.getElementById("button");
    
    button.innerHTML = "Este é o exemplo [1]";
    button.style.backgroundColor = "#674EA7";
    button.style.color = "#FCFCFC"
    button.style.borderColor = "#FCFCFC";
    button.style.border = "none";
    button.style.padding = "12px";
    button.style.borderRadius = "10px 5px";
    button.style.cursor = "not-allowed";
    button.style.fontSize = "20px";

    button.onmouseover = null;
    button.onmouseout = null;
    button.onclick = null;
}

function buttonExample2(){
    var button = document.getElementById("button");

    button.innerHTML = "Este é o exemplo [2]";
    button.style.backgroundColor = "#FCFCFC";
    button.style.color = "#0E81EA";
    button.style.borderColor = "#0E81EA";
    button.style.border = "5px solid";
    button.style.padding = "12px";
    button.style.borderRadius = "8px";
    button.style.cursor = "grab";
    button.style.fontSize = "20px";

    button.onmouseover = null;
    button.onmouseout = null;
    button.onclick = null;
}

function buttonExample3(){
    var button = document.getElementById("button");

    button.innerHTML = "Passe o mouse aqui...";
    button.style.backgroundColor = "#00E539";
    button.style.color = "#004C13";
    button.style.borderColor = "#004C13";
    button.style.border = "5px solid";
    button.style.padding = "12px";
    button.style.borderRadius = "5px 15px 15px 5px";
    button.style.cursor = "progress";
    button.style.fontSize = "20px";

    button.onmouseover = changeColor;
    button.onmouseout = changeColor;
    button.onclick = null;
}

function buttonExample4(){
    var button = document.getElementById("button");

    button.innerHTML = "Clique aqui...";
    button.style.backgroundColor = "#B52127";
    button.style.color = "#FCFC99"
    button.style.borderColor = "#FCFC99";
    button.style.border = "5px solid";
    button.style.padding = "12px";
    button.style.borderRadius = "8px";
    button.style.cursor = "pointer";
    button.style.fontSize = "20px";

    button.onmouseover = null;
    button.onmouseout = null;
    button.onclick = changeText;
}

function buttonExample5(){
    var button = document.getElementById("button");

    button.innerHTML = "E aí, gostou?!";
    button.style.backgroundColor = "rgb(2,0,36)";
    button.style.color = "#FCFCFC"
    button.style.borderColor = "#FCFCFC";
    button.style.border = "5px solid";
    button.style.padding = "12px";
    button.style.borderRadius = "8px";
    button.style.cursor = "wait";
    button.style.fontSize = "20px";

    button.onmouseover = null;
    button.onmouseout = null;
    button.onclick = null;
}

const changeText = () => {
    var button = document.getElementById("button");
    button.innerHTML = "Bota uma mais difícil, fessôr! rsrsrs";
}

const changeColor = () => {
    var button = document.getElementById("button");
    button.style.borderColor = button.style.backgroundColor;
    button.style.backgroundColor = button.style.color;
    button.style.color = button.style.borderColor;
}

function buttonChange(buttonExampleFunction){
    buttonExampleFunction();
}
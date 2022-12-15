const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");
const item7 = document.getElementById("item7");
const item8 = document.getElementById("item8");
const item9 = document.getElementById("item9");
const root = document.querySelector(":root");
const body = document.querySelector("body");

const result = document.getElementById("result");
const restartButton = document.getElementById("restartButton");
let playerTurn = "X";
let movimentos = 0;

function putXorO(item){
    if (playerTurn === "X"){
        item.innerText = "X";
        item.value = "X";
        movimentos++ ;
        playerTurn = "O";
        item.setAttribute("onclick", " ");
        checkWinner();
    } else if (playerTurn === "O"){
        item.innerText = "O";
        item.value = "O";
        movimentos++ ;
        playerTurn = "X" ;
        item.setAttribute("onclick", " ");
        checkWinner();
    }
}

function checkWinner(){

    if(item1.value + item2.value + item3.value === "XXX"){
        result.innerHTML = "<strong class='highlight'> X </strong> venceu!";
        finishGame();
    } else if(item4.value + item5.value + item6.value === "XXX"){
        result.innerHTML = "<strong class='highlight'> X </strong> venceu!";
        finishGame();
    } else if(item7.value + item8.value + item9.value === "XXX"){
        result.innerHTML = "<strong class='highlight'> X </strong> venceu!";
        finishGame();
    } else if(item1.value + item4.value + item7.value === "XXX"){
        result.innerHTML = "<strong class='highlight'> X </strong> venceu!";
        finishGame();
    } else if(item2.value + item5.value + item8.value === "XXX"){
        result.innerHTML = "<strong class='highlight'> X </strong> venceu!";
        finishGame();
    } else if(item3.value + item6.value + item9.value === "XXX"){
        result.innerHTML = "<strong class='highlight'> X </strong> venceu!";
        finishGame();
    } else if(item1.value + item5.value + item9.value === "XXX"){
        result.innerHTML = "<strong class='highlight'> X </strong> venceu!";
        finishGame();
    } else if (item3.value + item5.value + item7.value === "XXX"){
        result.innerHTML = "<strong class='highlight'> X </strong> venceu!";
        finishGame();
    } else if (item1.value + item2.value + item3.value === "OOO"){
        result.innerHTML = "<strong class='highlight'> O </strong> venceu!";
        finishGame();
    } else if(item4.value + item5.value + item6.value === "OOO"){
        result.innerHTML = "<strong class='highlight'> O </strong> venceu!";
        finishGame();
    } else if(item7.value + item8.value + item9.value === "OOO"){
        result.innerHTML = "<strong class='highlight'> O </strong> venceu!";
        finishGame();
    } else if(item1.value + item4.value + item7.value === "OOO"){
        result.innerHTML = "<strong class='highlight'> O </strong> venceu!";
        finishGame();
    } else if(item2.value + item5.value + item8.value === "OOO"){
        result.innerHTML = "<strong class='highlight'> O </strong> venceu!";
        finishGame();
    } else if(item3.value + item6.value + item9.value === "OOO"){
        result.innerHTML = "<strong class='highlight'> O </strong> venceu!";
        finishGame();
    } else if(item1.value + item5.value + item9.value === "OOO"){
        result.innerHTML = "<strong class='highlight'> O </strong> venceu!";
        finishGame();
    } else if (item3.value + item5.value + item7.value === "OOO"){
        result.innerHTML = "<strong class='highlight'> O </strong> venceu!";
        finishGame();
    } else if (movimentos === 9){
        result.innerHTML = "Deu velha!";
        finishGame();
    } else{
        result.innerHTML = "É a vez de <strong class='highlight'>" + playerTurn + "</strong>"
    }
    
}

function finishGame(){
    restartButton.innerHTML = "<button class='restart-button' type='button' onclick='restartGame()'>Reiniciar</button>"
    item1.setAttribute("onclick", "");
    item2.setAttribute("onclick", "");
    item3.setAttribute("onclick", "");
    item4.setAttribute("onclick", "");
    item5.setAttribute("onclick", "");
    item6.setAttribute("onclick", "");
    item7.setAttribute("onclick", "");
    item8.setAttribute("onclick", "");
    item9.setAttribute("onclick", "");
}

function restartGame(){

    item1.setAttribute("onclick", "putXorO(item1)");
    item1.value = "";
    item1.innerText = "";

    item2.setAttribute("onclick", "putXorO(item2)");
    item2.value = "";
    item2.innerText = "";

    item3.setAttribute("onclick", "putXorO(item3)");
    item3.value = "";
    item3.innerText = "";

    item4.setAttribute("onclick", "putXorO(item4)");
    item4.value = "";
    item4.innerText = "";

    item5.setAttribute("onclick", "putXorO(item5)");
    item5.value = "";
    item5.innerText = "";

    item6.setAttribute("onclick", "putXorO(item6)");
    item6.value = "";
    item6.innerText = "";

    item7.setAttribute("onclick", "putXorO(item7)");
    item7.value = "";
    item7.innerText = "";

    item8.setAttribute("onclick", "putXorO(item8)");
    item8.value = "";
    item8.innerText = "";

    item9.setAttribute("onclick", "putXorO(item9)");
    item9.value = "";
    item9.innerText = "";

    restartButton.innerHTML = "";
    result.innerHTML = "Aperte em qualquer espaço para iniciar";
    movimentos = 0;
}

function changeTheme(){
    if (body.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#fff7f7")
        root.style.setProperty("--contrast-color", "#1c1c1c")
        root.style.setProperty("--primary-color", "#26834a")
        body.dataset.theme = "light"
      } else {
        root.style.setProperty("--bg-color", "#1c1c1c")
        root.style.setProperty("--contrast-color", "#fff7f7")
        root.style.setProperty("--primary-color", "#00ffee")
        body.dataset.theme = "dark"
      }
}
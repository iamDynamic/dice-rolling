
var btn = document.getElementById("btn")
var p = document.querySelector("p")
let GameStart = false;
// ================================================================ //
btn.addEventListener("click",()=>{
    btn.innerHTML = "reroll"
    GameStart = true;
    if(GameStart == true){
        var numbers = ["1","2","3","4","5","6","7"]
       var randomArray =  Math.floor(Math.random() * numbers.length)
        p.innerHTML =  randomArray
        
    }
    btn.addEventListener("click",()=>{
        GameStart = true;
    if(GameStart == true){
        var numbers = ["1","2","3","4","5","6","7"]
       var randomArray =  Math.floor(Math.random() * numbers.length)
        p.innerHTML =  randomArray
        
    }
    })
})


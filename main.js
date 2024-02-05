let countElement = document.getElementById('count');
let defuserEi = document.getElementById('userInput');
let startbtn = document.getElementById('startbtn')
startbtn.addEventListener('click', function(){

    let coutdown = 10;

let unqueNo = setInterval(function(){
    coutdown = coutdown -1;
    countElement.textContent=coutdown;
    if(coutdown===0){
        countElement.textContent="Boom!!"
        clearInterval(unqueNo)
    }
},1000)

defuserEi.addEventListener('keydown',function(event){
    let userEnter = defuserEi.value;
    if(event.key==='Enter' && userEnter==="defuse" && coutdown!==0){
        countElement.textContent="you did it";
        clearInterval(unqueNo)
    }
    

})


})


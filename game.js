let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#resetbtn");
let newbtn =document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};


const disableboxes=()=>{
   for(let box of boxes){
    box.disabled=true;
   }
}

const enableboxes=()=>{
    for(let box of boxes){
     box.disabled=false;
     box.innerText="";
    }
 }


const showWinner=(winner)=>{
     msg.innerText=`Congratulations,winner is ${winner}`;
     msgcontainer.classList.remove("hide");
     disableboxes();
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 ===pos2 && pos2 ===pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
}

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
let box = document.querySelectorAll(".a1");
let msg = document.querySelector(".winner");
let newbtn = document.querySelector(".newgame");
let resetbtn = document.querySelector(".resetbtn");
let turn_x = true;


const winPattern = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];



const reset = () => {
   for (let a1 of box) {
      turn_x = true;
      a1.disabled = false;
      a1.innerText = "";

   }
   msg.classList.add("hide");
    a1.classList.add("x");

}


box.forEach((a1) => {
   a1.addEventListener("click", function () {
      if (turn_x) {
         a1.innerText = "X";
         a1.classList.add("x");
         turn_x = false;
      }
      else {
         a1.innerText = "O";
         a1.classList.add("o");
         turn_x = true;
      }
      a1.disabled = true;
      checkwinner();

   })
})


const showWinner = (pos1) => {
   msg.innerText = `Congratulations,Winnner is ${pos1}`;
   msg.classList.remove("hide");
}
const disabled = () => {
   for (let a1 of box) {
      a1.disabled = true;
   }
}


const checkwinner = function () {
   for (let pattern of winPattern) {
      let pos1 = box[pattern[0]].innerText;
      let pos2 = box[pattern[1]].innerText;
      let pos3 = box[pattern[2]].innerText;
      if (pos1 != "" && pos2 != "" && pos3 != "") {
         if (pos1 === pos2 && pos2 === pos3) {
            console.log("winner", pos2),
               showWinner(pos1);
            disabled();
         }
      }
   }
}
resetbtn.addEventListener("click", reset);
newbtn.addEventListener("click", reset);
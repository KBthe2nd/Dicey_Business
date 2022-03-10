let arrDie = [];
let dicBtn = document.querySelector("#gen_die");
let rollDie = document.querySelector("#roll_die");
let sumDie = document.querySelector("#sum_die");
const randomNumber = Math.floor(Math.random() * 6) + 1;
class Die {
  constructor() {
    dicBtn.addEventListener("click", () => {
      this.div = document.createElement("div");
      this.div.setAttribute("id", "new_die");
      this.roll();
      arrDie.push(this.div);
      document.body.appendChild(this.div);
    });
    rollDie.addEventListener("click", () => {
    for (let i = 0; i < arrDie.length; i++) {
       arrDie[i].textContent = randomNumber;
    }
    });
    sumDie.addEventListener("click", () => {
      this.sum();
    });
  }

  roll() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    this.value = document.createTextNode(randomNum);
    this.div.appendChild(this.value);
  }
  sum() {
    let res = arrDie.reduce(function (prev, curr) {
      return (Number(prev) || 0) + (Number(curr) || 0);
    });
    alert(res);
  }
}
new Die();

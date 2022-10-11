// const formMain = document.querySelector('.form-main');

// const button= document.querySelector('.transaction-button');

// const form = document.querySelector('.form');

// const labelName =document.getElementById('label');

// labelName.addEventListener('keyup ', e=>{

//     const name=labelName.label.value;

//     console.log(name);

// });

// const inputs = document.querySelectorAll(".form input,select");

// const inputArray = Array.from(inputs);

// console.log(inputArray);

// inputArray.reduce((acc,input)=>({...acc,[input.id]:[input.value]}),{})

const inputLabel = document.getElementById("label");

const inputAmount = document.getElementById("amount");

const selectValue = document.getElementById("type");

const button = document.querySelector("button");

const incomeHolder = document.querySelector(".income-color span");
const expenseHolder = document.querySelector(".expense-color span");
const balanceHolder = document.querySelector(".balance-span");

const listing = document.querySelector('.colm-two');

let expenseArray = [];
balance = 0;
income = 0;
expense = 0;

button.addEventListener("click", () => {

  if(inputAmount.value.length>0 && inputLabel.value.length>0){
    let details = {
      label: inputLabel.value,
      amount: inputAmount.value,
      type: selectValue.value,
    };
  
    expenseArray.push(details);
  
    if ((details.type === "plus")) {
      income = parseInt(income) + parseInt(details.amount);
      incomeHolder.textContent = income;
      balance = parseInt(balance) + parseInt(details.amount);
      balanceHolder.textContent = balance;

      const html=`
      <div class="history-item income-border">
                    <h5>${inputLabel.value}</h5>
                    <h5>+${inputAmount.value}</h5>
                </div>`

      listing.innerHTML+= html;
    } else if ((details.type === "minus")) {
      expense = parseInt(expense) + parseInt(details.amount);
      expenseHolder.textContent = expense;
      balance = parseInt(balance) - parseInt(details.amount);
      balanceHolder.textContent = balance;

      const html=`
      <div class="history-item expense-border">
                    <h5>${inputLabel.value}</h5>
                    <h5>-${inputAmount.value}</h5>
                </div>`

      listing.innerHTML+= html;
    } else {
      console.log("error");
    }
    
  
    inputAmount.value = "";
    inputLabel.value = "";
  }


  

});

console.log(expenseHolder.textContent);

let accountName = document.getElementById("accountName");
let deposit = document.getElementById("deposit");
let btnClick = document.getElementById("btnCreate");
let textResult = document.getElementById("result");

btnClick.onclick = addNew;

let accountList = [];
class Account {
  name;
  balance;
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  showValue() {
    return `Account Name : ${this.name} Balance : ${this.balance}`;
  }
}

function createNewAccount(name, balance) {
  let newAccount = new Account(name, balance);
  accountList.push(newAccount);
  textResult.innerHTML = accountList.map(e => "\n" + e.showValue());
}

function addNew() {
  createNewAccount(accountName.value, parseInt(deposit.value));
}


 

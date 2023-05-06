function Account(holderName, balance) {
    this.holderName = holderName;
    this.balance = balance || 0;
}

Account.prototype.deposit = function(amount) {
    if(amount > 0 ) {
        this.balance += amount;
    } else {
        alert("Invalid amount. Deposit failed.")
    }
};

Account.prototype.withdraw = function(amount) {
    if(amount > 0 && this.balance >= amount) {
        this.balance -= amount;
    } else {
        alert("Invalid amount or not enough money. Deposit failed.")
    }
};

let accNumberCounter = 1;
let allAccounts = [];

function onSubmit() {
    let userName = document.getElementById("name").value;
    let userBalance = parseInt(document.getElementById("balance").value);

    let newAcc = new Account(userName, userBalance);

    let holderName = document.getElementById("acc-holder");
    let accBalance = document.getElementById("acc-balance");

    holderName.innerHTML = newAcc.holderName;
    accBalance.innerHTML = newAcc.balance;
    document.getElementById("bank-operations").style.visibility = "visible";
    allAccounts.push(newAcc);
    accNumberCounter++;
}

function onWithdraw() {

    let amount = parseInt(document.getElementById("amount").value);
    if(amount > allAccounts[allAccounts.length - 1].balance)
        return alert("You do not have enough money!")
    let accBalance = document.getElementById("acc-balance");

    allAccounts[allAccounts.length - 1].withdraw(amount);

    accBalance.innerHTML = allAccounts[allAccounts.length - 1].balance;
}

function onDeposit() {

    let amount = parseInt(document.getElementById("amount").value);
    let accBalance = document.getElementById("acc-balance");

    allAccounts[allAccounts.length - 1].deposit(amount);

    accBalance.innerHTML = allAccounts[allAccounts.length - 1].balance;
}
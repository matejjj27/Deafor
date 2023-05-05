let account = {
    holderName: "",
    accNumber: "",
    balance: 0,

    withdraw(amount) {
        if(balance < amount) {
            return alert("You do not have enough money for this transaction.");
        }
        this.balance = this.balance - amount;
    },
    deposit(amount) {
        this.balance = this.balance + amount;
    }
}
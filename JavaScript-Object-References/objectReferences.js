let myAccount = {
    firstName: 'Can Kara',
    expenses: 0,
    income: 0
}

let addIncome = ((account, income) => { //gelirler
    return account.income = account.income + income
})


let addExpenses = function (account, amount) { //giderler
    account.expenses = account.expenses + amount
}


let resetAccount = ((account) => {
    account.expenses = 0
    account.income = 0
})

let getAccountSummary = ((account) => {
    let balance = account.income - account.expenses
    return `Account for ${account.firstName} has Balance ${balance} AND İNCOME ${account.income}  in income ${account.expenses} in expenses`
})



addIncome(myAccount,2500)
addExpenses(myAccount,2.50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))






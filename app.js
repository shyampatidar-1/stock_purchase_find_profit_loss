//step1 - selecting all the elements
var initialPrice = document.querySelector("#initial-price");
var stoksQuantity = document.querySelector("#stokes-quantity");
var currentPrice = document.querySelector("#current-price");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");

btn.addEventListener("click", btnClick);

function btnClick() {
    var ip = Number(initialPrice.value);
    var qty = Number(stoksQuantity.value);
    var curr = Number(currentPrice.value);
    if (ip && qty && curr)
        calculateProfitAndLoss(ip, qty, curr);
    else
        output.innerText = "Please enter all the fields 😲😲 : )"

}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) { // loss logic here
        var loss = (initial - current) * quantity;
        var loss1 = (initial - current);
        var lossPercentage = (loss1 / initial) * 100;

        // console.log(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`)

        showOutput(`Whoops!! Your loss is ${loss} and the percentage is ${lossPercentage}% 😥😥 : )`);

    } else if (current > initial) { // profit logic here
        var profit = (current - initial) * quantity;
        var profit1 = (current - initial);
        var profitPercentage = (profit1 / initial) * 100;

        // console.log(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`)

        showOutput(`Hey the profit is ${profit} and the percentage is ${profitPercentage}% 🥳🥳`)

    } else { //  the rest logic 
        // console.log("No pain No gain! and no gain no pain")

        showOutput("No pain No gain! and no gain no pain 😐😐 : )")
    }
}
// calculateProfitAndLoss(100,10,10);
// calculateProfitAndLoss(50,10,100)
// calculateProfitAndLoss(10,10,10)

function showOutput(message) {

    output.innerText = message;

}
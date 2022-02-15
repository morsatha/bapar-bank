//deposit Taka
document.getElementById('deposit-button').addEventListener('click', function () {
    //get amount the deposited
    const depositInput = document.getElementById('deposit-input');
    const depositTakaText = depositInput.value;
    const depositTaka = parseFloat(depositTakaText);
    // console.log(depositTaka);

    const depositTotal = document.getElementById('deposit-total');
    const countDepositText = depositTotal.innerText;
    const countDeposit = parseFloat(countDepositText);
    const newDepositTotal = depositTaka + countDeposit;
    depositTotal.innerText = newDepositTotal;



    //update acount
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceCount = parseFloat(totalBalanceText);
    const totalNewBalance = totalBalanceCount + depositTaka;
    totalBalance.innerText = totalNewBalance;



    //clear the inputFild
    depositInput.value = '';

})
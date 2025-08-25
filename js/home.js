const validPin = 1234 ;

// add money feature

document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);

    const pinNumber = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length !== 11) {
      alert("Please Provide Valid Account Number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Please Provide valid Pin Number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });



  //CashOut money feature

  document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault();
    // console.log('clicked')
    
    const amount = parseInt(document.getElementById('withdraw-amount').value);

    const availableBalance = document.getElementById('available-balance').innerText;

    const totalNewAvailableBalance = availableBalance - amount;
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;

     const agentNumber = parseInt(document.getElementById('agent-number').value);

    const pinNumber = parseInt(document.getElementById("pin").value);

    if(agentNumber.length < 11){
        alert("Please Provide Valid Agent Number")
        return;
    }
    if(pinNumber !== validPin){
        alert("Please Provide valid Pin");
        return;
    }
});

//Get bonus feature

document.getElementById('get-bonus-btn').addEventListener('click',function(e){
    e.preventDefault();
    const coupon = 8888;
    const couponValue = parseInt(document.getElementById('coupon-input').value)
    
    const available = document.getElementById('available-balance').innerText
    const intAvailable = parseInt(available);
    if(coupon===couponValue){
        available1 = intAvailable + 1000;
        document.getElementById('available-balance').innerText = available1;
    }
    else{
        alert('Please Provide valid Coupon');
    }

   
});

//Transfer feature

document.getElementById('send-now-btn').addEventListener('click', function(e){
  e.preventDefault();

  const amount = parseInt(document.getElementById('amount-value').value)
  const accountNum = parseInt(document.getElementById('account-num').value)

  const available = document.getElementById('available-balance').innerText

  const pinNum = parseInt(document.getElementById('transfer-pin').value);


  const transferAmount = available - amount;
  document.getElementById('available-balance').innerText = transferAmount;

  if(accountNum.length < 11 ){
        alert("Please Provide Valid Account Number")
        return;
    }
    if(validPin !== pinNum){
        alert("Please Provide valid Pin");
        return;
    }

});




  //toggling feature--

  document.getElementById("add-button").addEventListener("click", function (e) {
     document.getElementById("cash-out-parent").style.display = "none";
      document.getElementById('get-bonus-parent').style.display = 'none';
  document.getElementById("add-money-parent").style.display = "block";
  document.getElementById('transfer-parent').style.display = 'none'
});
document
  .getElementById("cash-out-button")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
     document.getElementById('get-bonus-parent').style.display = 'none';
     document.getElementById('transfer-parent').style.display = 'none'
  });

  document.getElementById('get-bonus').addEventListener('click',function(e){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'block';
    document.getElementById('transfer-parent').style.display = 'none'
  });

  document.getElementById('transfer-money').addEventListener('click',function(e){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('transfer-parent').style.display = 'block'

  })


  //Logout feature

  document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = '../index.html'
  })


//Login button functionality

document.getElementById('btn-login').addEventListener('click',function(e){
   e.preventDefault();
  

   const mobileNumber = +8801737539282;
   const pin = 1234;
   const mobileNumberValue = parseInt(document.getElementById('mobile-number-value').value );
   const pinNumberValue = parseInt(document.getElementById('pin-value').value) ;

   if(mobileNumber===mobileNumberValue && pin===pinNumberValue){
      window.location.href = '../home.html';
   }
   else{
      alert('Wrong credentials!!');
   }

});


//function when cart is clicked
$('.visibility-cart').on('click',function(){
    //variables
    var $btn =  $(this); 
    var $cart = $('.cart');
    console.log($btn);
    //actions when corresponding buttons are clicked
    if ($btn.hasClass('is-open')) {
       $btn.removeClass('is-open');
       $btn.text('O')
       $cart.removeClass('is-open');     
       $cart.addClass('is-closed');
       $btn.addClass('is-closed');
    } else {
       $btn.addClass('is-open');
       $btn.text('X')
       $cart.addClass('is-open');     
       $cart.removeClass('is-closed');
       $btn.removeClass('is-closed');
    }
  
                    
  });
  
    // minus click function for quantity
    $('a.qty-minus').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest('div').find('input');
      var value = parseInt($input.val());
      
      if (value > 1) {
        value = value - 1;
      } else {
        value = 0;
      }
      
      $input.val(value);
          
    });
  
    //plus click function for quantity
    $('a.qty-plus').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest('div').find('input');
      var value = parseInt($input.val());
  
      if (value < 100) {
      value = value + 1;
      } else {
        value =100;
      }
  
      $input.val(value);
    });
  
  //restrict input from user with quantity
  $('input').on('blur', function(){
  
    var input = $(this);
    var value = parseInt($(this).val());
  
      if (value < 0 || isNaN(value)) {
        input.val(0);
      } else if
        (value > 5) {
        input.val(5);
      }
  });


function validateForm() {
    //if the order has issues, it will not continue whereas, if it does, it will continue to the payment form  
    if(currentTab == 0){
        if (grandPrice.innerText == "0.00"){
            alert("There are no items in your cart!");
            return false; 
        } else {
            return true;
        }
    }
    // First Name, Email, Contact number validation
    if(currentTab == 1){
        var validForm = 0;
        var letters = /^[A-Za-z\s]+$/; 
      
        firstname = document.getElementById("firstname").value;
        if(firstname.match(letters)){
            document.getElementById("fnameerror").innerHTML = "";
            validForm++;
        } else {
            document.getElementById("fnameerror").innerHTML = "Please enter your first name (letters-only)";
            
        }

        //Last Name validation 
        lastname = document.getElementById("lastname").value;
        if(lastname.match(letters)){
            document.getElementById("lnameerror").innerHTML = "";
            validForm++;
        } else {
            document.getElementById("lnameerror").innerHTML = "Please enter your last name (letters-only)";  
        }

        //Phone Number validation 
        phoneNo = document.getElementById("phoneNo").value;
        var phoneno = /^\d{10}$/;
        if (phoneNo.match(phoneno)){
            document.getElementById("phoneerror").innerHTML = "";
            validForm++;
        }
        else {
            document.getElementById("phoneerror").innerHTML = "Must be 10-digits phone number.";
        }
        

        //Email validation 
        email = document.getElementById("email").value;
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.match(mailformat)){
            //e.g. foodnfast@gmail.com
            document.getElementById("emailerror").innerHTML = "";
            validForm++;
        }else if(email == ""){ //forces the user to put email because it's required
            document.getElementById("emailerror").innerHTML = "Please enter your email";
        } else { //e.g. foodnfast, foodnfast@
            document.getElementById("emailerror").innerHTML = "Must have '@'";
        }

        if(validForm == 4){
            return true; 
        } else {
            return false; 
        }
    } 
    //Credit Card validation for VISA
    if(currentTab == 2){
        var cardno = /^\d{16}$/; 
        var letters = /^[A-Za-z\s]+$/; 
        validForm = 0;
        
        cardnumber = document.getElementById("cardnumber").value;
        if(cardnumber.match(cardno)){
            document.getElementById("cardnumbererror").innerHTML = "";
            validForm++;
        } else {
            document.getElementById("cardnumbererror").innerHTML = "Enter 16-digit numbers";
        }

        //Card Holder Name validation (Visa and Mastercard)
    
        cardholdername = document.getElementById("cardholdername").value;
        if(cardholdername.match(letters)){
            document.getElementById("cardholdernameerror").innerHTML = "";
            validForm++;
        } else {
            document.getElementById("cardholdernameerror").innerHTML = "Letters-only";  
        }

        //CVC validation
        var numbers = /^\d{3}$/;
        cvc = document.getElementById("cvc").value;
        if(cvc.match(numbers)){
            document.getElementById("cvcerror").innerHTML = "";
            validForm++;
        } else {
            document.getElementById("cvcerror").innerHTML = "3-digit number only";  
        }

        
        
        //Date Until Validation 
        var validuntil = document.getElementById("validuntil").value;
        dateInput();
        
        function dateInput() {
            var validDate = validDateCheck(validuntil);
            if (validuntil === ""){
                document.getElementById("validuntilerror").innerHTML = "Date valid is required";
                return;
            }
            if (!validDate){
                document.getElementById("validuntilerror").innerHTML = "Date expired";
                return;
            } else {
                document.getElementById("validuntilerror").innerHTML = "";
                validForm++;
                return;
            }
        }
        function validDateCheck(validuntil){
            var today = new Date(); 
            var dd = today.getDate();
            var mm = today.getMonth() + 1; 
            var yyyy = today.getFullYear();
        
            if (dd < 10){ 
                dd = '0' + dd;
            }
            if (mm < 10){ 
                mm = '0' + mm;
            }

            today = yyyy + '-' + mm + '-' + dd;
        
            if (validuntil < today){
                return false;
            } else { 
                return true;
            }
        }

        if(validForm == 4){
            return true;
        } else {
            return false;
        }
        
    }
    //returning order when fully completed without error
    if(currentTab == 3){
        return true;
    }
}

//activiting required classes
function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}


// chicken - A
let chickenselection1A = document.querySelector("#chickenListA");
let chickenselection2A = document.querySelector("#chicken_quantityA");

//.toFixed(2)

chickenselection1A.addEventListener('change', () => {
    // if any changes are made to the #chickenListA (selecting chicken)
    // it will automatically update the unitPrice of chicken.
    chicken_unitPriceA.innerText = selection1A.options[selection1A.selectedIndex].value;
    // it will automatically calculate and update the totalPrice of chicken
    chicken_totalPriceA.innerText = (selection1A.options[selection1A.selectedIndex].value * selection2A.options[selection2A.selectedIndex].value).toFixed(2);
});

chickenselection2A.addEventListener('change', () => {
    // if any changes are made to the #chicken_quantityA (selecting how many chicken)
    // it will also automatically calculate and update the totalPrice of chicken.
    chicken_totalPriceA.innerText = (selection1A.options[selection1A.selectedIndex].value * selection2A.options[selection2A.selectedIndex].value).toFixed(2);
    if (isNaN(chicken_totalPriceA.innerText)){ // it could be that user only selected quantity and not chosen any chicken (therefore there is no item = should be 0 total price)
        chicken_totalPriceA.innerText = 0;
    }
});

// kimchi - B
let kimchiselection1A = document.querySelector("#kimchiListA");
let kimchi_selection2A = document.querySelectkimchi("#kimchi_quantityA");

kimchi_selection1A.addEventListener('change', () => {
    // if any changes are made to the #kimchiListA (selecting food)
    // it will automatically update the unitPrice of food.
    kimchi_unitPriceA.innerText = kimchi_selection1A.options[kimchi_selection1A.selectedIndex].value;
    // it will automatically calculate and update the totalPrice of food
    kimchi_totalPriceA.innerText = (kimchi_selection1A.options[kimchi_selection1A.selectedIndex].value * kimchi_selection2A.options[kimchi_selection2A.selectedIndex].value).toFixed(2);
});


kimchi_selection2A.addEventListener('change', () => {
    kimchi_totalPriceA.innerText = (kimchi_selection1A.options[kimchi_selection1A.selectedIndex].value * kimchi_selection2A.options[kimchi_selection2A.selectedIndex].value).toFixed(2);
    // if any changes are made to the #kimchi_quantityA (selecting how many food)
    // it will also automatically calculate and update the totalPrice of food.
    if (isNaN(kimchi_totalPriceA.innerText)){ // it could be that user only selected quantity and not chosen any food (therefore there is no item = should be 0 total price)
        kimchi_totalPriceA.innerText = 0;
    }
});

var numTo2DP;

//grandPrice = the sum of totalPrices of chicken and kimchi
selection1A.addEventListener('change', () => { //when changes are made to #chickenListA, it will automatically calcualate the grandPrice
    numTo2DP = parseFloat(chicken_totalPriceA.innerText) + parseFloat(kimchi_totalPriceA.innerText);
    grandPrice.innerText = numTo2DP.toFixed(2); //rounds it 2 decimal places
    if(grandPrice.innerText == 0){
        grandPrice.innerText = "0.00";
    }
});
    
kimchi_selection1A.addEventListener('change', () => { //when changes are made #kimchiListA, it will automatically calcualate the grandPrice
    numTo2DP = parseFloat(chicken_totalPriceA.innerText) + parseFloat(kimchi_totalPriceA.innerText);
    grandPrice.innerText = numTo2DP.toFixed(2);
    if(grandPrice.innerText == 0){
        grandPrice.innerText = "0.00";
    }
});

selection2A.addEventListener('change', () => { //when changes are made to #chicken_quantityA, it will automatically calcualate the grandPrice
    numTo2DP = parseFloat(chicken_totalPriceA.innerText) + parseFloat(kimchi_totalPriceA.innerText);
    grandPrice.innerText = numTo2DP.toFixed(2);
    if(grandPrice.innerText == 0 || isNaN(grandPrice.innerText)){
        //isNaN(grandPrice.innerText) means...is it non-numerical? (if yes, then it should output "0.00") 
        grandPrice.innerText = "0.00"; 
    }
});

kimchi_selection2A.addEventListener('change', () => { //when changes are made to #kimchi_quantityA, it will automatically calcualate the grandPrice
    numTo2DP = parseFloat(chicken_totalPriceA.innerText) + parseFloat(kimchi_totalPriceA.innerText);
    grandPrice.innerText = numTo2DP.toFixed(2);
    if(grandPrice.innerText == 0 || isNaN(grandPrice.innerText)){
        grandPrice.innerText = "0.00";
    }
});

//option reset if user wants to restart their order
function Reset() {  
    
    var dropDownChickenA = document.getElementById("chickenListA"); 
    var dropDownQtyA = document.getElementById("chicken_quantityA"); 
    
    var dropDownKimchiA = document.getElementById("kimchiListA"); 
    var kimchidropDownQtyA = document.getElementById("kimchi_quantityA"); 

    if(grandPrice.innerText != "0.00"){
        if (confirm('Are you sure you want to reset all your order?')){
            dropDownChickenA.selectedIndex = 0;  
            dropDownQtyA.selectedIndex = 0;
            chicken_unitPriceA.innerText = "";
            chicken_totalPriceA.innerText = 0;
            dropDownKimchiA.selectedIndex = 0;  
            kimchi_dropDownQtyA.selectedIndex = 0;
            kimchi_unitPriceA.innerText = "";
            kimchi_totalPriceA.innerText = 0;
            grandPrice.innerText = "0.00";
        }
    } 
}     

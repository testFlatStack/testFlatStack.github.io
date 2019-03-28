var btnSubmit = document.querySelector('.shipping');
var shipping = document.querySelector('.form__left_stages_shipping');
var billingLink = document.querySelector('.form__left_stages_billing');
var infoText = document.querySelector('.form__left_info_text');
var linkToRemeber = document.querySelector('.link__to_remember');
var deliveryQuestion = document.querySelector('.delivery__question');
var contactForBilling = document.querySelector('.form__left_recipient_name');
var addressForBilling = document.querySelector('.form__left_recipient_address');
var paymentLink= document.querySelector('.form__left_stages_payment');
var address;
const inputsList = document.querySelectorAll('input');
const inputsValues = Array.apply(null, inputsList);
//Getting the country value
var countryValue;


// Валидация для формы телефона
var phoneValidationField = document.querySelector('#phone')
var addingPlus = function () {
    if(!(phoneValidationField.value.length > 1)) {
        phoneValidationField.value = '+';
    }
};
phoneValidationField.addEventListener('click',addingPlus);

var phoneValidation = function() {
    var cardCode = this.value.replace(/[A-Za-zА-Яа-яЁё-і]/g, '');
    this.value = (cardCode);
    var curLen = phoneValidationField.value.length;

    if (curLen == 2)
        this.value = this.value + " (";
    if (curLen == 7)
        this.value = this.value + ") ";
    if (curLen == 12)
        this.value = this.value + "-";
    if (curLen == 15)
        this.value = this.value + "-";
    if (curLen > 18) {
        this.value = this.value.substring(0, this.value.length - 1);
        return;
    }
};
phoneValidationField.addEventListener('input', phoneValidation);


//Block for change
var paymentForm = document.querySelector('.payment__Field');
//tempDataArray
var temp = [];

var ordering = function () {

    //Checking are fields filled or not
    if(document.querySelector('#paymentForm__security_inputs_cartholder').value.length === 0 || document.querySelector('#paymentForm__security_inputs_cardNumber').value.length !== 19 ||
        document.querySelector('#paymentForm__security_inputs_expireDate').value.length !== 5 || document.querySelector('#paymentForm__security_inputs_securityCode').value.length === 0 )   {
        console.log('->Not all fields are filled on the third step');
        alert('->Not all fields are filled, please fill them');
        return;
    }

    console.log(document.querySelector('#paymentForm__security_inputs_cardNumber').value.length);
    console.log(document.querySelector('#paymentForm__security_inputs_expireDate').value.length);
    var orderingTemplate = document.querySelector('.orders').content.cloneNode(true);
    //Hiding the nodes
    var del = document.querySelector('.form__left_stages');
    del.classList.add('hidden');
    btnSubmit.classList.add('hidden');
    document.querySelector('.header__logo_counter').classList.add('hidden');
    //Changing header
    infoText.textContent = 'Thank you for your order!';

    paymentForm.classList.remove('hidden_');
    //Clearing block
    paymentForm.innerHTML = '';
    //adding the template
    paymentForm.appendChild(orderingTemplate);
    //Set the recipient
    document.querySelector('.recipient').textContent = inputsValues[1].value;




}
var payment = function() {
    //Checking are fields filled or not
    if(document.querySelector('.input__name').value.length === 0 || document.querySelector('.input__datetime').value.length === 0 ||
        document.querySelector('.input__address').value.length === 0 || document.querySelector('.input__Apt').value.length === 0 ||
        document.querySelector('.input__City').value.length === 0 || document.querySelector('.input__ZIP').value.length === 0  ||
        document.querySelector('.selected').textContent === 'Country')   {
        alert('->Not all fields are filled, please fill them');
        console.log('->Not all fields are filled on the second step');
        return;
    }


    //Change payment style
    billingLink.classList.add('done');
    paymentLink.style.color = '#5a1094';
    paymentLink.style.textDecoration = 'underline';


    // Changing header text
    infoText.textContent = 'Payment';

    //Deleting the same as shipping btn
    linkToRemeber.classList.add('hidden');

    // Deleting DOM nodes
    var del = document.querySelector('.form__left_recipient');
    del.remove();
    del = document.querySelector('.form__left_address');
    del.remove();

    //Changing btnSubmit text
    btnSubmit.textContent = 'Pay Securely';

    //Adding node
    paymentForm.classList.remove('hidden_');
    var paymentTemplate = document.querySelector('.paymentForm').content.cloneNode(true);
    console.log(paymentTemplate.innerHTML);

    paymentForm.appendChild(paymentTemplate);

    /*Валидация для номера карты*/
    var cardNumber = document.querySelector('#paymentForm__security_inputs_cardNumber');
    cardNumber.addEventListener('input', function () {
        var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
        cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
        this.value = cardCode;

        if(this.value.length === 19) {
            document.querySelector('.card__image').setAttribute('src', 'img/cardImage.png');
        } else {
            document.querySelector('.card__image').setAttribute('src', '');

        }

    });

    /*Валидация для placeholdera карты*/

    var cardHolder = document.querySelector('#paymentForm__security_inputs_cartholder');
    cardHolder.addEventListener('input', function () {
        var cardCode = this.value.replace(/[0-9]/g, '');
        this.value = cardCode;
    });

    /*Валидация для dateExpire карты*/
    var cardExpire = document.querySelector('#paymentForm__security_inputs_expireDate');
    cardExpire.addEventListener('input', function () {
        var cardCode = this.value.replace(/[^\d]/g, '').substring(0,4);;
        cardCode = cardCode != '' ? cardCode.match(/.{1,2}/g).join('/') : '';
        this.value = cardCode;
    });
    btnSubmit.removeEventListener('click', payment);
    btnSubmit.addEventListener('click', ordering);
}
var billing = function() {

    //Checking are fields filled or not
    if(document.querySelector('.input__name').value.length === 0 || document.querySelector('.input__datetime').value.length !== 18 ||
        document.querySelector('.input__address').value.length === 0 || document.querySelector('.input__Apt').value.length === 0 ||
        document.querySelector('.input__City').value.length === 0 || document.querySelector('.input__ZIP').value.length === 0  ||
        document.querySelector('.selected').textContent === 'Country')   {
        alert('->Not all fields are filled, please fill them');
        console.log('->Not all fields are filled');
        return;
    }



    //Changing address and contact
    contactForBilling.innerHTML = 'Billing Contact';
    addressForBilling.innerHTML = 'Billing Address';
    // Change the second input
    inputsValues[1].style.width = '303px';
    deliveryQuestion.style.display = 'none';
    inputsValues[1].setAttribute('placeholder', 'Email Address');
    inputsValues[1].removeEventListener('input',phoneValidation);
    inputsValues[1].removeEventListener('click',addingPlus);

    inputsValues[1].setAttribute('type', 'email');
    address = inputsValues[1].value;
    // Remembering countryValue
    countryValue = document.querySelector('.selected').innerHTML;
    document.querySelector('.selected').innerHTML = '<span class="text">Country</span>';
    //Showing link to remember
    linkToRemeber.classList.remove('hidden');
    // Changing colors of buttons
    billingLink.style.color = '#5a1094';
    billingLink.style.textDecoration = 'underline';
    shipping.classList.add('done');

    //Getting input values
    for (var i = 0; i < inputsValues.length; i++ ){
        temp[i] = inputsValues[i].value;
        inputsValues[i].value = null;
    }

    // Changing header text
    infoText.textContent = 'Billing information';

    /*Валидация для кода города*/
    var cityCode = document.querySelector('.input__Apt');
    cityCode.addEventListener('input', function () {
        if(this.value.length > 7 ) {
            var cardCode = this.value.slice(0,8);
            this.value = cardCode;
            return;
        }
        var cardCode = this.value.replace(/[^\d]/g, '').substring(0,5);
        cardCode = cardCode != ''? cardCode.match(/.{1,2}/g).join(' - ') : '';
        this.value = cardCode;
    });

    btnSubmit.removeEventListener('click', billing);
    btnSubmit.addEventListener('click',payment);
};

btnSubmit.addEventListener('click',billing);

linkToRemeber.addEventListener('click', function () {
    document.querySelector('.selected').innerHTML = countryValue;
    for (var i = 0; i < inputsValues.length; i++ ){
        if( i === 1 ) continue; /*Don't copy DaytimePhone field*/
        inputsValues[i].value = temp[i];
    }
});


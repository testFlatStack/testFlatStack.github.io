(function () {
    var input = document.querySelector('.input__name');
    var error = document.querySelector('.error');
    var recipient = document.querySelector('.form__left_recipient_name');

    input.addEventListener('change', function(evt) {
        recipient.classList.remove('hidden');
        error.classList.add('hidden');
        error.innerHTML = '';
        if(input.validity.tooShort) {
            error.classList.remove('hidden');
            recipient.classList.add('hidden');
            error.innerHTML = 'Please enter recipient full name';
        }
    });

    //Только Буквы
    var input__City = document.querySelector('.input__City');
    input__City.addEventListener('input' , function () {
        var cardCode = this.value.replace(/[0-9]/g, '');
        this.value = cardCode;
    });

    //Только цифры
    var input__ZIP = document.querySelector('.input__ZIP');
    input__ZIP.addEventListener('input' , function () {
        var cardCode = this.value.replace(/[^\d]/g, '');
        this.value = cardCode;
    })

})();

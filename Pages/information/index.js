 $(document).ready(function () {

     var product = JSON.parse(localStorage.getItem('product'))
     $('.title').html(product.name)

     var product = JSON.parse(localStorage.getItem('product'))
     $('.invoice-product-name').html(product.name)

     var price = JSON.parse(localStorage.getItem('product'))
     $('.price').html(product.price)

     var numberOrders = JSON.parse(localStorage.getItem('numberOrders'))
     $('.numberOrders').html(numberOrders)

     var size = JSON.parse(localStorage.getItem('size'))
     $('.size').html(size.size)



     // $('[name]')
     // $('[id]')
     // $('[name=felan]')


     var userInfo = {};

     $('[name]').on('input', function () {
         var self = $(this);
         var name = self.attr('name');
         userInfo[name] = self.val();
     });


     // localStorage.setItem('user', JSON.stringify(userInformation));

     window.addEventListener('load', function() {
         var forms = document.getElementsByClassName('needs-validation');
         var validation = Array.prototype.filter.call(forms, function(form) {
             form.addEventListener('submit', function(event) {
                 if (form.checkValidity() === false) {
                     event.preventDefault();
                     event.stopPropagation();
                 }
                 form.classList.add('was-validated');
             }, false);
         });
     }, false);



    $("#Complete-order").click(function () {

        $.ajax('/jquery/submitData', {
            type: 'POST',
            data: {
                // ...JSON.parse(localStorage.getItem('user')),
                ...JSON.parse(localStorage.getItem('numberOrders')),
                ...JSON.parse(localStorage.getItem('size')),
                ...JSON.parse(localStorage.getItem('product')),
                imgDtapic:localStorage.getItem('imgData'),
                ...userInfo,

            },
            success: function (data, status, xhr) {
                alert(status)
                // $('p').append('status: ' + status + ', data: ' + data);niyaz nadaram
            },
            error: function (jqXhr, textStatus, errorMessage) {
                alert(errorMessage)

                // $('p').append('Error' + errorMessage); niyaz nadaram

                localStorage.clear();

                location.href='../../index.html';

            }
        });



    })
 });
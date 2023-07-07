function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


$(document).ready(function(){


    $('.box-size').click(function () {
        $('.box-size').removeClass('active')
        $(this).addClass('active');
    })


    var product = JSON.parse(localStorage.getItem('product'))
    $('.title').html(product.name)

    var numberOrders = 1;
    $(".number-orders").val(numberOrders);
    $('.plus').click(function () {
        numberOrders += 1;
        $(".number-orders").val(numberOrders);
    });
    $('.minus').click(function () {
        numberOrders -= 1;
        $(".number-orders").val(numberOrders);
    });



    var size= {}

    $('.size-button').click(function () {

        var sizeID = $(this).attr('id')
        var sizeName = $(this).data('size')

        size.id = sizeID
        size.size = sizeName

        localStorage.setItem('size', JSON.stringify(size));

    });
    $('#submit-button').click(function () {
        /*var bannerImage = document.getElementById('bannerImg');
        var imgData = getBase64Image(bannerImage);
        localStorage.setItem("imgData", imgData);*/

        localStorage.setItem('numberOrders', JSON.stringify(numberOrders));

        location.href="../../information/index.html"
    })
    // $(".Number-orders").val(NumberOrders)

});






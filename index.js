var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
}

    function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

document.getElementById("myBtn").click();


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}


$(document).ready(function () {

        $("#open_popup").click(function(){
            $(".popup").show();
            document.getElementById("myvideo").play();
        });

    $(".close").click(function(){
        $(".popup").hide();
        document.getElementById("myvideo").pause();
        document.getElementById("myvideo").currentTime = 0;
    });

    var product= {}

    $('.buy-button').click(function () {

        var productID = $(this).attr('id')
        var productName = $(this).data('name')
        var productPrice = $(this).data ('price')

        product.id = productID
        product.name = productName
        product.price = productPrice

        localStorage.setItem('product', JSON.stringify(product));

        location.href='Pages/Products/ShopFaceMasks/index.html';

    });

})


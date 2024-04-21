const burger = document.querySelector('.header__burger');
const header_menu_list = document.querySelector('.header__menu-list');
const body = document.querySelector('body');

burger.addEventListener('click', function (event){
    burger.classList.toggle('active')
    header_menu_list.classList.toggle('active');
    body.classList.toggle('lock');
});


$(document).ready(function (){
    $('.products__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

        
    });

    $('.reviews__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,



        responsive: [
            
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1
                }
            }
        ]




    });
});
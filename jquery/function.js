
//search button generalization


function search(btn, inp, exp) {
    $(btn).on('click', function () {
        $(inp).toggleClass(exp);
    });
}
//    accodian generalization

function accodian(content, heading) {
    $(content).hide();
    $(heading).click(function () {
        var $value = $(this).next(content).toggle();
        $(content).not($value).slideUp('fast');

    });
}


//owlCarousel generalization

function owl(slider, items, loop, margin, nav, autoplay, autoplayTimeout, autoplayHoverPause, responsive, item1, item2, item3) {
    $(slider).owlCarousel({
        items: items,
        loop: loop,
        margin: margin,
        nav: nav,
        autoplay: autoplay,
        autoplayTimeout: autoplayTimeout,
        autoplayHoverPause: autoplayHoverPause,
        responsiveClass: responsive,
        responsive: {
            0: {
                items: item1,

            },
            600: {
                items: item2,

            },
            1000: {
                items: item3,

            }
        }
    })
}
//  form validation
function validate(Formvalidation) {
    $(Formvalidation).validate();
}


$(document).ready(function () {
    //overlay 
    $(document).on('click', '.bttn', function () {
        $('.sidenav ').css('width', '250px');
        $('.overlay').css("display", "block");

    });

    $(document).on('click', '.overlay', function () {
        $('.sidenav').css('width', '0px');
        $('.overlay').css("display", "none");
    });

    // country selector

    $('.flagstrap').flagStrap({

    });

    // function call for search
    search('.search_button', '.search_input ','input_expand')
  // function call for validation
  validate("#commentForm")
});   

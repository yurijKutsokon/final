$(document).ready(function() {
    // slider reg form
    $("#left-slider").owlCarousel({
        dots: false,
        nav:true,
        navigationText : false,
        pagination:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items: 1,
        loop: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            }
        }
    });
    $("#top-slider").owlCarousel({
        dots: false,
        nav:true,
        navigationText : false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items: 1,
        loop: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            }
        }
    });
    $("#right-slider").owlCarousel({
        dots: false,
        nav:true,
        //navigationText : false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        items: 1,
        loop: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            }
        }
    });


//Isotope plugin jQuery

    var $grid = $('.grid').imagesLoaded( function() {
        // init Isotope after all images have loaded
        $grid.isotope({
            // options...
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });
    });

    //End Isotope plugin jQuery


    // ajax
    $.ajax({
        type: 'GET',
        url:'http://api.pixplorer.co.uk/image?word=2560282-275c6f94e9ab1238f0e95e5eb' + 'discovery, mountain' + '&amount=7&size=300',

        dataType: 'json',
        success: function(data){
            //console.log('data', data);
            var arrImageurl = _.map(data.images, 'imageurl');

            //console.log('arrImageurl', arrImageurl);

            $('.grid-item').each(function(i){

                $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');

            });

        },
        error: function(){
            // ошибка в IE8 IE9 не работает
            console.log('Request is bad');
        }


    });



    $('.input-activities__find-btn').on('click', function(e){

        var search = $('.input-activities__input-search').val();


        e.preventDefault();
        if(search){
            $('.input-activities__input-search').val('');
            $.ajax({
                type: 'GET',
                url:'http://api.pixplorer.co.uk/image?word=' + search + '&amount=7&size=300',

                dataType: 'json',
                success: function(data){
                    //console.log('data', data);
                    var arrImageurl = _.map(data.images, 'imageurl');

                    // console.log('arrImageurl', arrImageurl);

                    $('.grid-item').each(function(i){

                        $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');

                    });

                    $('.grid-item > div > p').text(search);

                },
                error: function(){
                    console.log('Request is bad');
                }


            });
        }


    });
});
// End ajax


//var container = document.querySelector('.searching__masonry');
//var msnry = new Masonry( container, {
//    // Настройки
//    columnWidth: 200,
//    itemSelector: '.item'
//});

//$.ajax({
//    type: 'GET',
//    url:'http://api.pixplorer.co.uk/image?word=' + 'hawaii' + '&amount=7&size=300',
//
//    dataType: 'json',
//    success: function(data){
////console.log('data', data);
//        var arrImageurl = _.map(data.images, 'imageurl');
//
//        //console.log('arrImageurl', arrImageurl);
//
//        $('.grid-item').each(function(i){
//
//            $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');
//
//        });
//
//    },
//    error: function(){
//        // ошибка в IE8 IE9 не работает
//        console.log('Request is bad');
//    }
//
//
//});
//
//
//
//$('.searching__form--submit').on('click', function(e){
//
//    var search = $('.searching__form--input').val();
//
//
//    e.preventDefault();
//    if(search){
//        $('.searching__form--input').val('');
//        $.ajax({
//            type: 'GET',
//            url:'http://api.pixplorer.co.uk/image?word=' + search + '&amount=7&size=300',
//
//            dataType: 'json',
//            success: function(data){
////console.log('data', data);
//                var arrImageurl = _.map(data.images, 'imageurl');
//
//                // console.log('arrImageurl', arrImageurl);
//
//                $('.grid-item').each(function(i){
//
//                    $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');
//
//                });
//
//                $('.grid-item > div > p').text(search);
//
//            },
//            error: function(){
//                console.log('Request is bad');
//            }
//
//
//        });
//    }
//
//
//});
//// End ajax
//



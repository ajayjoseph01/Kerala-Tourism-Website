/* navbar scroll color effect*/

$(document).ready(function(){
    $(window).scroll(function(){
        $('nav').toggleClass('active',$(this).scrollTop()>=100);
        $('.dropdown-menu').toggleClass('active',$(this).scrollTop()>=50);
    })
})


$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('.fa-arrow-circle-up').fadeIn('slow')
        }
        else{
            $('.fa-arrow-circle-up').fadeOut('slow')
        }
    })
    
})
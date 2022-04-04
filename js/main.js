/**
 * Totsys Genesis
 *
 * @category    Front end
 * @package     Main js
 * @copyright   Copyright (c) 2021 Totsys. (http://www.TotsysGenesis.com)
 * @author      Totsys team
 */


var $ = jQuery.noConflict();


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
 
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    autoPlayTimeout:100,
    autoplaySpeed:6000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })
});
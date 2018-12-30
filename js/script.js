/*global console, $*/
$(function () {
    'use strict';
    
  /*Tabs Script*/
  $('.tab_content').hide();
  $('.tab_content:first').show();
  $('.tabs li:first').addClass('active');
  $('.tabs li:first').addClass('wrap');
  $('.tabs li').click(function(event)
   {
    $('.tabs li').removeClass('active');
    $('.tabs li').removeClass('wrap');
    $(this).addClass('active');
    $(this).addClass('wrap');
    $('.tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
   });
    
   $('.tabs a').click(function(e){
      e.preventDefault(); 
   });
   /*Slide Toggle*/
    
    $('.search-ico').click(function(){
        $('.field-input').slideToggle();
    });
    /*wow animation initial*/
   new WOW(
   {
      offset: 50,          // default
   }
   ).init();
    /*Loading Before Animation*/
    var content = document.getElementById("myContent");
    content.classList.add('js-loading');
    window.addEventListener("load", showPage);
    function showPage() {
    content.classList.remove('js-loading');
    }
    /*Close The SideNav OnMouse Outside The Container In 991px*/
    var $window = $(window),
    $sideNav = document.getElementById("sideNav");


    if ($window.width() < 991) {
        $("#closeNav").css("display","none");
        $(document).mouseup(function(e) 
        {
            var container = $("#sideNav");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
            document.getElementById("sideNav").style.left="-220px";
            $(".overlay").css("display","none");
            $("#closeNav").css("display","none");

            }
        });
    }
    
    

    
});
/*PreLoader Script*/
$(window).load(function()
{
$('body').css({'overflow-x':'hidden', 'overflow-y':'auto', 'height':'auto', 'position':'relative'});
$(".screen").fadeOut("slow");
});


/*Map Script*/
var map = new GMaps({
    div: '#map',
    lat: 31.030659699999998,
    lng: 31.368005
});
map.addMarker({
  lat: 31.030659699999998,
  lng: 31.368005,
  title: 'شركة الرياض',

});

 /*Open SideNav*/
    function openNav() {
        $(".mySideNav").css("left","0");
        $("#closeNav").css("display","block");
        $(".overlay").css("display","block")
    }
    /*Close SideNav*/
    function closeNav(){
       $(".mySideNav").css("left","-220px");
        $("#closeNav").css("display","none");
        $(".overlay").css("display","none")
    }    
      
//광고배너
$(function(){
    $('.bxslider').bxSlider({
        mode:'fade',
       auto: true,
       autoHover : true,
       pager : false,
       pause: 3000,
    })
});
//메세지 창 및 개인 프로필 팝업
$(document).ready(function(){
    $(".message").colorbox({iframe:true, width:"50%", height:"70%", href:"message.html"});
    $(".callbacks").colorbox({
        onOpen:function(){ alert('onOpen: colorbox is about to open'); },
        onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
        onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
        onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
        onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
    });
  
});
//드롭 메뉴 처리
function makeDorpbar(){
    var dropMenu = document.getElementById("dropbar");
    dropMenu.style.display = "block";
    
}

function removeDorpbar(){
    var dropMenu = document.getElementById("dropbar");
    dropMenu.style.display = "none";
    
}
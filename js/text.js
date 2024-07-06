$('.side-icon').on('click' ,function (){
    let contentWidth =$('.sidebar').innerWidth()
    if($('.menue').css('left')==='0px'){
        $('.menue').animate({left:`-${contentWidth}`})
    }
     else{
         $('.menue').animate({left:`0px`})   
     }
})

$('.clouse').on('click' ,function (){
    let contentWidth =$('.sidebar').innerWidth()
    if($('.menue').css('left')==='0px'){
        $('.menue').animate({left:`-${contentWidth}`})
    } 
})


$("#slide-down h3").on("click", function () {
    $(this).next().siblings(".slider").slideUp(1000);
    $(this).next().slideToggle(1000);
  });


  $(function () {
    const timeTo = "4 February 2025 12:00:00";
    function calcDate() {
      const now = new Date().getTime();
      const futureDate = new Date(timeTo).getTime();
      let timeDifference = (futureDate - now) / 1000; 
  
      const days = Math.floor(timeDifference / (24 * 60 * 60));
      timeDifference %= 24 * 60 * 60;
      const hours = Math.floor(timeDifference / 3600);
      timeDifference %= 3600;
      const mins = Math.floor(timeDifference / 60);
      const secs = Math.floor(timeDifference % 60);
  
      $(".days").text(`${days} D`);
      $(".hours").text(`${hours} h`);
      $(".minutes").text(`${mins} m`);
      $(".seconds").text(`${secs} s`);
    }
  
    setInterval(function () {
      calcDate();
    }, 1000);
  });


  $("textarea").on("keyup", function () {
    let text = $(this).val();
    if (text.length > 100) {
      $("p span").html("your available character finished");
    } else {
      $("p span").html(100 - text.length);
    }
  });
  


$("button").click(function(){  
    var userName = $('.name').val();
    var userinput1 = $('.Song1').val();
    var userinput2 = $('.Song2').val();
    var futureAge = parseInt(userinput1)+81;
      $("p").text("Hello" + " " + userName + "," + " " + "you will be" + " " + futureAge + " " + "years old in 2100 and have 0 grandchildren instead of" + " " + userinput2 + " children, because of global warming causing the end to planet earth.");
});
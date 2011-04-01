$(document).ready(function() {
    $("a").click(function() {
      alert("Hello world!");
  });
  
  $("#orderedlist > li").addClass("red");
  
  $("#orderedlist li:last").hover(function() {
    $(this).addClass("green");
  },function(){
      $(this).removeClass("green");
    });
    
    $("#orderedlist").find("li").each(function(i) {
      $(this).append( " BAM! " + i);
    });
    
    $("#reset").click(function() {
      $("form").each(function() {
        this.reset();
      });
    });
    
    $("li").not(":has(ul)").css("border", "1px solid black");
 });   
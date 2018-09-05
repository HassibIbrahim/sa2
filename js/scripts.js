$(document).ready(function(){
  $("form#subscribeForm").submit(function(event){
    event.preventDefault()

    var userInput=$("input#subscribeEmail").val()
    console.log(userInput);
    $("p.display").text("Successfully Subscribed")
  })
})

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

$(document).ready(function(){
  $("form#subscribeForm").submit(function(event){
    event.preventDefault()

    var userInput=$("input#subscribeEmail").val()
    console.log(userInput);
    $("p.display").text("Successfully Subscribed")
  })
})

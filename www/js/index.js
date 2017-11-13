$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitButton();
  });            
});            


function random() {
    return !Math.round(Math.random());
}

function submitButton() {
    
    var value = random();
    
    alert(value);
}
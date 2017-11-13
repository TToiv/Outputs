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
    
    
    if(value) { 
        
        navigator.notification.beep(1); //beep once
        navigator.vibrate([200, 300, 500]);
    
    }
    
    else { 
        navigator.notification.beep(2); //beep twice
        navigator.vibrate([400, 600, 1000]);

    } 
    
}
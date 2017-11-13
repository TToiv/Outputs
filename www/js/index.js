$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            

function random() {
return !Math.round(Math.random());
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
}
// This is a JavaScript file
$(document).ready(function(){

  //Div's escondidas no inicio
  $(".lugarDesfoque").hide();
  $(".lugarCinza").hide();
  $(".lugarSaturacao").hide();
  $(".lugarOpacidade").hide();

  $(document).on("click", "#chamarCamera", function(){
  
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

  function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
  }

  function onFail(message) {
    alert('Failed because: ' + message);
  }

  function setOptions(srcType) {
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: srcType,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
  }

})
 $(document).on("change", ".opacidade", function(){
  
    $("#myImage").css("filter", "opacity(" + $(this).val() + "%)" );
  });

  $(document).on("change", ".saturacao", function(){
    $("#myImage").css("filter", "saturate(" + $(this).val() + ")" );
  });

  $(document).on("change", ".cinza", function(){
  
    $("#myImage").css("filter", "grayscale(" + $(this).val() + "%)" );
  });

  $(document).on("change", ".desfoque", function(){
  
    $("#myImage").css("filter", "blur(" + $(this).val() + "px)" );
  });

})

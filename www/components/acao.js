// This is a JavaScript file
$(document).ready(function(){
  $(document).on("click", "#imagem", function(){
    $(".lugarDesfoque").hide();
    $(".lugarCinza").hide();
    $(".lugarSaturacao").hide();
    $(".lugarOpacidade").hide();
  })

  //Div's escondidas no inicio
  $(".lugarDesfoque").hide();
  $(".lugarCinza").hide();
  $(".lugarSaturacao").hide();
  $(".lugarOpacidade").hide();
  $(".esconder").hide();

  $(document).on("click", "#chamarCamera", function(){
  
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

  function onSuccess(imageURI) {
    $(".esconder").show();
    $("#chamarCamera").hide();
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
    var elemento = document.getElementById('myImage');
    elemento.style = 'filter: opacity(' + $('.opacidade').val() + '%)  saturate(' + $('.saturacao').val() + '%) grayscale(' + $('.cinza').val() + '%) blur(' + $('.desfoque').val() + 'px)';
    
  });

  $(document).on("change", ".saturacao", function(){
    var elemento = document.getElementById('myImage');
    elemento.style = 'filter: opacity(' + $('.opacidade').val() + '%)  saturate(' + $('.saturacao').val() + '%) grayscale(' + $('.cinza').val() + '%) blur(' + $('.desfoque').val() + 'px)';
  });

  $(document).on("change", ".cinza", function(){
  var elemento = document.getElementById('myImage');
    elemento.style = 'filter: opacity(' + $('.opacidade').val() + '%)  saturate(' + $('.saturacao').val() + '%) grayscale(' + $('.cinza').val() + '%) blur(' + $('.desfoque').val() + 'px)';
  });

  $(document).on("change", ".desfoque", function(){
  var elemento = document.getElementById('myImage');
    elemento.style = 'filter: opacity(' + $('.opacidade').val() + '%)  saturate(' + $('.saturacao').val() + '%) grayscale(' + $('.cinza').val() + '%) blur(' + $('.desfoque').val() + 'px)';
  });

  $(document).on("click", ".botaoOpacidade", function(){
    $(".lugarOpacidade").show();
    $(".lugarDesfoque").hide();
    $(".lugarCinza").hide();
    $(".lugarSaturacao").hide();
  })

  $(document).on("click", ".botaoSaturacao", function(){
    $(".lugarSaturacao").show();
    $(".lugarDesfoque").hide();
    $(".lugarCinza").hide();
    $(".lugarOpacidade").hide();
  })

  $(document).on("click", ".botaoDesfoque", function(){
    $(".lugarDesfoque").show();
    $(".lugarCinza").hide();
    $(".lugarSaturacao").hide();
    $(".lugarOpacidade").hide();
  })

  $(document).on("click", ".botaoCinza", function(){
    $(".lugarCinza").show();
    $(".lugarDesfoque").hide();
    $(".lugarSaturacao").hide();
    $(".lugarOpacidade").hide();
  })

})

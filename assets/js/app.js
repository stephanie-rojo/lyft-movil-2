//creando splash
$(document).ready(function(){

  $('header').fadeOut(900);
  $('#demo').intlTelInput({

  });
});

//ocultando secciones
$('.registro').hide();
$('.verify-number').hide();
$('.datos').hide();

//creando el evento
$('.btn-2').click(agregarNumero);
$('.primerVolver').click(volverapaginaprincipal);
$('.btn-3').click(clave);
$('.segundoVolver').click(volveraregistronumero);
$('.btn-4').click(datosPersonales);
$('.tercerVolver').click(volverVerificar);

//al momento de hacer click en el btn-2 se oculte la seccion main-fund y que se muestre la seccion registro modificando el color del boddy
function agregarNumero(){
  $('body').css({'background-image' : 'none'});
  $('#main-fund').hide();
  $('.registro').show();
};

function volverapaginaprincipal(){
  $('.registro').hide();
  $('#main-fund').show();
};

//Habilita el boton next al ingresar 10 digitos
  $('.input').keyup(function() {
    var num = $('.input').val();
    if (num.length == 10) {
      $('.btn-3').first().removeAttr('disabled');
    }else{
      $('.btn-3').first().attr('disabled','disabled');
    };
  });

function clave(){
  $('.registro').hide();
  $('.verify-number').show();
};

function volveraregistronumero(){
  $('.verify-number').hide();
  $('.registro').show();
}

function datosPersonales() {
  $('.verify-number').hide();
  $('.datos').show();
};

function volverVerificar(){
  $('.datos').hide();
  $('.verify-number').show();
}

$('.input2').keyup(function() {
  var num = $('.input2').val();
  if (num.length == 3) {
    $('.btn-4').first().removeAttr('disabled');
  }else{
    $('.btn-4').first().attr('disabled','disabled');
  };
});

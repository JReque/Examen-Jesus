
$(function() {
	$("h1").text("Examen jQuery. Marzo de 2016. Jesús Requena Pérez");

	let nombreId = ".example h3";
    $(nombreId).attr("id", "Requena");

    //Agrego texto en text area
    $("#customInput").html("Jesús Requena Pérez ");

    //Realizamos efecto al cargar y al hacer click 
    efecto();
    $("#Requena").on('click', efecto);

    //Array de botones de la izquierda

	let funcionesClick = [solicitudAJAX, subeYBaja, escondeElementosLista, sublistaComoAcordeon, soloElPrimerParrafito, ponFondoVerdeSeleccionados, aplicaClaseYAnima];
    $submits = $('div.example :submit');
    $submits.each(function(index, element){
      	$(element).on('click', funcionesClick[index]);
    });

    $('.domtree h3').plugin();//con las opciones por defecto
    $('#miId').plugin({heigth:'100%', color:'red', fontSize:'600%'});//con los siguientes valores: rojo, 100% y 10 veces su tamaño
 });

	let solicitudAJAX = function () {
		$('#toggleCustom').on('click', function() {
	      $.getJSON('texto.json')
	      .done(pintar);  
	    });
	    let pintar = function(data){
	      $("#customInput").val(data.texto);
	    }
	};

let efecto = function(){
	$("#Requena").hide(500);
	$("#Requena").show(500);
}
let subeYBaja = function () {
	$('div.domtree h3').slideUp().slideDown();
}
let escondeElementosLista = function(){
	$('div.section li').fadeToggle().fadeToggle();
}
let sublistaComoAcordeon = function(){
	$('div.section li li').slideToggle().slideToggle();
}
let soloElPrimerParrafito = function () {
	$('p:first').animate({width: 'toggle'}, 2000, function(){
	$(this).animate({height: 'toggle'}, 'slow');
});
}
let ponFondoVerdeSeleccionados = function () {
	$(':selected').css({backgroundColor: "#0f0"})
}
let aplicaClaseYAnima = function(){
	$('code').addClass('highlight').animate({ marginLeft: 10}, 'fast')
}

jQuery.fn.plugin = function(options){
    let opts = $.extend(true, $.fn.plugin.defaults, options);
    $(this).css({backgroundColor: opts.color})
    	.on("click", function(){
	        $(this).css({
	            height: opts.height,
	            fontSize: opts.tamanio
	        });
    	}).on("dblclick", function(){
	        $(this).css({
	            height: '',
	            fontSize: ''
	        });
	    });
    return this;
}
jQuery.fn.plugin.defaults = {
        color: "yellow",
        height: "40%",
        tamanio: "500%"
};
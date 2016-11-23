/*
var feed = new Instafeed({
	get:'tagged',
	tagName:'cats',
	//userId:'276696572',
	target:'instagram',
	clientId:'23d5fd4591df45538777a6f3568d2378',
	accessToken:'3935335596.23d5fd4.ab22c23b418d45c89c645e94add27df4'
});
*/
$(window).load(function() {
	//feed.run();
	$('#fotos-slider').flexslider({
		animation:'slide',
		animationLoop:true,
		controlsContainer:$(".custom-controls-container"),
		customDirectionNav:$(".custom-navigation a"),
		itemWidth:454,
		itemMargin:1,
		minItems:1,
		maxItems:4
	});
	$('#instagram-slider').flexslider({
		animation:'slide',
		animationLoop:true,
		itemWidth:280,
		itemMargin:22,
		prevText:'',
		nextText:''
	});
	$('#menu').click(function() {
		$('i', this).toggleClass('fa-bars').toggleClass('fa-times');
		var texto = $('span', this).text();
		$('span', this).text(texto === 'MENU' ? 'CLOSE' : 'MENU');
		$('#listaMenu').fadeToggle();
	});
});
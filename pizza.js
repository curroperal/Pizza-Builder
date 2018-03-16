// Write your Pizza Builder JavaScript in this file.
 

//Botón Pepperonni
var losPepperonni = $('.btn-pepperonni').click(pepperonni);
//Capturo botón y activo escucha (click) que activa la función

losPepperonni.toggleClass('active');
$('.pep').toggle();
$('li:contains("pepperonni")').toggle();


function pepperonni(e){
	losPepperonni.toggleClass('active');
	$('.pep').toggle();
	$('li:contains("pepperonni")').toggle();
	calcularPrice();
}
//función que des/activa la clase .pep



var losMushrooms = $('.btn-mushrooms').click(mushrooms);
losMushrooms.toggleClass('active');
$('.mushroom').toggle();
$('li:contains("mushrooms")').toggle();


function mushrooms(e){
	losMushrooms.toggleClass('active');
	$('.mushroom').toggle();
	$('li:contains("mushrooms")').toggle();
	calcularPrice();
}


var losPeppers = $('.btn-green-peppers').click(peppers);
losPeppers.toggleClass('active');
$('.green-pepper').toggle();
$('li:contains("green peppers")').toggle();

function peppers(e){
	losPeppers.toggleClass('active');
	$('.green-pepper').toggle();
	$('li:contains("green peppers")').toggle();
	calcularPrice();
}


//SALSAS


//Boton salsa
var sauce = $('.btn-sauce').click(sauceWhite);
$('li:contains("white sauce")').toggle();

function sauceWhite(e){
	sauce.toggleClass('active');
	$('.sauce').toggleClass('sauce-white');
	$('li:contains("white sauce")').toggle();
	calcularPrice();			
}

sauce.toggleClass('active');
$('.sauce').toggleClass('sauce-white');


//Botón crust
var crust = $('.btn-crust').click(crustGluten);
$('li:contains("gluten-free crust")').toggle();

function crustGluten(e){
	crust.toggleClass('active');
	$('.crust').toggleClass('crust-gluten-free');
	$('li:contains("gluten-free crust")').toggle();
	calcularPrice();	
}

//Establezco por defecto
crust.toggleClass('active');
$('.crust').toggleClass('crust-gluten-free');



//var $totalPrice = parseInt($('strong').text());
var totalPrice = 10;
 $('strong').text('$'+ totalPrice);

function calcularPrice (){
	totalPrice = 10;
if (losPepperonni.hasClass('active')){
	totalPrice+=1;
} 
if(losMushrooms.hasClass('active')){
	totalPrice+=1;
} 
if (losPeppers.hasClass('active')){
	totalPrice+=1;
}
if (sauce.hasClass('active')){
	totalPrice+=3;
}
if (crust.hasClass('active')){
	totalPrice+=5;
}

 $('strong').text('$'+ totalPrice);
}



    // <aside class="panel price">
    //   <h2>Your pizza's price</h2>

    //   <b>$10 cheese pizza</b>
    //   <ul>
    //     <li>$1 pepperonni</li>
    //     <li>$1 mushrooms</li>
    //     <li>$1 green peppers</li>
    //     <li>$3 white sauce</li>
    //     <li>$5 gluten-free crust</li>
    //   </ul>
    //   <strong>$21</strong>
    // </aside>
    // <!-- End Price -->
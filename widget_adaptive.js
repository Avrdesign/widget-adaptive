/*The adaptive widget for any site*/ 
/*Code by Dmitri Avramets (AvrDesign.org)*/

//Start style-generator
var styleWidget = document.createElement('style');

styleWidget.innerHTML = ".widget {  position: fixed;  right: 3%;  bottom: calc(-1.3 * 16vmax);  z-index: 999;  width: 16vmax;  height: calc(1.5 * 16vmax);  background: #fff;  border-top-left-radius: 8px;  border-top-right-radius: 8px;  box-shadow: 0 0 10px #0e8ad4;  cursor: pointer; } .widget_top {  display: flex;  justify-content: space-between;  align-items: center;  height: calc(0.2 * 16vmax);  width: 100%;  background: #0e8ad4;  border-top-left-radius: 8px;  border-top-right-radius: 8px; }  .widget_photo {  display: block;  height: calc(1.25 * 16vmax);  overflow: hidden;  }  .widget_photo > img {  width:100%;  height: 100%;  object-fit: cover; }  .widget_bottom {  display: block;  height: calc(0.05 * 16vmax);  width: 100%;  background: #0e8ad4; }  .widget_top__array {  display: none;  border-radius: 50%;  width: 18px;  height: 18px;  color: #aaa;  text-align: center;  font-size: 16px;  font-weight: bold;  font-family: sans-serif;  background: #fff;  margin: 0 5px 0 5px;  cursor: pointer;  user-select: none; }  .widget_top__txt {  flex: 1;  color: #fff;  font-size: 0.9em;  text-align: center;  font-family: sans-serif; }   .fade {  animation-name: animationFade;  animation-duration: 1.5s; }  @keyframes animationFade {  from {opacity: 0.1;}  to {opacity: 1;} }  .popup {  animation-name: animationPopup;  animation-fill-mode: forwards;  animation-timing-function: ease-in-out;  animation-duration: 1.5s; }  @keyframes animationPopup {  from {bottom: calc(-1.3 * 16vmax); }  to {bottom: 0;} }  .popdown {  animation-name: animationPopdown;  animation-fill-mode: forwards;   animation-timing-function: ease-in-out;  animation-duration: 1.5s; }  @keyframes animationPopdown {  from {bottom: 0; }  to {bottom: calc(-1.3 * 16vmax);} }  .arrow_visible {  animation-name: animationVisible;  animation-fill-mode: forwards;  animation-duration: 2.5s; }  @keyframes animationVisible {  from {opacity: 0;}  to {opacity: 1; display: block;} }  .arrow_novisible {  animation-name: animationNoVisible;  animation-fill-mode: forwards;  animation-duration: 2.5s; }  @keyframes animationNoVisible {  from {opacity: 1;}  to {opacity: 0; display: none;} }   .widget_mobile {  display: none;  position: fixed;  right: 4%;  bottom: 8%;  z-index: 999;  width: 16vmin;  height: 16vmin;  background: #fff;  box-shadow: 0 0 4px 5px #fff, 0 0 40px 30px rgba(14,138,212,0.6);  cursor: pointer;  overflow: hidden;  border-radius: 50%; }  .widget_photo__mobile {  width: 100%;  height: 100%;  overflow: hidden;  border-radius: 50%; }  .widget_photo__mobile > img {  width:100%;  height: 100%;  object-fit: cover; }  .pulse {  animation: animationPulse 2s infinite;  animation-direction: alternate; }  @keyframes animationPulse {  from {width: 16vmin; height: 16vmin;}  to {width: 14vmin; height: 14vmin;} }  .miniclose {  animation: animationMiniClose 1.5s;  animation-fill-mode: forwards; }  @keyframes animationMiniClose {  from {width: 16vmin; height: 16vmin;}  to {width: 0; height: 0; opacity: 0} }  @media screen and (max-width: 640px) { .widget {  position: fixed;  right: 0;  bottom: -100vh;   z-index: 999;  width: 100vw;  height: 100vw;  background: #fff;  border-top-left-radius: 8px;  border-top-right-radius: 8px;  box-shadow: 0 0 10px #0e8ad4;  cursor: pointer; } .widget_top {  display: flex;  justify-content: space-between;  align-items: center;  height: 16vh;  width: 100%;  background: #0e8ad4;  border-top-left-radius: 8px;  border-top-right-radius: 8px; }  .widget_photo {  display: block;  height: 80vh;  overflow: hidden;  }  .widget_photo > img {  width:100%;  height: 100%;  object-fit: cover; }  .widget_bottom {  display: block;  height: 4vh;  width: 100%;  background: #0e8ad4; } .widget_mobile {  display: block; }  } ";

document.head.appendChild(styleWidget);

//End style-generator

//Start html-generator
var widget = document.createElement('div');
widget.id = 'widget';
widget.className = 'widget';
document.body.appendChild(widget);


widget.innerHTML = 
'<div class="widget_top" id="widget_top">'+
			'<div class="widget_top__array" id="arrow_left">&lsaquo;</div>'+
			'<div class="widget_top__txt" style="display: block;">Photo 1</div>'+
			'<div class="widget_top__txt" style="display: none;">Photo 2</div>'+
			'<div class="widget_top__txt" style="display: none;">Photo 3</div>'+
			'<div class="widget_top__txt" style="display: none;">Photo 4</div>'+
			'<div class="widget_top__array" id="arrow_right">&rsaquo;</div>'+
		'</div>'+
		'<div class="widget_photo fade" style="display: block;">'+
			'<img src="image\\pic1.jpg">'+
		'</div>'+
		'<div class="widget_photo fade" style="display: none;">'+
			'<img src="image\\pic2.jpg">'+
		'</div>'+
		'<div class="widget_photo fade" style="display: none;">'+
			'<img src="image\\pic3.jpg">'+
		'</div>'+
		'<div class="widget_photo fade" style="display: none;">'+
			'<img src="image\\pic4.jpg">'+
		'</div>'+		
		'<div class="widget_bottom"></div>'+
	'</div>'+
	'<div id="widget_mobile" class="widget_mobile pulse">'+
		'<div class="widget_photo__mobile" style="display: block;">'+
			'<img src="image\\pic1.jpg">'+
		'</div>'+
		'<div class="widget_photo__mobile" style="display: none;">'+
			'<img src="image\\pic2.jpg">'+
		'</div>'+
		'<div class="widget_photo__mobile" style="display: none;">'+
			'<img src="image\\pic3.jpg">'+
		'</div>'+
		'<div class="widget_photo__mobile" style="display: none;">'+
			'<img src="image\\pic4.jpg">'+
		'</div>';

//End html-generator


var arrowLeft = document.getElementById('arrow_left'),
	arrowRight = document.getElementById('arrow_right'),
	allSlides = widget.querySelectorAll('.widget_photo'),
	allTexts = widget.querySelectorAll('.widget_top__txt');


var widgetMobile = document.getElementById('widget_mobile'),
	widgetPhotoMobile = widgetMobile.querySelectorAll('.widget_photo__mobile');

var showWidget = false;
var showSlide = 0;

var showWidgetMobile = false;

var screenMobileWidth = 640; //ширина экрана для медиазапроса

//Контроль при ресайзинге окна
window.onresize = function(){
	if (document.documentElement.clientWidth > screenMobileWidth){
			widget.style.bottom = 'calc(-1.3 * 16vmax)';
			widget.style.top = 'auto';
		} else if (showWidgetMobile){
				widget.style.bottom = '0';
				widget.style.top = '0';
			} else {
				widget.style.bottom = '-100vh';
				widget.style.top = '100vh';				
				widgetPhotoMobile[showSlide].style.display = 'block';
				widgetMobile.className = "widget_mobile pulse";
		}
};




// Pop-up widget
widget.addEventListener('click', togglePopUp);

//mobile PopUp
widgetMobile.addEventListener('click', togglePopUp);

function togglePopUp() {
	
showWidget = !showWidget ? true : false;

	if (showWidget) {
		if (document.documentElement.clientWidth > screenMobileWidth){
		widget.style.bottom = '0';
		widget.style.top = 'auto';
			} else {
				widget.style.bottom = '0';
				widget.style.top = '0';
				showWidgetMobile = true;
				}
		widget.className = "widget popup";
		arrowLeft.className = "widget_top__array arrow_visible";
		arrowRight.className = "widget_top__array arrow_visible";
		arrowLeft.style.display = "block";
		arrowRight.style.display = "block";
		widgetMobile.className = "widget_mobile miniclose";
	} else {
		if (document.documentElement.clientWidth > screenMobileWidth){
		widget.style.bottom = 'calc(-1.3 * 16vmax)';
			} else {
				widget.style.bottom = '-100vh';
				widget.style.top = '100vh';
				showWidgetMobile = false;
				}
		widget.className = "widget popdown";
		arrowLeft.className = "widget_top__array arrow_novisible";
		arrowRight.className = "widget_top__array arrow_novisible";
		/*setTimeout(function() { 
			arrowLeft.style.display = "none";
			arrowRight.style.display = "none";	
		}, 2000);*/
		
		for(var i = 0; i < widgetPhotoMobile.length; i++) {
			widgetPhotoMobile[i].style.display = 'none';
			}
		widgetPhotoMobile[showSlide].style.display = 'block';
		widgetMobile.className = "widget_mobile pulse";
		
	}
}


//slider widget

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);

/*allSlides.addEventListener("touchstart", showNextSlide, false);*/
/*allSlides.addEventListener("touchend", showPreviousSlide, false);*/
/*allSlides.addEventListener("touchcancel", handleCancel, false);*/
/*widget.addEventListener("touchmove", showNextSlide, false);*/


function showNextSlide(event) {
	event.stopPropagation();
	allSlides[showSlide].style.display = 'none';
	allTexts[showSlide].style.display = 'none';

	if (showSlide < allSlides.length - 1) {
		showSlide++;
	} else {
		showSlide = 0;
	}
	
	allSlides[showSlide].style.display = 'block';
	allTexts[showSlide].style.display = 'block';
	}

function showPreviousSlide(event) {
	event.stopPropagation();
	allSlides[showSlide].style.display = 'none';
	allTexts[showSlide].style.display = 'none';

	if (showSlide !== 0) {
		showSlide--;
	} else {
		showSlide = allSlides.length - 1;
	}
	
	allSlides[showSlide].style.display = 'block';
	allTexts[showSlide].style.display = 'block';
}	




function doClick(e) {
   // alert($.label.text);
    //$.menu.left="0";
    
var animateRight = Ti.UI.createAnimation({
	left : 0,
	curve :Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
	duration : 150
    });
    
    var viewtrans=Ti.UI.create2DMatrix();
    viewtrans=viewtrans.scale(0.8);
    
    var animateheight = Ti.UI.createAnimation({
 	transform:viewtrans,
 	height:"100%",
 	width:"100%",
	left:"200",
	curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
	duration : 150
    });   
    $.view_main.animate(animateheight);
    $.menu.animate(animateRight);
  	$.window1.open();
}

$.view_main.addEventListener('swipe',function(e)
{
	var viewtrans=Ti.UI.create2DMatrix();
    viewtrans=viewtrans.scale(1);
	 var animateheight = Ti.UI.createAnimation({
	height:"100%",
	transform:viewtrans,
	left:"0",
	curve : Ti.UI.ANIMATION_CURVE_EASE_IN,
	duration : 150
    });  
        

    var animateRight = Ti.UI.createAnimation({
	left : "-200",
	curve : Ti.UI.ANIMATION_CURVE_EASE_IN,
	duration : 150
    }); 
    $.menu.animate(animateRight);
    $.view_main.animate(animateheight);
	//alert("swipe");
});


$.window1.open();


////////

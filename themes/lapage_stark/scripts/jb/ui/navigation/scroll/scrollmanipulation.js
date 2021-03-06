/*
 @author : Jean-Baptiste de Borman jb@noloading.com

 @description: a class dedicated to scroll manipulations
 @ param {object} target_$ :  a jQuery selection of the container where the scroll is happening.
 @param {object} uiElements : an instance of the ScrollManipulation.uiElements containing a reference to the navigation buttons.
 @function swipe: scrolls the container
 */

/*jslint vars:true, white:true, nomen:true, plusplus:true */
/*global $, trace, SVGFactory, SelectionMenu,Implementation,project_$, ScreenTools,  _gaq , isTouch*/

function ScrollManipulation(target_$, uiElements) {"use strict";

	var n, context = this, page_num = 0, total_num,  containerWidth = target_$.width();

	var evaluateActiveArrows = function() {

	};


    

	for (n in uiElements) {
		var uiElement_$ = uiElements[n];
		if (uiElement_$.jquery) {
		    trace(uiElement_$); 

			/* addClass does not work on SVG. Patch here : http://keith-wood.name/svg.html#dom */
		    uiElement_$.addClass('active'); 
			
			switch (n) {
				case "leftButton_$" :
					uiElement_$.bind("click tap touch", {
						direction_int : 1
					}, clickButton);

					break;
				case "rightButton_$"  :

					uiElement_$.bind("click tap touch", {
						direction_int : -1
					}, clickButton);

					break;

				default:
					break;

			}

		}

	}
	function clickButton(event) {

		var direction_int = event.data.direction_int;
		
		context.swipe(direction_int);
		trace('clickButton'); 

	};
	this.getPageString = function () {
	
	    total_num = Math.ceil(target_$[0].scrollWidth / containerWidth);
	    return (Number(1 + page_num) + " / " + total_num);


	}
    this.onScroll = function (){
        


    }

    this.swipe = function (direction_int) {
        containerWidth = target_$.width();

        var n, maxScroll = target_$[0].scrollWidth - containerWidth, minScroll = 0;

        var scrollLeft = target_$.scrollLeft() - (containerWidth * direction_int);
        page_num = Math.floor(scrollLeft / containerWidth);
       
        scrollLeft = Math.floor(scrollLeft / containerWidth) * containerWidth;


        if (scrollLeft >= maxScroll) {

            uiElements.rightButton_$.css("display", "none");

        } else {
            uiElements.rightButton_$.css("display", "inline");

        }
        if (scrollLeft <= minScroll) {

           uiElements.leftButton_$.hide();

        } else {
            uiElements.leftButton_$.show();

        }

        //trace('scrollLeft : ' + scrollLeft);

        target_$.stop().animate({
            scrollLeft: scrollLeft
        }, 300);
        context.onScroll(); 

    };

}

/*
 @description: an instancieated object to collect the uiElments affectd by the scroll
 */
ScrollManipulation.UIElements = function() {"use strict";

	this.leftButton_$ = "test_a";
	this.rightButton_$ = "test_b";
};


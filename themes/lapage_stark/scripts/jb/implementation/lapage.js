function trace(string) {
	"use strict"; 

	if ( typeof (console) !== "undefined" && console.log !== undefined) {
		try {
			console.log.apply(console, arguments);
		} catch (e) {
		}
	}
}

(function ($) {
    Drupal.behaviors.myBehavior = {


        attach: function (context, settings) {

            
            if (!$('body').hasClass ("logged-in") && !$('body').hasClass ("page-user") ) {
                
                location.href = "/?q=user";

            }

           // $(".form-item").hide ();
            //alert ($(".form-item").length);  
            
            //append ($(".form-submit")); 

   


           var navbar_$ = $("<div class='navBar'>"),
           nextButton_$ = $("<span class='nextButton'>"),
           previousButton_$ = $("<span class='previousButton'>"),
           printButton_$ = $("<span class='button printButton'>"),
           editButton_$ = $("<span class='button editButton'>");

          
          


            printButton_$.text("print")

            nextButton_$.text("next >");
            previousButton_$.text("< previous");



            $(".field-collection-view-links a, .action-links-field-collection-add a").addClass("button").css("position", "relative").css("top", "-=100");
            $(".action-links-field-collection-add a").text("Add a new picture")


             var uiElements = new ScrollManipulation.UIElements;
            uiElements.leftButton_$ = previousButton_$;
            uiElements.rightButton_$ = nextButton_$;

            var scrollManipulation = new ScrollManipulation($("#node_page_full_group_page_content"), uiElements);

            $('.logged-in #content').prepend(printButton_$).prepend(editButton_$);
            navbar_$.append ("<div id='pageCount'>"+ scrollManipulation.getPageString () + "</div>").append(nextButton_$).append(previousButton_$); 
            
            navbar_$.insertAfter($('#node_page_full_group_page_content'));



           
            scrollManipulation.onScroll = function (){
                
                var pageCount_str = this.getPageString ();


               $('#pageCount').text (pageCount_str); 
                


            }


            editButton_$.text("edit");
            editButton_$.click(
                function () {
                    var url_str = window.location.href.split("#")[0] + "#overlay=node/9/edit";
                    window.location.href = url_str;
                });
            printButton_$.on("click", function () {

                window.print();


            });

            $(".field-name-field-iconography").insertAfter($("#content"));

            /*PATCH : 
            PLACES BUTTONS CORRECTLY in Firefox */


            $(".action-links-field-collection-add a").attr ('style', '').width ('150').insertBefore ('.field-name-field-iconography').css ("left", "0px"); 



            $(".field-name-field-iconography > .field-items > .field-item").each (function (index, element) {
                var element_$ = $(element);
                 

                element_$.prepend(element_$.find(".button").attr ("style", ""));

            })


        }
    };
})(jQuery);
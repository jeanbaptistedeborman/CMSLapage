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

            


            var navbar_$ = $("<div class='navBar'>"),
            nextButton_$ = $("<span class='buttonX nextButton'>"),
           previousButton_$ = $("<span class='buttonX previousButton'>"),
           printButton_$ = $("<span class='button printButton'>"),
           editButton_$ = $("<span class='button editButton'>");




            //alert($().jquery);
            printButton_$.text("print")

            nextButton_$.text("next >");
            previousButton_$.text("< previous");
            //$('#content').prepend(nextButton_$).prepend(previousButton_$).prepend(editButton_$).prepend(printButton_$);


            $(".field-collection-view-links a, .action-links-field-collection-add a").addClass("button").css("position", "relative").css("top", "-=100");
            $(".action-links-field-collection-add a").text("Add new picture")

            $('#content').prepend(printButton_$).prepend(editButton_$);
            navbar_$.prepend(nextButton_$).prepend(previousButton_$);
            navbar_$.insertAfter($('#node_page_full_group_page_content'));



            var uiElements = new ScrollManipulation.UIElements;
            uiElements.leftButton_$ = previousButton_$;
            uiElements.rightButton_$ = nextButton_$;

            var scrollManipulation = new ScrollManipulation($("#node_page_full_group_page_content"), uiElements);



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
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
            $(".action-links-field-collection-add a").css("width", "150").text("Add another picture")

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
                    //var string = ; 
                    var url_str = window.location.href.split("#")[0] + "#overlay=node/9/edit";
                    window.location.href = url_str;

                    //alert("edit");
                });
            printButton_$.on("click", function () {

                window.print();


            });

            //var pictureContainer_$ = $("<div>");
            //pictureContainer_$.addClass("pictureContainer");
            //$(".field-name-field-iconography").insertAfter (  $("#content")); 


            //pictureContainer_$.append($(".field-name-field-iconography"));


        }
    };
})(jQuery);
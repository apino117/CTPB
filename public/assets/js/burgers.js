// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    // --------- FORM SUBMIT BUTTON --------- //

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();



        var newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        }

        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // --------- DEVOUR BUTTON --------- //

    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("new-devoured");

        var newDevouredState = {
            devoured: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

// Set our timer for 30 seconds
var number = 30;
var intervalId;
var won1 = "q1a1";
var won2 = "q2a2";
var won3 = "q3a3";
var answer1, answer2, answer3;
var corrections = []

//  The run function sets an interval
//  that runs the decrement function once a second.
function run() {
    intervalId = setInterval(decrement, 1000);

    // now add the listeners and answer conditions
    $('.button-group-1').click(function() {
        answer1 = $(this).data("answer");
        $('#answer1').text($(this).text());
    })
    $('.button-group-2').click(function() {
        answer2 = $(this).data("answer");
        $('#answer2').text($(this).text());
    })
    $('.button-group-3').click(function() {
        answer3 = $(this).data("answer");
        $('#answer3').text($(this).text());
    })

    // time to submit!
    $('#submit').click(function() {
        $('#content').empty();

        if (answer1 == won1) {
            corrections.push("1")
        }
        if (answer2 == won2) {
            corrections.push("2")
        }
        if (answer3 == won3) {
            corrections.push("3")
        }
        console.log(corrections)

        // switch doesn't work here.
        // switch (corrections) {
        // 	case corrections.length == 3:
        // 		$('#content').html('<h1 id="welcome" class="panel-header">Congratulations! You are a Gremlins expert!</h1>');
        // 		break;
        // 	case !(corrections.contains("1")):
        // 		$ ('#content').append('<h3 class="panel-header"><em>Indiana Jones and the Temple of Doom</em> and <em>Gremlins</em> were both considered too violent for PG but not enough for an R rating.</h3>');
        // 	case !(corrections.contains("1")):
        // 		$ ('#content').append('<h3 class="panel-header"><em>Indiana Jones and the Temple of Doom</em> and <em>Gremlins</em> were both considered too violent for PG but not enough for an R rating.</h3>');
        // 	case !(corrections.contains("1")):
        // 		$ ('#content').append('<h3 class="panel-header"><em>Indiana Jones and the Temple of Doom</em> and <em>Gremlins</em> were both considered too violent for PG but not enough for an R rating.</h3>');
        // 	default:
        // 		$('#content').append('<h1 id="welcome" class="panel-header">That was real bad. Watch the movie and we can talk.</h1>');
        // }


        if (answer1 == won1 && answer2 == won2 && answer3 == won3) {
            $('#content').html('<h1 id="welcome" class="panel-header">Congratulations! You are a Gremlins expert!</h1>');
        } else if (answer1 != won1 && answer2 != won2 && answer3 != won3) {
            $('#content').append('<h1 id="welcome" class="panel-header">That was real bad. Watch the movie and we can talk.</h1>');
        } else {
        	$('#content').append('<h3 class="panel-header">You guessed ' + corrections.length + ' correctly and ' + (3 - corrections.length) + ' incorrectly.</h3>')
            if (answer1 != won1) {
                $('#content').append('<p>Gizmo is the name of the best-behaved mogwai.</p>');
            }
            if (answer2 != won2) {
                $('#content').append('<p>Steven Spielberg joked that Joe Dante could have cut all the gremlins and it would still be a monster movie called <em>People</em>.</p>');
            }
            if (answer3 != won3) {
                $('#content').append('<p><em>Indiana Jones and the Temple of Doom</em> and <em>Gremlins</em> were both considered too violent for PG but not enough for an R rating.</p>');
            }
        }

    })
}

// The decrement function.
function decrement() {

    // Decrease the number by one.
    number--;
    $("#timer").text(number);

    // Once the number hits zero
    if (number === 0) {
        gameOver();
    }
}

// the gameOver function
function gameOver() {

    // stop the timer
    clearInterval(intervalId);
    $('#content').html('<h1 id="welcome" class="panel-header">Too slow. Try again?</h1>');



}


// start the timer!
run();
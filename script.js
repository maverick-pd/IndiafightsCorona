function check(){
                                            
	var question1 = document.test.question1.value ;
	var question2 = document.test.question2.value ;
	var question3 = document.test.question3.value ;
	var question4 = document.test.question4.value ;
	var question5 = document.test.question5.value ;
	var correct = 0;

	if (question1 === "Yes") {
		correct++;
	}

	if (question2 === "Yes") {
		correct++;
	}

	if (question3 ==="Yes") {
		correct++;
	}

	if (question4 ==="Yes") {
		correct++;
	}

	if (question5 === "Yes") {
		correct++;
	}

	var messages = ["Suggestion - You should immidiately call on COVID-19 helpline Number.(Helpline Number +91-11-23978046)", "Suggestion - Go into quarentine if you do not feel well and call on COVID-19 helpline number.(Helpline Number +91-11-23978046)", "Suggestion - Move into quarentine and consult a doctor if you see symptoms of COVID-19","Suggestion - Better follow Lockdown and do not go out !"];

	var range;

	if (correct === 0){
		range = 3;
	}

	if (correct === 1) {
		range = 2;
	}

	if (correct === 2 || correct === 3) {
		range = 1;
	}

	if (correct === 5 || correct=== 4 ) {
		range = 0;
	}

document.getElementById("after_submit").style.visibility = "visible"

document.getElementById("number_correct").innerHTML = "Confirmation - You have marked   " + correct + "  option/options as Yes.";
document.getElementById("message").innerHTML = messages[range];



}

function greet(){
	alert("You have sent your message. Thank You");
}

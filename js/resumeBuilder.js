
// var firstName = "Vitalii";
// var age = 18;

// console.log(firstName);
// $("#main").append(firstName);

// var awesomeThoughts = "I am Vitalii and I am AWESOME!";
// console.log(awesomeThoughts);

// var email = "lakusta96@gmail.com";
// var newEmail = email.replace("gmail", "udacity");

// console.log(email);
// console.log(newEmail);

// var awesomeThoughts = "I am Vitalii and I am AWESOME!";

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

// console.log(funThoughts);




var skills = ["C/C++", "HTML", "CSS", "Java", "Android development", "Javascript", "PHP", "startup", "awesomeness"];
var bio = {
	"name": "Vitalii Lakusta",
	"role" : "Developer",
	"contacts" : {
		"email" : "lakusta96@gmail.com",
		"phone" : "+372 584 787 28"
	},
	"pictureURL" : "images/fry.jpg",
	"skills" : skills,
	"welcomeMessage" : "Hi! My name is Vitalii, and I am a developer. Check out my resume to see what projects I was involved in so far."

};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLcontactGeneric.replace("%data%", bio.contacts.email);
formattedEmail = formattedEmail.replace("%contact%", "Email: ");
var formattedPhone = HTMLcontactGeneric.replace("%data%", bio.contacts.phone);
formattedPhone = formattedPhone.replace("%contact%", "Phone: ");
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedSkills = HTMLskills.replace("%data%", bio.skills.join(", "));
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPicture);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedPhone);

$("#header").append(formattedWelcomeMsg);
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);	
}
$("#skills").append(formattedSkills);


var work = [
	{}, 
	{
		position : "SOFTWARE ENGINEER",
		employer : "APPLE",
		years : "2016-2017",
		city : "BERLIN",
		description : "I worked here for quite a while! I really like APPLE for being such a great startup, enabling people to be iPeople!"
	}
];
work[0].position = "HCI student";
work[0].employer = "TransferWise";
work[0].years = "2015-2016";
work[0].city = "TALLINN";
work[0].description = "I worked here for quite a while! I really like TransferWise for being such a great startup, enabling people to make seamless payments throughout the world!";


for (workItem in work) {
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work[workItem].employer));
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work[workItem].years));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work[workItem].city));	
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work[workItem].description));
	$(".work-entry:last").append("<br>");
}



var education = {
	"school" : {
		"name" : "Human-Computer Interaction",
		"years" : "2014-2015",
		"city" : "TALLINN",
		"major" : "MA"
	}

};	


$("#education").append(HTMLschoolStart);
$(".education-entry").append(HTMLschoolName.replace("%data%", education.school.name));
$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.school.major));
$(".education-entry").append(HTMLschoolDates.replace("%data%", education["school"].years));
$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.school.city));


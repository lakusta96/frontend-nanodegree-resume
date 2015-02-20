
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
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);


var work = {};
work.position = "HCI student";
work.employer = "TransferWise";
work.years = "2015-2016";
work.city = "TALLINN";

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.employer));
$("#workExperience").append(HTMLworkDates.replace("%data%", work.years));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work.city));


var education = {
	"school" : {
		"name" : "Human-Computer Interaction",
		"years" : "2014-2015",
		"city" : "TALLINN",
		"major" : "MA"
	}

};	


$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", education.school.name));
$("#education").append(HTMLschoolDegree.replace("%data%", education.school.major));
$("#education").append(HTMLschoolDates.replace("%data%", education["school"].years));
$("#education").append(HTMLschoolLocation.replace("%data%", education.school.city));


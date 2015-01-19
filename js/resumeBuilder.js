var bio = {
	"name" : "Mega Mind",
	"role": "Front End Developer",
	"contacts" : {
		"mobile" : "123.435.789",
		"email": "dblsesame@gmail.com",
		"github" : "dblsesame",
		"twitter" : "@dblsesame",
		"location" : "New Jersey"
	},
	"biopic": "images/megamind.jpg",
	"welcomeMessage": "welcome",
	"skills": ["programming","problem solving","data analysis"]
};

bio.display = function () {

	$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));


	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

	$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));


	if (bio.skills !== null && bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i=0; i<bio.skills.length; i++ ) {
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
		}
	}
}

var education = {
	"schools" : [
	{
		"name" : "State University of New York",
		"dates" : "1992",
		"location" : "Stony Brook, NY",
		"major" : "Computer Sci",
		"degree" : "Master",
		"url" : ""
	},
	{
		"name" : "Prison for the Criminally Gifted",
		"dates" : "1988",
		"location" : "New York City, NY",
		"major" : "Criminal Invention",
		"degree" : "Bachelor",
		"url" : ""
	}
	],
	"onlineCourses" : [
		{
			"school" : "Udacity",
			"title" : "Intro to HTML and CSS",
			"url" : "http://udacity.com",
			"date" : "2014"
		},
		{
			"school" : "Udacity",
			"title" : "JavaScript Basics",
			"url" : "http://udacity.com",
			"date" : "2014"
		},
		{
			"school" : "Udacity",
			"title" : "Intro to jQuery",
			"url" : "http://udacity.com",
			"date" : "2014"
		}
	]
};

education.display = function() {
	//display schools
	
	for (school in education.schools) {
		// 
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace(
			"%data%",education.schools[school].name));
		$(".education-entry:last").append(HTMLschoolDegree.replace(
			"%data%",education.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace(
			"%data%",education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace(
			"%data%",education.schools[school].location));
	 	$(".education-entry:last").append(HTMLschoolMajor.replace(
	 		"%data%",education.schools[school].major));

	}
	//display online courses
	$("#education").append(HTMLonlineClasses);
	
	for (olc in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineTitle.replace(
			"%data%",education.onlineCourses[olc].title));
		$(".education-entry:last").append(HTMLonlineSchool.replace(
			"%data%",education.onlineCourses[olc].school));
		$(".education-entry:last").append(HTMLonlineDates.replace(
			"%data%",education.onlineCourses[olc].date));
		$(".education-entry:last").append(HTMLonlineURL.replace(
			"%data%",education.onlineCourses[olc].url));
	}

}

var work = {
	"jobs" : [
	{
		"title" : "Professional Architect",
		"employer" : "AT&T",
		"dates" : "2011 - present",
		"location" : "Middletown, NJ",
		"description" : "Support Cloud Platform"
	},
	{
		"title" : "Defender of Metro City",
		"employer" : "Metro City",
		"dates" : "2010 - 2011",
		"location" : "New York City, NY",
		"description" : "Reluctantly acting as super hero."
	}
	]
};

work.display = function() {
	for (jobindex in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var job = work.jobs[jobindex];
		var formattedTitle = HTMLworkTitle.replace("%data%",job["title"]);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",job["employer"]);
		var formattedDates = HTMLworkDates.replace("%data%", job["dates"]);
		var formattedLocation = HTMLworkLocation.replace("%data%", job["location"]);
		var formattedDescription = HTMLworkDescription.replace("%data%", job["description"]);
		/* work-entry is class not id*/
		$(".work-entry:last").append(formattedEmployer+formattedTitle+
			formattedDates+formattedLocation+formattedDescription);
	}
}

var projects = {
	projects : [
		{
			"title" : "Mockup to Website",
			"dates" : "2014",
			"description" : "Replicate PDF design mockup in HTML and CSS.",
			"images" : ["images/p1.jpg"]
		},
		{
			"title" : "JavaScript Project",
			"dates" : "2014",
			"description" : "Authoring resume using JavaScript to populate information to HTML template.",
			"images" : ["images/p2.png"]
		}
	]
};

projects.display = function () {
	for (var i in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
		for (img in projects.projects[i].images)
		{
			var formattedImage 
			= HTMLprojectImage.replace("%data%",projects.projects[i].images[img]);
			$(".project-entry:last").append(formattedImage);
		}
		
	}
	
}


bio.display();
projects.display();
work.display();
education.display();


$(document).click( function(loc) {
	logClicks(loc.screenX ,loc.screenY);
});

function inName(fullname) {
	var nameArray = fullname.split(" ");
	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	nameArray[1] = nameArray[1].toUpperCase();
	
	return nameArray.join(" ");
}

var name = bio.name;
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


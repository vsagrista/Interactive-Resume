// Info
var bio = {
  "name": "Victor Sagrista",
  "role": "Front End Developer",
  "pictureUrl": "./images/victor.png",
  "welcomeMessage": "Welcome to my interactive resume page",
  "skills": ["Javacript", "Angular", "Rails", "HTML", "CSS", "Grunt", "Handlebars"],
  "contacts": {
  	"mobile": "+34-615-585-539",
  	"email": "victorsagristalopez@gmail.com",
  	"github": "https://github.com/vsagrista",
  	"location": "Barcelona"
  }
}

var work = {
	"jobs": [
	  {
		  "title": "Front End Developer",
		  "employer": "Novicap",
		  "dates": "December, May 2016",
		  "location": "Barcelona",
		  "description": "In charge of the front end site"
	  },
	  {
		  "title": "Ruby developer and Teaching Assistant",
		  "employer": "Ironhack",
		  "dates": "October - December 2015",
		  "location": "Barcelona",
		  "description": "Teaching and reviewing code in ruby and rails"
		},
		{
			"title": "World Language Teacher",
		  "employer": "DC Public Schools",
		  "dates": "September 2012 - September 2015",
		  "location": "Washington DC, USA",
		  "description": "In charge of teaching Spanish at the whole school"
		}
  ]
}


var projects = {
	"project": [ 
	  {
	   "title":"Altuist",
	   "description": "Web app for users to share minutes for skills. Javascript & RoR ",
	   "dates":"October 2015 - Ongoing",
	   "img":"./images/birds.jpg"
		},
		{
		 "title":"Automated Posts",
	   "description": "An app to schedule tweets. Javascript & RoR",
	   "dates":"November 2015 - January 2016",
	   "img":"./images/robot.png"
		},
		{
		 "title":"Random Quote Generator",
	   "description": "Front End project that displays random quotes from an API",
	   "dates":"February 2016",
	   "img":"./images/quote.png"
		}
	]
}

var education = {
	"schools":
	  [
			{
				"name": "Ironhack",
			  "degree": "Coding Bootcamp Program",
			  "dates": "August - October 2015",
			  "location": "Barcelona, Spain",
			  "major": "HTML, CSS, Ruby on Rails, Javascript"
			},
			{
				"name": "American University",
			  "degree": "Social Context of Bilingual Learners",
			  "dates": "September - December 2013",
			  "location": "Washington DC, USA",
			  "major": "Graduate coursework"
			},
		  {
			  "name": "Pablo de Olavide University",
			  "degree": "MA The Humanities",
			  "dates": "June 2008, June 2010",
			  "location": "Seville, Spain",
			  "major": "Spanish Teaching as a Foreign Language"
			},
		  {
			  "name": "University of Seville",
			  "degree": "BA Elementay Education and Teaching",
			  "dates": "June 2003, June 2007",
			  "location": "Seville, Spain",
			  "major": "ESL and Early Childhood Education"
		  }
		],
  "onlineSchool": 
  	{
  		"name": "Front End Developer Nanogree",
  		"school": "Udacity",
  		"dates": "Summer 2016",
  		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  	}
}

function headerDisplay() {
	HTMLheaderName = HTMLheaderName.replace('%data%',bio.name);
	HTMLheaderRole = HTMLheaderRole.replace('%data%',bio.role);
	HTMLbioPic = HTMLbioPic.replace('%data%',bio.pictureUrl);
	$('#header').prepend(HTMLheaderRole);
	$('#header').prepend(HTMLheaderName);
	$('#header').prepend(HTMLchangeLanguage);
	$('#img-div').append(HTMLbioPic);
	$('#skills-div').append(HTMLskillsStart);
}

function contactInfoDisplay() {
	var mobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
	var email = HTMLemail.replace('%data%',bio.contacts.email);
	var github = HTMLgithub.replace('%data%',bio.contacts.github);
	var location = HTMLlocation.replace('%data%',bio.contacts.location);
	$('#topContacts').append(mobile);
	$('#topContacts').append(email);
	$('#topContacts').append(github);
	$('#topContacts').append(location);
}
 
// function skillsDisplay() {
// 	bio.skills.forEach(function(skill) {
// 		var nextSkill = HTMLskills.replace('%data%',skill);
// 		$('#skills').append(nextSkill);
// 	});
// }

work.display = function() {
	$('#workExperience').append(HTMLworkStart);
	work.jobs.forEach(function(work){
		var employer = HTMLworkEmployer.replace('%data%',work.employer);
		var title = HTMLworkTitle.replace('%data%',work.title);
		var dates = HTMLworkDates.replace('%data%',work.dates);
		var location = HTMLworkLocation.replace('%data%',work.dates);
		var description = HTMLworkDescription.replace('%data%',work.description);
		$('.work-entry').append(employer + title);
		$('.work-entry').append(dates + location);
	  $('.work-entry').append(description);
	})
}

education.display = function() {
	$('#education').append(HTMLschoolStart);
	education.schools.forEach(function(school){
		var name = HTMLschoolName.replace('%data%',school.name);
		var degree = HTMLschoolDegree.replace('%data%',school.degree);
		var dates = HTMLschoolDates.replace('%data%',school.dates);
		var location = HTMLschoolLocation.replace('%data%',school.location)
		var major = HTMLschoolMajor.replace('%data%',school.major);
		$('.education-entry').append(name + degree);
		$('.education-entry').append(dates + location);
	  $('.education-entry').append(major);
	})
	$('.education-entry').append(HTMLonlineClasses);
	$('.education-entry').append(HTMLonlineTitle.replace('%data%',education.onlineSchool.name) + HTMLonlineSchool.replace('%data%',education.onlineSchool.school));
	$('.education-entry').append(HTMLonlineDates.replace('%data%',education.onlineSchool.dates));
	$('.education-entry').append(HTMLonlineURL.replace('%data%',education.onlineSchool.url));
}

projects.display = function() {
	$('#projects').append(HTMLprojectStart);
	projects.project.forEach(function(project,index){
	  var img = HTMLprojectImage.replace('%data%',project.img);
		var title = HTMLprojectTitle.replace('%data%',project.title);
		var dates = HTMLprojectTitle.replace('%data%',project.dates);
	  var description = HTMLprojectDescription.replace('%data%',project.description);
	  var innerEntry = HTMLinnerEntry.replace('%data%',index);
	  $('.project-entry').append(innerEntry);
	  $('.inner-entry-'+index).append(img);
	  $('.inner-entry-'+index).append(title);
	  $('.inner-entry-'+index).append(dates);
	  $('.inner-entry-'+index).append(description);
	});
}

function inName(name) {
	var nameArr = name.trim().split(' ');
	var firstName = nameArr[0].charAt(0).toUpperCase() + 
	                nameArr[0].replace(name.charAt(0),'');
	var lastName = nameArr[1].toUpperCase();
	return firstName + ' ' + lastName;
}

var chartData = [4, 8, 15, 16, 23, 42];
var scores = [4,5,7,8,9,10,8]
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(bio.skills);
var barEnter = barUpdate.enter().append("div");
barEnter.style("width", function(d,i) { return scores[i] * 50 + "px"; });
barEnter.text(function(d) { return d; });

headerDisplay();
contactInfoDisplay();
//skillsDisplay();
work.display();
education.display();
projects.display();

$('#mapDiv').append(googleMap);

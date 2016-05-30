// Info
var bio = {
  "name": "Victor Sagrista Lopez",
  "role": "Front End Developer",
  "pictureUrl": "./images/developer.jpg",
  "welcomeMessage": "Welcome to my interactive resume page",
  "skills": ["Javacript", "angular", "react", "HTML", "CSS", "rails", "grunt"]
}

var work = [
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
];

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

var school = 
  {"schools":
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


// Header

HTMLheaderName = HTMLheaderName.replace('%data%',bio.name);
HTMLheaderRole = HTMLheaderRole.replace('%data%',bio.role);
HTMLbioPic = HTMLbioPic.replace('%data%',bio.pictureUrl);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);

$('#header').prepend(HTMLheaderRole);
$('#header').prepend(HTMLheaderName);
$('#header').append(HTMLbioPic);
$('#header').append(HTMLwelcomeMsg);
$('#header').append(HTMLskillsStart);

// Skills 

bio.skills.forEach(function(skill) {
	var nextSkill = HTMLskills.replace('%data%',skill);
	$('#skills').append(nextSkill);
});

// Work
$('#workExperience').append(HTMLworkStart);

work.forEach(function(work){

	var employer = HTMLworkEmployer.replace('%data%',work.employer);
	var title = HTMLworkTitle.replace('%data%',work.title);
	var dates = HTMLworkDates.replace('%data%',work.dates);
	var location = HTMLworkLocation.replace('%data%',work.dates)
	var description = HTMLworkDescription.replace('%data%',work.description);

	$('.work-entry').append(employer + title);
	$('.work-entry').append(dates + location);
  $('.work-entry').append(description);

})

// Projects

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

// Education 

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

$('#education').append(HTMLschoolStart);

school.schools.forEach(function(school){

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
$('.education-entry').append(HTMLonlineTitle.replace('%data%',school.onlineSchool.name) + HTMLonlineSchool.replace('%data%',school.onlineSchool.school));
$('.education-entry').append(HTMLonlineDates.replace('%data%',school.onlineSchool.dates));
$('.education-entry').append(HTMLonlineURL.replace('%data%',school.onlineSchool.url));

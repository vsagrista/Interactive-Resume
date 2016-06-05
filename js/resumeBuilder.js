var bio = {
  "name": "Victor Sagrista",
  "role": "Front End Developer",
  "pictureUrl": "./images/victor.png",
  "welcomeMessage": "Welcome to my interactive resume page",
  "skills": ["Grunt", "Handlebars","Angular","CSS","HTML", "Rails", "Javacript"],
  "scores": [3,4,5,6,7,8,9],
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
		  "title": ["Front End Developer","Desarrollador Front End"],
		  "employer": "Novicap",
		  "dates": ["December, May 2016", "Diciembre - Mayo 2016"],
		  "location": "Barcelona",
		  "description": ["In charge of the front end site","Encargado de mantener el front end de la empresa"]
	  },
	  {
		  "title": ["Ruby developer and Teaching Assistant","Desarrollador Ruby y profesor asistente"],
		  "employer": "Ironhack",
		  "dates": "October - December 2015",
		  "location": "Barcelona",
		  "description": ["Teaching and reviewing code in ruby and rails","Programando en ruby y ayudando a los alumnos con code reviews y explicaciones"]
		},
		{
			"title": ["World Language Teacher", "Profesor de español"],
		  "employer": "DC Public Schools",
		  "dates": ["September 2012 - September 2015","Septiembre 2012 - Septiembre 2015"],
		  "location": "Washington DC, USA",
		  "description": ["In charge of teaching Spanish at the whole school", "Encargado de enseñar español a toda la escuela"]
		},
		{
			"title": ["Spanish Teacher to Ambassadors","Profesor de español de embajadores"],
		  "employer": ["Organization of American States","Organización de Estados Americanos"],
		  "dates": ["September 2013 - January 2015", "Septiembre 2013 - Enero 2015"],
		  "location": "Washington DC, USA",
		  "description": ["Spanish Teacher to Ambassadors from the Caribbean Community", "Profesor de español de embajadores de la CARICOM"]
		},
		{
			"title": ["International internship in the Dominican Republic", "Pasantia internacional en la República Dominicana"],
		  "employer": "Yspaniola",
		  "dates": ["July - August 2013", "Julio - Agosto 2013"],
		  "location": ["Esperanza, Dominican Republic", "Esperanza, República Dominicana"],
		  "description": ["Teaching in an impoverished area in the DR", "Profesor voluntario en una zona marginal"]
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
	   "dates":"Nov 2015 - January 2016",
	   "img":"./images/robot.png"
		},
		{
		 "title":"Random Quote Generator",
	   "description": "Front End project that displays random quotes from an API",
	   "dates":"February 2016",
	   "img":"./images/quote.png"
		},
		{
		 "title":"Random FlickR Search",
	   "description": "Front End project that displays random FlickR chosen images",
	   "dates":"April 2016",
	   "img":"./images/flickr.png"
		}
	]
}

var education = {
	"schools":
	  [
	  	{
	  		"name": "Udacity",
	  		"degree" : "Front End Developer Nanodegree",
	  		"dates": "Current",
	  		"location": "Online",
	  		"major": "Front End web development"
	  	},
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
		]
}

bio.headerDisplay = function() {
	HTMLheaderName = HTMLheaderName.replace('%data%',checkLang(bio.name));
	HTMLheaderRole = HTMLheaderRole.replace('%data%',checkLang(bio.role));
	HTMLbioPic = HTMLbioPic.replace('%data%',checkLang(bio.pictureUrl));
	$('#header').prepend(HTMLheaderRole);
	$('#header').prepend(HTMLheaderName);
	$('#header').prepend(HTMLchangeLanguage);
	$('#img-div').append(HTMLbioPic);
	$('.chart').append(HTMLskillsStart);
}

bio.contactInfoDisplay = function() {
	var mobile = HTMLmobile.replace('%data%',checkLang(bio.contacts.mobile));
	var email = HTMLemail.replace('%data%',checkLang(bio.contacts.email));
	var github = HTMLgithub.replace('%data%',checkLang(bio.contacts.github));
	var location = HTMLlocation.replace('%data%',checkLang(bio.contacts.location));
	$('#topContacts').append(mobile);
	$('#topContacts').append(email);
	$('#topContacts').append(github);
	$('#topContacts').append(location);
}
 
bio.skillsDisplay = function() {
	var chart = d3.select(".chart");
	var bar = chart.selectAll("div");
	var barUpdate = bar.data(bio.skills);
	var barEnter = barUpdate.enter().append("div");
	barEnter.style("width", function(d,i) { return bio.scores[i] * 10 + "%"; });
	barEnter.text(function(d) { return d; });
}

work.display = function() {
	$('#workExperience').append(HTMLworkStart);
	work.jobs.forEach(function(work){
		var employer = HTMLworkEmployer.replace('%data%',checkLang(work.employer));
		var title = HTMLworkTitle.replace('%data%',checkLang(work.title));
		var dates = HTMLworkDates.replace('%data%',checkLang(work.dates));
		var location = HTMLworkLocation.replace('%data%',checkLang(work.dates));
		var description = HTMLworkDescription.replace('%data%',checkLang(work.description));
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
}

projects.display = function() {
	$('#projects').append(HTMLprojectStart);
	projects.project.forEach(function(project,index){
	  var img = HTMLprojectImage.replace('%data%',project.img);
		var title = HTMLprojectTitle.replace('%data%',project.title);
		var dates = HTMLprojectDates.replace('%data%',project.dates);
	  var description = HTMLprojectDescription.replace('%data%',project.description);
	  var innerEntry = HTMLinnerEntry.replace('%data%',index);
	  $('.project-entry').append(innerEntry);
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

function checkLang(info) {
	if (Array.isArray(info)) {
		if (window.sessionStorage.lang === 'ES') {
			$('.lang-change').addClass('selected-lang');
			$('#english').removeClass('selected-lang');
			return info[1]; 
		}
		$('.lang-change').addClass('selected-lang');
		$('#spanish').removeClass('selected-lang');
		return info[0]; 
	}
	return info;
}

function init(){
	bio.headerDisplay();
	bio.contactInfoDisplay();
	bio.skillsDisplay();
	work.display();
	education.display();
	projects.display();
}
init();

$(document).on('click','#spanish', function(){
		sessionStorage.setItem('lang', 'ES');
		location.reload()
});

$(document).on('click','#english', function(){
	  sessionStorage.setItem('lang', 'EN');
		location.reload()
});

$('#mapDiv').append(googleMap);

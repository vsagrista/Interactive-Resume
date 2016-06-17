var bio = {
  "name": "Victor Sagrista",
  "role": "Front End Developer",
  "pictureUrl": "./images/victor.png",
  "welcomeMessage": "Welcome to my interactive resume page",
  "skills": ["Grunt", "Handlebars","Angular","CSS","HTML", "Rails", "Javascript"],
  "scores": [3,4,5,6,7,8,9],
  "contacts": {
  	"mobile": "+34-615-585-539",
  	"email": "victorsagristalopez@gmail.com",
  	"github": "https://github.com/vsagrista",
  	"location": "Barcelona, Spain",
  	"mobileTag": ["Mobile", "Móvil"],
  	"locationTag": ["Location", "Ciudad"]
  }
}

var work = {
	"jobs": [
	  {
		  "title": ["Front End Developer","Desarrollador Front End"],
		  "employer": "Novicap",
		  "dates": ["December, May 2016", "Diciembre - Mayo 2016"],
		  "location": "Barcelona, Spain",
		  "description": ["In charge of the front end site","Encargado de mantener el front end de la empresa"],
		  "url": "http://www.novicap.com"
	  },
	  {
		  "title": ["Ruby Developer and Teaching Assistant","Desarrollador Ruby y profesor asistente"],
		  "employer": "Ironhack",
		  "dates": ["October - December 2015","Octubre - Diciembre 2015"],
		  "location": "Barcelona, Spain",
		  "description": ["Teaching and reviewing code in ruby and rails","Programando en ruby y ayudando a los alumnos con code reviews y explicaciones"],
		  "url": "http://www.ironhack.com"
		},
		{
			"title": ["World Language Teacher", "Profesor de español"],
		  "employer": "DC Public Schools",
		  "dates": ["September 2012 - September 2015","Septiembre 2012 - Septiembre 2015"],
		  "location": "Washington DC, USA",
		  "description": ["In charge of teaching Spanish at the whole school", "Encargado de enseñar español a toda la escuela"],
			"url": "http://dcps.dc.gov/"
		},
		{
			"title": ["Spanish Teacher to Ambassadors","Profesor de español de embajadores"],
		  "employer": ["Organization of American States","Organización de Estados Americanos"],
		  "dates": ["September 2013 - January 2015", "Septiembre 2013 - Enero 2015"],
		  "location": "Washington DC, USA",
		  "description": ["Spanish Teacher to Ambassadors from the Caribbean Community", "Profesor de español de embajadores de la CARICOM"],
			"url": "http://www.oas.org/"
		},
		{
			"title": ["International internship in the Dominican Republic", "Pasantia internacional en la República Dominicana"],
		  "employer": "Yspaniola",
		  "dates": ["July - August 2013", "Julio - Agosto 2013"],
		  "location": ["Esperanza, Dominican Republic", "Esperanza, República Dominicana"],
		  "description": ["Teaching in an impoverished area in the DR", "Profesor voluntario en una zona marginal"],
			"url": "http://yspaniola.org/"
		}
  ]
}

var projects = {
	"project": [ 
	  {
	   "title":"Altuist",
	   "description": ["Web app for users to 'pay' with minutes for their talent, like a time bank. Built with Javascript & RoR ","App para intercambiar minutos por habilidades, como en un banco de tiempo. Hecha con Rails y Javascript"],
	   "dates":["October 2015 - Ongoing", "Octubre 2015 - Actualmente"],
	   "url": "https://altruist.herokuapp.com/"
		},
		{
		 "title": ["Automated Posts","Posts Automáticos"],
	   "description": ["An app to schedule tweets on a specific date in the future. Built with Javascript & RoR", "App para programar tweets en una fecha concreta futura. Hecha con Javascript y Rails"],
	   "dates": ["Nov 2015 - January 2016", "Nov - Enero 2016"],
	   "url": "https://github.com/vsagrista/Automated-posts"
		},
		{
		 "title": ["Random Quote Generator","Generador de citas famosas"],
	   "description": ["Front End project that displays random quotes from an API. Built with Javascript and CSS", "Proyecto de front end que muestra citas extraidas de una API. Hecha con Javascript y CSS"],
	   "dates": ["February 2016","Febrero 2016"],
	   "url":"http://codepen.io/vsagristalopez/full/BKaGRj"
		},
		{
		 "title":["Random FlickR Search","Busqueda aleatoria en Flickr"],
	   "description": ["Front End project that displays random FlickR chosen images. Made with React and Webpack ", "Proyecto front end que muestra imagenes aleatorias y el tiempo. Hecho con React y Webpack"],
	   "dates":"April 2016",
	   "url": "https://github.com/vsagrista/Random-Search-Flickr-React"
		}
	]
}

var education = {
	"schools":
	  [
	  	{
	  		"name": "Udacity",
	  		"degree" : "Front End Developer Nanodegree",
	  		"dates": ["Current", "Actualmente"],
	  		"location": "Online",
	  		"major": ["Front End Web Development","Desarrollo Front End"],
	  		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	  	},
			{
				"name": "Ironhack",
			  "degree": ["Coding Bootcamp Program","Curso de programacion web intensivo"],
			  "dates": ["August - Oct 2015", "Agosto - Oct 2015"],
			  "location": ["Barcelona, Spain", "Barcelona, España"],
			  "major": "HTML, CSS, Ruby on Rails, Javascript",
			  "url": "https://www.ironhack.com/es/curso-programacion-web"
			},
			{
				"name": "American University",
			  "degree": "Social Context of Bilingual Learners",
			  "dates": ["September - Dec 2013", "Septiembre - Dic 2013"],
			  "location": ["Washington DC, USA", "Washington DC, EEUU"],
			  "major": ["Graduate coursework", "Asignatura de máster"],
			  "url": "http://catalog.american.edu/preview_course_nopop.php?catoid=3&coid=8623"
			},
		  {
			  "name": ["Pablo de Olavide University","Universidad Pablo de Olavide"],
			  "degree": ["MA The Humanities","Licenciado en Humanidades"],
			  "dates": ["June 2008 - June 2010", "Junio 2008 - Junio 2010"],
			  "location": ["Seville, Spain", "Sevilla, España"],
			  "major": ["Spanish Teaching as a Foreign Language", "Profesor de español como LE"],
			  "url": "https://www.upo.es"
			},
		  {
			  "name": ["University of Seville", "Universidad de Sevilla"],
			  "degree": ["BA Elementay Education and Teaching", "Magisterio de ingles y de ed. infantil"],
			  "dates": ["June 2003 - June 2007", "Junio 2003 - Junio 2007"],
			  "location": ["Seville, Spain", "Sevilla, España"],
			  "major": "ESL y educación infantil",
			  "url": "http://www.us.es/"
		  }
		]
}

var tags = {
	"experienceHeader": ["Work Experience","Experiencia Laboral"],
	"projectsHeader": ["Projects","Proyectos"],
	"educationHeader": ["Education", "Educación"],
	"mapHeader": ["Where I've lived and Worked","Donde he vivido y trabajado"],
	"letsConnect": ["Let's Connect", "Contactemos"]
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
	var mobile = (HTMLmobile.replace('%data%',checkLang(bio.contacts.mobile))).replace('%mobile%',checkLang(bio.contacts.mobileTag));
	var email = (HTMLemail.replace('%data%',bio.contacts.email)).replace('#',bio.contacts.email);
	var github = (HTMLgithub.replace('%data%',bio.contacts.github)).replace('#',bio.contacts.github);
	var location = (HTMLlocation.replace('%data%',checkLang(bio.contacts.location))).replace('%location%',checkLang(bio.contacts.locationTag));
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
		var employer = (HTMLworkEmployer.replace('%data%',checkLang(work.employer))).replace('#',work.url);
		var title = HTMLworkTitle.replace('%data%',checkLang(work.title));
		var dates = HTMLworkDates.replace('%data%',checkLang(work.dates));
		var location = HTMLworkLocation.replace('%data%',checkLang(work.location));
		var description = HTMLworkDescription.replace('%data%',checkLang(work.description));
		$('.work-entry').append(employer + title);
		$('.work-entry').append(dates + location);
	  $('.work-entry').append(description);
	})
}

education.display = function() {
	$('#education').append(HTMLschoolStart);
	education.schools.forEach(function(school){
		var name = (HTMLschoolName.replace('%data%',checkLang(school.name))).replace('#',school.url);;
		var degree = HTMLschoolDegree.replace('%data%',checkLang(school.degree));
		var dates = HTMLschoolDates.replace('%data%',checkLang(school.dates));
		var location = HTMLschoolLocation.replace('%data%',checkLang(school.location));
		var major = HTMLschoolMajor.replace('%data%',checkLang(school.major));
		$('.education-entry').append(name + degree);
		$('.education-entry').append(dates + location);
	  $('.education-entry').append(major);
	})
}

projects.display = function() {
	$('#projects').append(HTMLprojectStart);
	projects.project.forEach(function(project,index){
		var title = (HTMLprojectTitle.replace('%data%',checkLang(project.title))).replace('#',project.url);
		var dates = HTMLprojectDates.replace('%data%',checkLang(project.dates));
	  var description = HTMLprojectDescription.replace('%data%',checkLang(project.description));
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
function setTagsHeaders(){
	$('#experience-header').html(checkLang(tags.experienceHeader));
	$('#mobile-header').html(checkLang(tags.mobileHeader));
  $('#location-header').html(checkLang(tags.locationHeader));
  $('#projects-header').html(checkLang(tags.projectsHeader));
  $('#education-header').html(checkLang(tags.educationHeader));
  $('#map-header').html(checkLang(tags.mapHeader));
  $('#lets-connect').html(checkLang(tags.letsConnect));
}

function init(){
	setTagsHeaders();
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

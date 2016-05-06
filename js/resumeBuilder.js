
var formattedName = 'Victor Sagrista Lopez';
var formattedRole = 'Software Developer';
HTMLheaderName= HTMLheaderName.replace('%data%',formattedName);
HTMLheaderRole = HTMLheaderRole.replace('%data%',formattedRole);
$('#header').prepend(HTMLheaderName);
$('#header').prepend(HTMLheaderRole);

/*
This is empty on purpose! Your code to build the resume will go here.
 */


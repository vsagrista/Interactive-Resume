var formattedName = 'Victor Sagrista Lopez';
var formattedRole = 'Software Developer';
HTMLheaderName= HTMLheaderName.replace('%data%',formattedName);
HTMLheaderRole = HTMLheaderRole.replace('%data%',formattedRole);
$('#header').prepend(HTMLheaderName);
$('#header').prepend(HTMLheaderRole);
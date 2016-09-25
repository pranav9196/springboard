//api url
var hackerEarth = " https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths";

$.getJSON(hackerEarth, function (json) {

    // Set the variables from the paths array
    var id = json.paths[0].formatted_address;
    console.log('id : ', id);
    
    var tags = json.paths[0].geometry.location.lat;
    console.log('tags : ', tags);
    
    var name = json.paths[0].geometry.location.lng;
    console.log('Name : ', name);

    var image = json.paths[0].geometry.location.lng;
    console.log('Image : ', image);

    var learners = json.paths[0].geometry.location.lng;
    console.log('Learners : ', learners);

    var hours = json.paths[0].geometry.location.lng;
    console.log('hours : ', hours);

    // Set the table td text
    $('#address').text(address);
    $('#latitude').text(latitude);
    $('#longitude').image(longitude);
});



// Caching the link jquery object
var $myLink = $('a.myLink');

// Set the links properties
$myLink.prop({
    href: hackerEarth,
    title: 'Click on this link to open in a new window.'
}).click(function (e) {
    e.preventDefault();
    window.open(this.href, '_blank');
});


// pagination

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
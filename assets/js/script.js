jQuery.noConflict();
jQuery(document).ready(function($){
								
							
function lightboxPhoto() {
	
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
			animationSpeed:'fast',
			slideshow:5000,
			theme:'light_rounded',
			show_title:false,
			overlay_gallery: false
		});
	
	}
	
		if(jQuery().prettyPhoto) {
	
		lightboxPhoto(); 
			
	}
	
	
if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.portfolio-categ li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item2');
		} else {
			var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {

				lightboxPhoto();
						});		
		$(this).addClass("active"); 			
		return false;
	});
	
}//if quicksand

});

// // // function sendMail(){
// // // 	var params={
// // // 		name: document.getElementById('w3lName').value,
// // // 		email: document.getElementById('w3lSender').value,
// // // 		message: document.getElementById('w3lMessage').value,
// // // 	}
// // // 	const serviceId="service_wy3pgyh";
// // // 	const templateId="template_9rf7q4a";

// // // 	emailjs.send(serviceId,templateId,params)
// // // 	then(
// // // 		res=>{
// // // 	document.getElementById('name').value="";
// // // 	document.getElementById('email').value="";
// // // 	document.getElementById('message').value="";
// // // 	console.log(res);
// // // 	alert('your message send successfully');
// // // 		})
// // // 	.catch((err)=>console.log(err));
// // // }

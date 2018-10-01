$( document ).ready(function() 
{
    console.log( "easts_details.js is up" );
    
    $('#show_email').click(function()
    {
		let email1 = "easts";
		let email2 = "@";
		let email3 = "eastsvolleyball";
		let email4 = ".com";
		
		let completeemail = email1+email2+email3+email4;
		//console.log(completeemail);
		
		$('#emailspace').empty();
		$('#show_email').hide();
		$('#emailspace').html("<h4>"+completeemail+"</h4>");
    })
    
}); // end document ready function
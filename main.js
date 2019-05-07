$( document ).ready(function() {
    $("form").submit(function(e){
    	e.preventDefault();
    	localStorage.name = $("#name_form").val()
    	localStorage.email = $("#text_form").val()
    	localStorage.tel = $("#tel_form").val()
    	localStorage.textarea = $("#textarea_form").val()

    	$("#name_form").val('')
		$("#text_form").val('')
		$("#tel_form").val('')
		$("#textarea_form").val('')
});

});
$(document).ready(function() {
  //$("#final_span").suggest({ "key" : "AIzaSyDBrXTAJYcC78EXRKgwVs3FbxR5W6NQ8CI"});
});

function search(speech_text){
	console.log(speech_text);
	var limit = 10;
	$.ajax({
  		url: "https://www.googleapis.com/freebase/v1/search?callback=callback&query=" + speech_text + "&limit=" + limit,
  		dataType: 'jsonp',
  		async: false
	});

}

function callback(data) {
	results = data["result"];

	console.log(data);

	for (i = 0 ; i < results.length ; i++) {
		name = results[i]["name"];

		$('#results_list').append("<li>" + name + "</li>");
	}
};
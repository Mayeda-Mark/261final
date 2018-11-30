function select() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
       		var parse = JSON.parse(xhttp.responseText);
       		var state = "<select style=\"border: outset;\"><option value = \"\">- Select -</option>"
       		for(var i = 0; i < parse.length; i++) {
       			state += "<option value= \"" + parse[i].rate + "\">" + parse[i].state + "</option>";
       		}
       		state += "</select>"
       		document.getElementById('stateSelect').innerHTML = state;
    	}
	};
	xhttp.open("GET", "interest.json", true);
	xhttp.send();
}
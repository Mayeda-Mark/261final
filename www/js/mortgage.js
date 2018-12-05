function select() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
       		var parse = JSON.parse(xhttp.responseText);
       		var state = "<select id=\"stateInfo\" style=\"border: outset;\" onchange=\"stateInsurance()\"><option value = \"\">- Select -</option>"
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

function stateInsurance() {
  var rate = document.getElementById('stateInfo').value;
  document.getElementById('interest').value = rate;
}

function DPPrecentChange() {
  if (document.getElementById('principle')) {
    var amnt = document.getElementById('DPAmnt').value;
    var principle = document.getElementById('principle').value;
    document.getElementById('DPPcnt').value = (amnt / principle) * 100;
  }
}

function DPAmntChange() {
  if (document.getElementById('principle')) {
  var principle = document.getElementById('principle').value;
    var placeholder = document.getElementById('DPPcnt').value;
    var pcnt = document.getElementById('DPPcnt').value * .001;
    document.getElementById('DPAmnt').value = principle * pcnt;
  }
}
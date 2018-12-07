function select() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
       		var parse = JSON.parse(xhttp.responseText);
       		var state = "<select id=\"stateInfo\" style=\"border: outset;\" onchange=\"stateInsurance(); makeTable();\"><option value = \"\">- Select -</option>"
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

function makeTable() {
  var table = "<table><tr><th>Period</th><th>Beginning Principle</th><th>Monthly Payment</th><th>Payment on Interest</th><Payment on Principle</th><th>Remaining Principle</th></tr>"
  var principle = parseFloat(document.getElementById('principle').value);
  var interest = parseFloat(document.getElementById('interest').value) / 100;
  var downPayment = parseFloat(document.getElementById('DPAmnt').value);
  var lenght = parseInt(document.getElementById('length').value);
  var remaining = principle - downPayment;
  var mInterest = interest / 12;
  var periods = length * 12;
  var innerParenth =  Math.pow((1 + mInterest), periods);
  var monthly = remaining * ((mInterest * innerParenth) / (innerParenth - 1));
  document.getElementById('table').innerHTML = table;
}
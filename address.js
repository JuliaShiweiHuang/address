var addressHolder = "";
document.getElementById("create").onclick = randGenAddress;


var streetNumber = [34, 215, 18, 1, 289];
var streetName = ["A Street", "Congress Street", "St. Stephen Street", "Willet Street", "East Main Street", "Westfield Dr"];
var cityName = ["Itica", "Boston", "Dorchester", "Quincy", "Wollaston", "Kingston", "San Francisco", "Los Angeles", "New York", "Cambridge"];
var stateName = ["NY", "NH", "VT", "CA"];
var zipCode = [02210, 02131, 17938, 20086];

function randGenAddress() {
	var randomStreetNum = streetNumber[Math.floor(Math.random() * streetNumber.length)];
	var randomStreetName = streetName[Math.floor(Math.random() * streetName.length)];
	var randomCityName = cityName[Math.floor(Math.random() * cityName.length)];
	var randomStateName = stateName[Math.floor(Math.random() * stateName.length)];
	var randomZipCode = zipCode[Math.floor(Math.random() * zipCode.length)];
	addressHolder = addressHolder + randomStreetNum + " " + randomStreetName + ", " + randomCityName + " " + randomStateName + ", " + randomZipCode + "<br />";
	document.getElementById("address").innerHTML = addressHolder;

}
// randGenAddress();
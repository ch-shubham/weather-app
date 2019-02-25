// initialize Storage
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();
// initialize weather object
const weather = new Weather(weatherLocation.city,weatherLocation.state); 
// initialize UI object
const ui = new UI();

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value; 

	//change location
	weather.changeLocation(city,state);

	//Set Location In local storage
	storage.setLocationData(city,state);


	//Get and display Weather
	getWeather();

	//close Modal (using Jquery)
	$('#locModal').modal('hide');

	document.getElementById('city').value = '';
	document.getElementById('state').value = '' ;
});

// weather.changeLocation('Boston');
function getWeather(){
	weather.getWeather() //this statement returns promise as getWeather is async method so we treat it like a promise and use .then and .catch
		.then(results => {
			ui.paint(results);
		})
		.catch(err => console.log(err));
}
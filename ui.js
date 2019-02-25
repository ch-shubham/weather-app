class UI{
	constructor(){
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.details = document.getElementById('w-details');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.feelsLike = document.getElementById('w-feels-like');
		this.dewpoint = document.getElementById('w-dewpoint');
		this.wind = document.getElementById('w-wind');
	}

	paint(weather){
		this.location.textContent = weather.name + ' ,' + weather.sys.country;
		this.desc.textContent = weather.weather[0].description;
		this.string.textContent = weather.main.temp;
		let icony = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
		this.icon.setAttribute('src' , icony); 
		this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
		this.feelsLike.textContent = `Feels Like(Pressure) : ${weather.main.pressure}`;
		this.dewpoint.textContent = `dewpoint(temp-max) : ${weather.main.temp_max}`;
		this.wind.textContent = `Wind:${weather.wind.speed}`;
	}

}

class Weather{
	constructor(city,state){
		this.apiKey = 'e0dd778ca108b4a21b41b40d88cf7eec';
		this.city = city;
		this.state = state;
	}

	//Fetch weather from API
	async getWeather(){
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=e0dd778ca108b4a21b41b40d88cf7eec&units=metric`);

		const responseData = await response.json();


		return responseData;
	}
	changeLocation(city,state){
		this.city = city;
		this.state = state;
	}
}
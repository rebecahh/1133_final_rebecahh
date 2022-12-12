var zipcodeArr = [10001, 94102, 98101, 78205, 60629, 90011, 80202, 30303, 19019];
var weatherArr = [];
var extractedWeatherArr = [];
var curr_r = 0;
var curr_g = 0;
var curr_b = 0;
var overcastclouds;

function preload() {
  for (var i = 0; i < zipcodeArr.length; i++) {
    weatherArr[i] = loadJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=' + zipcodeArr[i] + ',us&APPID=477929b9958afcadcced733e8f81ef79');
  }
	cloud = loadImage('cloud.png');
	rain = loadImage('rain.gif');
	lightraight = loadImage('lightrain.gif');
	mist = loadImage('mist.gif');
	person = loadImage('person.png');
	umbrella = loadImage('umbrella.png');
	sunglasses = loadImage('sunglasses.png');
	cap = loadImage('cap.png');
	mask = loadImage('mask.png');
	platform = loadImage('platform.jpeg');
	grass = loadImage('grass.png');
	nyc = loadImage('nyc.png');
	sf = loadImage('sf.png');
	seattle = loadImage('seattle.png');
	sanantonio = loadImage('sanantonio.png');
	chicago = loadImage('chicago.png');
	la = loadImage('la.png');
	denver = loadImage('denver.png');
	atl = loadImage('atl.png');
	phl = loadImage('phl.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	// frameRate(10);
  background(curr_r, curr_g, curr_b);
  fill(255);
  textFont('Courier New');
  textStyle(BOLD);
  textSize(20);
	imageMode(CENTER);
  // for (var i = 0; i < weatherArr.length; i++) {
  //   console.log(getData(weatherArr[i]));
  // }
}

function draw() {
	noStroke();
  if (mouseX > width / 3 && mouseX < width / 3 * 2) {
    if (mouseY < (height / zipcodeArr.length)) {
      zip_animate(0);
			image(nyc,2*width/3,height/2,120,150);
    } else if (mouseY < (height / zipcodeArr.length) * 2) {
      zip_animate(1);
			image(sf,2*width/3,height/2,150,150);
    } else if (mouseY < (height / zipcodeArr.length) * 3) {
      zip_animate(2);
			image(seattle,2*width/3,height/2,80,150);
    } else if (mouseY < (height / zipcodeArr.length) * 4) {
      zip_animate(3);
			image(sanantonio,2*width/3,height/2,180,200);
    } else if (mouseY < (height / zipcodeArr.length) * 5) {
			zip_animate(4);
			image(chicago,2*width/3,height/2,150,150);
    } else if (mouseY < (height / zipcodeArr.length) * 6) {
			zip_animate(5);
			image(la,2*width/3,height/2-30,200,100);
    } else if (mouseY < (height / zipcodeArr.length) * 7) {
      zip_animate(6);
			image(denver,2*width/3,height/2,180,150);
    } else if (mouseY < (height / zipcodeArr.length) * 8) {
      zip_animate(7);
			image(atl,2*width/3,height/2,180,150);
    } else if (mouseY < (height / zipcodeArr.length) * 9) {
      zip_animate(8);
			image(phl,2*width/3,height/2,180,150);
		}
    // } else if (mouseY < (height / zipcodeArr.length) * 10) {
    //   zip_animate(9);
    // } else if (mouseY < (height / zipcodeArr.length) * 11) {
    //   zip_animate(10);
    // } else if (mouseY < (height / zipcodeArr.length) * 12) {
    //   zip_animate(11);
    // }
  } else {
    background(0);
    start();
  }

}

function start() {
  cursor();
  for (var i = 0; i < zipcodeArr.length; i++) {
    textAlign(CENTER);
    text(zipcodeArr[i], width/2,(height / zipcodeArr.length) * i + 20);
  }
}

function zip_animate(zip) {
  noCursor();
  city = getData(weatherArr[zip]);
  // console.log(city.temp);
  background(curr_r, curr_g, curr_b);
  if (city.temp < 30) {
    bgChange(140, 174, 212);
  } else if (city.temp < 40) {
    bgChange(161, 178, 196);
  } else if (city.temp < 50) {
    bgChange(161, 196, 182);
  }
  else if (city.temp < 60) {
    bgChange(167, 196, 161);
  }
  else if (city.temp < 60) {
    bgChange(181, 196, 161);
  }
  else if (city.temp < 70) {
    bgChange(196, 195, 161);
  }
  else if (city.temp < 80) {
    bgChange(196, 176, 161);
  }
  else if (city.temp < 90) {
    bgChange(196, 161, 161);
  }
  textAlign(CENTER);
	if (city.description == 'light rain'){
		lightrain_animate();
	}
	if (city.description == 'moderate rain'){
		rain_animate();
	}
	else if (city.description == 'overcast clouds'){
		overcastclouds_animate();
	}
	else if (city.description == 'mist'){
		mist_animate();
	}
	else if (city.description == 'smoke'){
		smoke_animate();
	}
	else if (city.description == 'clear sky'){
		clearsky_animate();
	}
	else if (city.description == 'few clouds' || city.description == 'scattered clouds'){
		fewscatteredclouds_animate();
	}
	else if (city.description == 'broken clouds'){
		brokenclouds_animate();
	}
	else{
		image(person,width/3,height/2,150,150);
	}
  cityheight = (height / zipcodeArr.length) * zip + 20;
  citywidth = width / 2;
  textAlign(CENTER);
  text(zipcodeArr[zip], width / 2, cityheight);
  textAlign(RIGHT);
  text(city.name, citywidth - 100, cityheight);
  textAlign(LEFT);
  text(city.description, citywidth + 100, cityheight);
	text(city.temp+'°F',mouseX,mouseY);
	// image(person,width/3,height/2,150,150);
}

// var prevTime = 0;
function overcastclouds_animate(){
	for (var i=0;i<width;i+=150){
		for (var j=0;j<height/3;j+=80){
			image(cloud,i,j,random(200,250),random(250,300));
		}
	}
	image(platform,width/3+2,height/2+55,150,75);
	image(person,width/3,height/2,150,150);
	
}
function clearsky_animate(){
	image(grass,width/3+2,height/2+55,150,75);
	image(person,width/3,height/2,150,150);
	image(sunglasses,width/3,height/2-40,50,30);
}
function mist_animate(){
	image(mist,width/2,height/2,width,height);
	image(platform,width/3+2,height/2+55,150,75);
	image(person,width/3,height/2,150,150);
	image(cap,width/3,height/2-50,50,50);
}
function smoke_animate(){
	image(mist,width/2,height/2,width,height);
	image(platform,width/3+2,height/2+55,150,75);
	image(person,width/3,height/2,150,150);
	image(mask,width/3,height/2-30,60,20);
}
function fewscatteredclouds_animate(){
	for (var i=0;i<width;i+=170){
		for (var j=0;j<height/3;j+=140){
			image(cloud,i,j,random(200,250),random(250,300));
		}
	}
	image(grass,width/3+2,height/2+55,150,75);
	image(person,width/3,height/2,150,150);
}
function brokenclouds_animate(){
	for (var i=0;i<width;i+=200){
		for (var j=0;j<height/3;j+=215){
			image(cloud,i,j,random(200,250),random(250,300));
		}
	}
	image(grass,width/3+2,height/2+55,150,75);
	image(person,width/3,height/2,150,150);
	image(sunglasses,width/3,height/2-40,50,30);
}
function rain_animate(){
	image(cloud,mouseX,mouseY-55,200,200);
	image(cloud,mouseX+100,mouseY-55,150,150);
	image(cloud,mouseX-100,mouseY-55,150,150);
	image(rain,width/2,height/2,width,height);
	image(umbrella,width/3+10,height/2-50,120,120);
	image(person,width/3,height/2,150,150);
}
function lightrain_animate(){
	image(cloud,mouseX,mouseY-55,200,200);
	image(cloud,mouseX+100,mouseY-55,150,150);
	image(cloud,mouseX-100,mouseY-55,150,150);
	image(lightrain,width/2,height/2,width,height);
	image(umbrella,width/3+10,height/2-50,120,120);
	image(person,width/3,height/2,150,150);
}
function bgChange(r, g, b) {
  if (curr_r < r) {
    // curr_r += 5;
    curr_r++;
  }
  if (curr_g < g) {
    // curr_g += 5;
    curr_g++;
  }
  if (curr_b < b) {
    // curr_b += 5;
    curr_b++;
  }
  if (curr_r > r) {
    // curr_r -= 5;
    curr_r--;
  }
  if (curr_g > g) {
    // curr_g -= 5;
    curr_g--;
  }
  if (curr_b > b) {
    // curr_b -= 5;
    curr_b--;
  }
}

// function bgChangeBack() {
  // curr_r -=5;
  // curr_g -=5;
  // curr_b -=5;
  // curr_r --;
  // curr_g --;
  // curr_b --;
// }

function getData(weatherData) {
  main = weatherData.main;
  name = weatherData.name;
  temp = main.temp;
  temp_min = main.temp_min;
  temp_max = main.temp_max;
  description = weatherData.weather[0].description;
  city = new WeatherDataObj(main, name, temp, temp_min, temp_max, description);
  return city;
}
// USING CLASS
class WeatherDataObj {
  constructor(main, name, temp, temp_min, temp_max, description) {
    this.main = main;
    this.name = name;
    this.temp = temp;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.description = description;
  }
}

// USING ARRAY
// returns an array [name,temp,temp_min,temp_max,description]
// 0 --> name
// 1 --> temp
// 2 --> temp_min
// 3 --> temp_max
// 4 --> description
// function getData(weatherData) {
//   main = weatherData.main;
//   name = weatherData.name;
//   temp = main.temp;
//   temp_min = main.temp_min;
//   temp_max = main.temp_max;
//   description = weatherData.weather[0].description;
//   return [name, temp, temp_min, temp_max, description];
// }
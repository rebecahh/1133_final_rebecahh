var zipcodeArr = [10001, 94102, 98101, 77084, 60629, 90011, 85001, 80202, 30303, 19019];
var weatherArr = [];
var extractedWeatherArr = [];
var curr_r = 0;
var curr_g = 0;
var curr_b = 0;

function preload() {
  for (var i = 0; i < zipcodeArr.length; i++) {
    weatherArr[i] = loadJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=' + zipcodeArr[i] + ',us&APPID=477929b9958afcadcced733e8f81ef79');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(curr_r, curr_g, curr_b);
  fill(255);
  textFont('Courier New');
  textStyle(BOLD);
  textSize(20);
  // for (var i = 0; i < weatherArr.length; i++) {
  //   console.log(getData(weatherArr[i]));
  // }
}

function draw() {
  if (mouseX > width / 3 && mouseX < width / 3 * 2) {
    if (mouseY < (height / zipcodeArr.length)) {
      zip_animate(0);
    } else if (mouseY < (height / zipcodeArr.length) * 2) {
      zip_animate(1);
    } else if (mouseY < (height / zipcodeArr.length) * 3) {
      zip_animate(2);
    } else if (mouseY < (height / zipcodeArr.length) * 4) {
      zip_animate(3);
    } else if (mouseY < (height / zipcodeArr.length) * 5) {
      zip_animate(4);
    } else if (mouseY < (height / zipcodeArr.length) * 6) {
      zip_animate(5);
    } else if (mouseY < (height / zipcodeArr.length) * 7) {
      zip_animate(6);
    } else if (mouseY < (height / zipcodeArr.length) * 8) {
      zip_animate(7);
    } else if (mouseY < (height / zipcodeArr.length) * 9) {
      zip_animate(8);
    } else if (mouseY < (height / zipcodeArr.length) * 10) {
      zip_animate(9);
    } else if (mouseY < (height / zipcodeArr.length) * 11) {
      zip_animate(10);
    } else if (mouseY < (height / zipcodeArr.length) * 12) {
      zip_animate(11);
    }
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
  console.log(city.temp);
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
  text(city.temp+'°F',mouseX,mouseY);

  cityheight = (height / zipcodeArr.length) * zip + 20;
  citywidth = width / 2;
  textAlign(CENTER);
  text(zipcodeArr[zip], width / 2, cityheight);
  textAlign(RIGHT);
  text(city.name, citywidth - 100, cityheight);
  textAlign(LEFT);
  text(city.description, citywidth + 100, cityheight);
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

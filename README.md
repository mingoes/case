# Planes, trains and automobiles

## Explanation Mingoes
### Key challenges:
- Data manipulation / sorting
    - The example data is in "another" format then wished.
- Testability
    - Component should be testable with unit tests

### Used techniques: 
  - VueJS
      - It has databinding
      - It is reactive
      - It's simple
      - It's fast
      - I like it
  - Browserify / Watchify
      - Possibility to use ES2015 with Babel (but didn't use it for this example)
      - Stick to NPM so no task runners.
  - Bootstrap (SASS version)
      - Will do the job of visual attractiveness.
      - It's a standard implementation so intuitve for other devs.

### Installation:

Requirements:

Make sure that sass, browserify and watchify are installed
```
npm install -g sass browserify watchify
```
Also, make sure python 2.0 is installed (default on OSX)

To start the watch tasks:

```
npm run dev
```
Site will be served at localhost:8000/serivce

to just deploy:

```
npm run deploy
```

## The Traffic Meister application assignment

 - Create a form which behaves as follows
    - It will display the following drop down menus
        - A list of vehicle types, on load there will be no vehicle selected.
        - A list of vehicle brands, on load and while there is no vehicle selected there will be no vehicle brand selected.
        - A list of vehicle brand colors, on load and while there is no vehicle brand selected there will be no vehicle brand color selected.
    - At the bottom of the form all selections will be shown.
  - You are free to use any tool and/or framework you like, as long as it runs inside a browser and you can explain why that solution will be the most favorable.
  - Your implementation should be
      - tested
      - visually attractive
      - deployable


## Data library

The data are provided by a small service you can find in the `service` folder.

This service can be accessed by a the global variable `trafficMeister` and provide a single method `fetchData`.

```
trafficMeister.fetchData(callBack);
```

The callback is called with the full data list as first parameter.

```
trafficMeister.fetchData(function(err, data) {
  console.log(data);
});
```

The data library can be used as a node module.

```
var trafficMeister = require('traffic-meister');
trafficMeister.fetchData(function(err, data) {
  console.log(data);
});
```

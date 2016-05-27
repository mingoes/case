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

This will fill up the dist folder with a ready-to-deploy package.

### Notes
I didn't have so much time for this case but I will explain some of my choices in a bit more detail. I used Vue mainly because I was reading a lot about it and quite like it. The app stil looks simple, Vue is easy to learn for other developers and is actively maintained.

The rest of the stack is quite standard, Browserify, SASS, Uglify. This to make sure it meets the requirement of being deployable.  

I used karma for testing because it's a flexible test runner that has support for jasmine and browserify. With this combination it's very easy to test Vue components.

I didn't use a task runner because it will require more plugins and in general I noticed that a task runners can start to work against you when you want to have something simple done. Right now I just stick with npm run commands and a task runner is always easy to add later.

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

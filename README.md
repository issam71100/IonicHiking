# IonicHiking Whith Ionic 4 Apps

This repo is an Ionic v4 Web Application


- For this Ionic example app we are going to build a simple ionic 4 app that allows users to make hikings.
- This Application work in IOS, Android and browser.
- The user can add his own hike with giving the latitude and longitude of the start and the end of the hife.
- I use an API to make the path by walking automatically and get the time of the hike.
- The user can see his position on the map by clicking in the custom button on the leaflet map
- There's too an other button to see the full path
- The user can use the Start button to measure his time

## Installation of Ionic 

### Install Ionic
`$ nmp install -g ionic`

### Install Cordova
`$ nmp install -g cordova

## Installation of this app

### Install node dependencies
`$ yarn install`


## Running the app

### To run the app on your browser
`$ ionic serve`

### To run the app on iOS
Follow the steps from https://ionicframework.com/docs/cli/commands/cordova-build

`$ ionic cordova platform add ios`

`$ ionic cordova prepare ios`

### To run the app on Android
Follow the steps from https://ionicframework.com/docs/cli/commands/cordova-build

`$ ionic cordova platform add android`

`$ ionic cordova prepare android`

`$ ionic cordova run android`


### To run the app on DevAPP
Follow the steps from https://ionicframework.com/docs/appflow/devapp

`$ ionic serve --devapp`

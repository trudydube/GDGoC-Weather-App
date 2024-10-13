# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Installation and Setup
You must have node.js installed in your PC to run an Angular application. If you do not have node.js, you can download it at:
https://nodejs.org/en/download/package-manager

If you do not have angular already installed in your system, run the following command:
- npm install -g @angular/cli

Navigate to the weather-app folder and run the following commands in your terminal to install all dependencies:
- npm install -D tailwindcss postcss autoprefixer
- npm i http-client


Ensure you have signed up with https://www.weatherapi.com/ and obtain your personal API key from there in order to run the API successfully

Copy the API key from the website and paste it into the return statement in the getPosts method where it says {PasteYourKeyHere} in the api.service.ts file

## Running the app
- Run ng serve in your terminal and paste the locallhost URL into your browser to run the application


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

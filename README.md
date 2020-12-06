# react-grocery-list
Simple React grocery list app. Features include:
* Filtered user input for adding items (allows alphanumeric, ampersands, single quotes, hyphens, and spaces)
* Done state for marking items off the list
* Quantity manipulation
* Remove button with an attached confirmation modal
* Data stored in/saved to the browser's LocalStorage
* JSON data download (for development purposes - in case a dev would want to take the data and use it elsewhere)

## Use create-react-app
Make a directory for your project. CD into it using command line. Then install React using npm or yarn.

``` npm init react-app my-app ```
OR
``` yarn create react-app my-app ```

## Add the files from this repository
Replace everything in the ``src`` directory inside ``my-app`` with the files in the ``src`` directory in this repository.

## Install the dependencies
This app has two dependencies needed to function: react-modal and uuid.

``` npm install react-modal ```
OR
``` yarn add react-modal ```

``` npm install uuid ```
OR
``` yarn add uuid ```

## Start up the dev server
It will be at localhost:3000. The page will automatically reload if you make changes to the code and you will see the build errors and lint warnings in the console.

``` npm start ```
OR
``` yarn start ```

## :sparkles: Learn more about create-react-app & where to go from here
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

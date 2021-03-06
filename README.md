# Bitcoin Testnet3
A web application using blockcypher's api which allows the user to fund an account with "testnet bitcoins" and transfer coins to a specific address.

## App Features
- [x] Fund a specific address with testnet bitcoins
- [x] Send testnet bitcoins to an address
- [x] Transaction History

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and/or testing purposes.

### Prerequisites
You will need to install Node.js. See below for the download link.

### Installing
1. Run ```$ git clone https://github.com/aemc/bitcoin-testnet3.git``` on the cli, or download the source code to a local directory of your choice.
2. Run ```$ npm install``` within the root folder to install all the necessary libraries.
3. Copy & paste the files ```creds.json``` and ```keys.json``` provided via email into the project root folder.


### Running
1. Run ```$ npm start``` on the cli within the root of the project folder.
2. Open your browser and navigate to ```localhost:3000``` to see the app running.

Note: Due to rate limits on the API (for free tier), the endpoints may not work temporarily. Give it a few minutes before using the application again.

### Built With
* [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express](https://expressjs.com/) - Backend framework
* [Bootstrap 4](https://getbootstrap.com/) - Frontend framework

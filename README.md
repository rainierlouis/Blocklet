# BLOCKLET

An all-in-one Cryptocurrency wallet, built for IOS & Android mobile.

## Features

* Exchange Information for the provided currencies
* Market Graph Information for popular currencies
* Back end API of historical token prices (40+)
* Currency calculator
* Latest Cryptocurrency News
* User Token Portfolio

## Screenshots

![Awww](https://ipfs.io/ipfs/QmZcJaboZLPyUeYH9y54tC5i2suqCSpp1s99iSn35gCDtG)
![Awww](https://i.imgur.com/Obbs6JJ.png "Yeah")
![Awww](https://i.imgur.com/Y29OCiX.png "Yeah")
![Awww](https://i.imgur.com/sFGyOS6.png "Yeah")

## Usage

* `git clone https://github.com/rainierlouis/Blocklet.git` or download the zip file.

### Frontend:

* `cd /client`.

* `npm install` to begin dependencies installation.

* `npm start` to boot up the development server.

* Scan the barcode with the Expo app on your phone or follow the terminal instructions to load up the emulator on your machine.

### Backend:

* cd /server

* `npm install` to begin dependencies installation.

* `nodemon App.js` to boot up the server & initialise API to begin fetching data.

## Technology Stack

**Front:**

* React Native / Elements / Animatable
* React Navigation
* Redux
* Expo

**Back:**

* Node.js
* Koa.js
* MongoDB / Monk
* Google & Facebook API for Logins

**Misc:**

* Block.io API
* Homemade API (historical prices)
* News API

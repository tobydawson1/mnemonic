<h1 align="center"> mnemonic </h1>
  
<h2 align="center"> ...can you remember? 🃏</h2>

<div align="center">

[the idea](#idea) | [play](#play) | [features](#features) | [looks](#looks) | [tech](#tech) | [goals](#goals) | [installation](#installation) | [testing](#testing) | [people](#collaborators) 

</div>

<hr>

## <a name="idea">the idea</a> 

##### [Makers Academy](http://www.makers.tech) - team engineering project

A single-page web app game, based on the classic memory / matching cards game. <br>Keep your brain in shape!

<img src="./public/card_set/back.jpg" width="100"/>

## <a name="play">game on!</a> 🃏 [play here](http://mnemonic-game.herokuapp.com/) 🃏

## <a name="features">features</a>

- [x] Every game round will deal 14 cards. 
- [x] You have 2 seconds to memorize the pairs, then the cards are flipped facing down. 
- [x] You can click on the cards to turn them up, but you can only flip two cards at a time, unless they match. 
- [x] If the cards match, they will remain facing up.
- [x] You have 7 attempts to match all the cards. 
- [x] If you don't, you lose this round, and the game will reset, by shuffling the cards and giving you another shot.
- [x] The round is won when you match all 14 cards.
- [x] As you progress through the rounds, the revealing time shortens: after 4 wins you will only get 1 second of reveal, and after 8 wins you get none!

## <a name="looks">looks</a>

<img src="./public/one.png" width="400"/>  <img src="./public/two.png" width="400"/>

## <a name="tech">technologies used</a>

* built with: **JavaScript & React.js**

* tested with: **Jest & Enzyme**

* continuous deployment: **Travis CI, coveralls, Heroku**

* remote team collaboration: **Slack, zoom, miro white board**

##### current status:

[![Heroku App Status](http://heroku-shields.herokuapp.com/mnemonic-game)](http://mnemonic-game.herokuapp.com/)
[![Build Status](https://travis-ci.org/tobydawson1/mnemonic.svg?branch=master)](https://travis-ci.org/tobydawson1/mnemonic)
[![Maintainability](https://api.codeclimate.com/v1/badges/bd0dadbc77b7ede831ea/maintainability)](https://codeclimate.com/github/tobydawson1/mnemonic/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/tobydawson1/mnemonic/badge.svg?branch=master)](https://coveralls.io/github/tobydawson1/mnemonic?branch=master)

##  <a name="goals">goals & challenges</a>

- [x] build a front-end web application for a classic memory game, so we can have fun playing.

- [x] use and understand React design patterns and its testing frameworks Jest and Enzyme.

- [x] deploy the front-end app to Heroku, with continuous deployment as we are building the project.

- [x] use remote collaboration tools to work in an Agile way, to share our daily learnings, and adapt to changes.

## <a name="installation">installation</a>

##### to install this project to your local machine
`git clone git@github.com:tobydawson1/mnemonic.git`<br>
`cd mnemonic`<br>
`npm install` <br>

##### to play
run `npm start` and your default browser will pop up a window with the game!

## <a name="testing">testing</a>
##### status: all current tests are passing 

- to run the tests run `npm test`
- to see the testing coverage `npm test  -- --coverage --watchAll`

##### a note on testing

Unfortunately testing this project proved to be one of the team's challenges. As all team members were new to using the React library, we chose to focus more on writing features for the game, and less on learning the test frameworks. As a result, at the end of our two week sprint, we have about 50% coverage.

## <a name="collaborators">collaborators</a>

  [Barri](https://github.com/BarriF13) & [Jack](https://github.com/Ovy95) & [Myrtle](https://github.com/Mrtly) & [Toby](https://github.com/tobydawson1)


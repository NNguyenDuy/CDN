/**
  * Name: Mrakus
  * Version: 1.0
  * Author: Themesflat
  * Author URI: http://www.themesflat.com
*/
/**
  *	Reset Browsers
  *	Preload
  *	animate
  * header
  * top-search
  * tf-button
  * animation slider
  * topbar
  * breadcrumbs
  * page-title
  * themesflat-pagination
  * about-section
  * title-section
  * section-style
  * blog-post
  * sidebar
  * swiper css
  * menu style
  * box style section
  * footer
  * section style all page
  * widget
  * Reponsive
  * Extras class
  * themesflat animation
*/
@import url("https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Domine:wght@400;500;700&family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");

/* Reset Browsers
-------------------------------------------------------------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "agency";
  src: url("../font/AgencyFBBold.ttf");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

body {
  font-family: "Kumbh Sans", sans-serif;
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  color: #1c2035;
}

p {
  margin: 0;
}

img {
  max-width: 100%;
  height: auto;
  transform: scale(1);
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Titillium Web", sans-serif;
  font-weight: bold;
}

h1,
.h1 {
  font-size: 65px;
  line-height: 1.75;
}

h2,
.h2 {
  font-size: 55px;
  line-height: 1.09;
}

h3,
.h3 {
  font-size: 30px;
  line-height: 2;
}

h4,
.h4 {
  font-size: 24px;
  line-height: 1.5;
}

h5,
.h5 {
  font-size: 22px;
  line-height: 1.45;
}

h6,
.h6 {
  font-size: 20px;
  line-height: 39px;
}

.container {
  max-width: 1200px;
}

.tf-section {
  position: relative;
  padding: 120px 0;
}

.tf-section.pd-82 {
  padding: 100px 0;
}

.tf-section.pb0 {
  padding-bottom: 0;
}

ul,
li {
  list-style-type: none;
  margin-bottom: 0;
  padding-left: 0;
}

a {
  text-decoration: none;
  color: unset;
  transition: all 0.3s;
  cursor: pointer;
  display: inline-block;
}

a:hover {
  color: #4761ff;
  transition: all 0.3s;
}

.center {
  text-align: center;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
}

.container-fluid,
.container {
  padding-left: 15px;
  padding-right: 15px;
}

.wrap-fx {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

button,
input {
  border: none;
  outline: none;
}

#wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.relative {
  position: relative;
}

.text-capital {
  text-transform: capitalize;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}

/* PreLoad
-------------------------------------------------------------- */
.preloading {
  overflow: hidden;
}

.preload-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99999999999;
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
}

.preload-logo {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  z-index: 100;
  border: 5px solid whitesmoke;
  border-top: 5px solid #4761ff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.table-responsive {
  overflow-x: auto;
  width: 100%;
}

/* Scroll Top
-------------------------------------------------------------- */
#scroll-top {
  position: fixed;
  display: block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 4px;
  text-align: center;
  z-index: 999;
  right: 14px;
  bottom: 23px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  overflow: hidden;
}

#scroll-top.show {
  right: 15px;
  opacity: 1;
  visibility: visible;
}

#scroll-top:before,
#scroll-top:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#scroll-top:before {
  z-index: -1;
  background: #4761ff;
}

#scroll-top:after {
  content: "\f077";
  font-family: "Font Awesome 5 Pro";
  font-size: 18px;
  color: #ffffff;
  font-weight: 600;
}

#scroll-top:hover {
  transform: translateY(-7%);
}

.flat-alert.msg-success {
  color: #4761ff;
}

/* animate
-------------------------------------------------------------- */
/*!
 * animate.css -http://daneden.me/animate
 * Version - 3.5.2
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2017 Daniel Eden
 */
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.animated.infinite {
  animation-iteration-count: infinite;
}

.animated.hinge {
  animation-duration: 2s;
}

.animated.flipOutX,
.animated.flipOutY,
.animated.bounceIn,
.animated.bounceOut {
  animation-duration: 0.75s;
}

@keyframes bounce {

  from,
  20%,
  53%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  animation-name: bounce;
  transform-origin: center bottom;
}

@keyframes flash {

  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

.flash {
  animation-name: flash;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  animation-name: pulse;
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
  animation-name: rubberBand;
}

@keyframes shake {

  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  animation-name: shake;
}

@keyframes headShake {
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
}

.headShake {
  animation-timing-function: ease-in-out;
  animation-name: headShake;
}

@keyframes swing {
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.swing {
  transform-origin: top center;
  animation-name: swing;
}

@keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  animation-name: tada;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@keyframes wobble {
  from {
    transform: none;
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: none;
  }
}

.wobble {
  animation-name: wobble;
}

@keyframes jello {

  from,
  11.1%,
  to {
    transform: none;
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

.jello {
  animation-name: jello;
  transform-origin: center;
}

@keyframes bounceIn {

  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
  animation-name: bounceIn;
}

@keyframes bounceInDown {

  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: none;
  }
}

.bounceInDown {
  animation-name: bounceInDown;
}

@keyframes bounceInLeft {

  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }

  75% {
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    transform: translate3d(5px, 0, 0);
  }

  to {
    transform: none;
  }
}

.bounceInLeft {
  animation-name: bounceInLeft;
}

@keyframes bounceInRight {

  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    transform: translate3d(10px, 0, 0);
  }

  90% {
    transform: translate3d(-5px, 0, 0);
  }

  to {
    transform: none;
  }
}

.bounceInRight {
  animation-name: bounceInRight;
}

@keyframes bounceInUp {

  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.bounceInUp {
  animation-name: bounceInUp;
}

@keyframes bounceOut {
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

.bounceOut {
  animation-name: bounceOut;
}

@keyframes bounceOutDown {
  20% {
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.bounceOutDown {
  animation-name: bounceOutDown;
}

@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
}

.bounceOutLeft {
  animation-name: bounceOutLeft;
}

@keyframes bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
}

.bounceOutRight {
  animation-name: bounceOutRight;
}

@keyframes bounceOutUp {
  20% {
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

.bounceOutUp {
  animation-name: bounceOutUp;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  animation-name: fadeIn;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInDown {
  animation-name: fadeInDown;
}

@keyframes fadeInDownBig {
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInDownBig {
  animation-name: fadeInDownBig;
}

@keyframes fadeInLeftSmall {
  from {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInLeftSmall {
  animation-name: fadeInLeftSmall;
}

.fadeInLeft {
  animation-name: fadeInLeft;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInLeft {
  animation-name: fadeInLeft;
}

@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInLeftBig {
  animation-name: fadeInLeftBig;
}

@keyframes fadeInRightSmall {
  from {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInRightSmall {
  animation-name: fadeInRightSmall;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInRight {
  animation-name: fadeInRight;
}

@keyframes fadeInRightBig {
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInRightBig {
  animation-name: fadeInRightBig;
}

@keyframes fadeInUpSmall {
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInUpSmall {
  animation-name: fadeInUpSmall;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeInUpBig {
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInUpBig {
  animation-name: fadeInUpBig;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  animation-name: fadeOut;
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}

.fadeOutDown {
  animation-name: fadeOutDown;
}

@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.fadeOutDownBig {
  animation-name: fadeOutDownBig;
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}

.fadeOutLeft {
  animation-name: fadeOutLeft;
}

@keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
}

.fadeOutLeftBig {
  animation-name: fadeOutLeftBig;
}

@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}

.fadeOutRight {
  animation-name: fadeOutRight;
}

@keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
}

.fadeOutRightBig {
  animation-name: fadeOutRightBig;
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}

.fadeOutUp {
  animation-name: fadeOutUp;
}

@keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

.fadeOutUpBig {
  animation-name: fadeOutUpBig;
}

@keyframes flip {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px);
    animation-timing-function: ease-in;
  }
}

.animated.flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  animation-name: flip;
}

@keyframes flipInX {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-name: flipInX;
}

@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

.flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-name: flipInY;
}

@keyframes flipOutX {
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

@keyframes flipOutY {
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

.flipOutY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-name: flipOutY;
}

@keyframes lightSpeedIn {
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    transform: none;
    opacity: 1;
  }
}

.lightSpeedIn {
  animation-name: lightSpeedIn;
  animation-timing-function: ease-out;
}

@keyframes lightSpeedOut {
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

.lightSpeedOut {
  animation-name: lightSpeedOut;
  animation-timing-function: ease-in;
}

@keyframes rotateIn {
  from {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
}

.rotateIn {
  animation-name: rotateIn;
}

@keyframes rotateInDownLeft {
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownLeft {
  animation-name: rotateInDownLeft;
}

@keyframes rotateInDownRight {
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownRight {
  animation-name: rotateInDownRight;
}

@keyframes rotateInUpLeft {
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpLeft {
  animation-name: rotateInUpLeft;
}

@keyframes rotateInUpRight {
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpRight {
  animation-name: rotateInUpRight;
}

@keyframes rotateOut {
  from {
    transform-origin: center;
    opacity: 1;
  }

  to {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

.rotateOut {
  animation-name: rotateOut;
}

@keyframes rotateOutDownLeft {
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

.rotateOutDownLeft {
  animation-name: rotateOutDownLeft;
}

@keyframes rotateOutDownRight {
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutDownRight {
  animation-name: rotateOutDownRight;
}

@keyframes rotateOutUpLeft {
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutUpLeft {
  animation-name: rotateOutUpLeft;
}

@keyframes rotateOutUpRight {
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

.rotateOutUpRight {
  animation-name: rotateOutUpRight;
}

@keyframes hinge {
  0% {
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

.hinge {
  animation-name: hinge;
}

@keyframes jackInTheBox {
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.jackInTheBox {
  animation-name: jackInTheBox;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@keyframes rollIn {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.rollIn {
  animation-name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

.rollOut {
  animation-name: rollOut;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
}

@keyframes zoomInDown {
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomInDown {
  animation-name: zoomInDown;
}

@keyframes zoomInLeft {
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomInLeft {
  animation-name: zoomInLeft;
}

@keyframes zoomInRight {
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomInRight {
  animation-name: zoomInRight;
}

@keyframes zoomInUp {
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomInUp {
  animation-name: zoomInUp;
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

.zoomOut {
  animation-name: zoomOut;
}

@keyframes zoomOutDown {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomOutDown {
  animation-name: zoomOutDown;
}

@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform-origin: left center;
  }
}

.zoomOutLeft {
  animation-name: zoomOutLeft;
}

@keyframes zoomOutRight {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
    transform-origin: right center;
  }
}

.zoomOutRight {
  animation-name: zoomOutRight;
}

@keyframes zoomOutUp {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomOutUp {
  animation-name: zoomOutUp;
}

@keyframes slideInDown {
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInDown {
  animation-name: slideInDown;
}

@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  animation-name: slideInLeft;
}

@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  animation-name: slideInRight;
}

@keyframes slideInUp {
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInUp {
  animation-name: slideInUp;
}

@keyframes slideOutDown {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
}

.slideOutDown {
  animation-name: slideOutDown;
}

@keyframes slideOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
}

.slideOutLeft {
  animation-name: slideOutLeft;
}

@keyframes slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutRight {
  animation-name: slideOutRight;
}

@keyframes slideOutUp {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
}

.slideOutUp {
  animation-name: slideOutUp;
}

@keyframes move2 {
  0% {
    -webkit-transform: rotate(1deg) translate(2px, 2px);
    transform: rotate(1deg) translate(2px, 2px);
  }

  50% {
    -webkit-transform: rotate(-1deg) translate(-2px, -2px);
    transform: rotate(-1deg) translate(-2px, -2px);
  }

  100% {
    -webkit-transform: rotate(1deg) translate(2px, 2px);
    transform: rotate(1deg) translate(2px, 2px);
  }
}

@keyframes move3 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }

  50% {
    -webkit-transform: translate(15px);
    transform: translate(15px);
  }

  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}

@keyframes move4 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }

  50% {
    -webkit-transform: translate(-20px);
    transform: translate(-20px);
  }

  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}

@keyframes move5 {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes myanimation {
  0% {
    width: 0;
  }
}

@keyframes myanimation {
  0% {
    width: 0;
  }
}

@keyframes ripple {
  70% {
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

@keyframes rotated {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes pulse_three {
  0% {
    box-shadow: 0 0 0 0 #4761ff, 0 0 0 0 #4761ff, 0 0 0 0 #4761ff;
  }

  25% {
    box-shadow: 0 0 0 10px rgba(71, 97, 255, 0.3), 0 0 0 0 rgba(71, 97, 255, 0.8), 0 0 0 0 rgba(71, 97, 255, 0.8);
  }

  50% {
    box-shadow: 0 0 0 20px rgba(71, 97, 255, 0), 0 0 0 10px rgba(71, 97, 255, 0.3), 0 0 0 0 rgba(71, 97, 255, 0.5);
  }

  75% {
    box-shadow: 0 0 0 20px rgba(71, 97, 255, 0), 0 0 0 20px rgba(71, 97, 255, 0), 0 0 0 10px rgba(71, 97, 255, 0.3);
  }

  100% {
    box-shadow: 0 0 0 20px rgba(71, 97, 255, 0), 0 0 0 20px rgba(71, 97, 255, 0), 0 0 0 20px rgba(71, 97, 255, 0);
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* header
-------------------------------------------------------------- */
.header {
  position: relative;
  width: 100%;
  z-index: 10;
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.header .container {
  max-width: 1750px;
}

.header.is-fixed {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  z-index: 9999;
  opacity: 0;
  position: fixed;
  top: -100px;
  left: 0;
  width: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  visibility: hidden;
}

.header.is-fixed.is-small {
  background-color: #fff;
  top: 0;
  opacity: 1;
  visibility: visible;
  height: 90px;
}

.header #header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  position: relative;
}

.header #header-inner .main-nav {
  position: absolute;
  left: 16%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  margin-top: -2px;
}

.header #header-inner #main-nav .menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.header #header-inner #main-nav .menu li a {
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  font-family: "Kumbh Sans", sans-serif;
  color: #1c2035;
  position: relative;
  display: block;
  text-transform: uppercase;
}

.header #header-inner #main-nav .menu li a::after {
  color: #1c2035;
}

.header #header-inner #main-nav .menu li a:hover {
  color: #4761ff;
}

.header #header-inner #main-nav .menu li a:hover::after {
  color: #4761ff;
}

.header #header-inner #main-nav .menu>li {
  position: relative;
  margin-right: 30px;
}

.header #header-inner #main-nav .menu>li>a {
  display: block;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.header #header-inner #main-nav .menu>li:hover .sub-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(5px);
}

.header #header-inner #main-nav .menu>li:last-child {
  margin-right: 0;
}

.header #header-inner #main-nav .menu li.menu-item-has-children>a::after {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  position: absolute;
  font-family: "Font Awesome 5 Pro";
  content: "\f078";
  right: 0;
  top: 50%;
  font-weight: 400;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 15px;
}

.header #header-inner #main-nav .menu li.menu-item.current-menu-item>a {
  color: #4761ff;
}

.header #header-inner #main-nav .menu li.menu-item.current-menu-item>a::after {
  color: #4761ff;
}

.header #header-inner #main-nav.st2 .menu>li {
  margin-right: 45.5px;
}

.header #header-inner #main-nav.st2 .menu>li>a {
  padding-right: 22px;
  color: #fff;
}

.header #header-inner #main-nav.st2 .menu>li>a:hover::after {
  color: #4761ff;
}

.header #header-inner #main-nav.st2 .menu li.menu-item-has-children>a::after {
  color: #fff;
}

.header #header-inner #main-nav.st2 .menu li.menu-item-has-children>a:hover::after {
  color: #4761ff;
}

.header #header-inner #main-nav.st2 .menu li.menu-item.current-menu-item>a {
  color: #4761ff;
}

.header #header-inner #main-nav.st2 .menu li.menu-item.current-menu-item>a::after {
  color: #4761ff;
}

.header #header-inner #main-nav.st2 .menu li.menu-item.current-menu-item>a:hover::after {
  color: #4761ff;
}

.header #header-inner .header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  padding-right: 22px;
}

.header #header-inner .header-right .contact-phone {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.header #header-inner .header-right .contact-phone li.icon {
  width: 54px;
  height: 62px;
  background: #212330;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  margin-right: 20px;
}

.header #header-inner .header-right .contact-phone li.icon span {
  color: #fff;
  font-size: 30px;
}

.header #header-inner .header-right .contact-phone li p {
  color: #1c2035;
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
}

.header #header-inner .header-right .contact-phone li p.style {
  font-size: 14px;
  line-height: 26px;
  color: #4761ff;
  font-weight: 400;
  margin-bottom: -4px;
  margin-left: 4px;
}

.header #header-inner .header-right .contact-phone li:last-child {
  padding-top: 5px;
}

.header #header-inner .header-right .flat-show-search {
  margin-left: 26px;
  padding-left: 27px;
}

.header.style2 {
  position: absolute;
  background: transparent;
  box-shadow: none;
  position: absolute;
}

.header.style2.is-fixed {
  position: fixed;
}

.header.style2.is-fixed.is-small {
  background: rgba(12, 14, 22, 0.8);
}

.header.style2 .flat-show-search .show-search a {
  color: #fff;
}

.header.style2 #header-inner #main-nav .menu>li>a {
  color: #fff;
}

.header.style2 #header-inner #main-nav .menu>li>a::after {
  color: #fff;
}

.header.style2 #header-inner .header-right .contact-phone li p {
  color: #fff;
}

.header.style2 #header-inner .header-right .contact-phone li p.style {
  color: #4761ff;
}

.header.style2 #header-inner .header-right .contact-phone li.icon {
  background: #4761ff;
}

/* tf-button
-------------------------------------------------------------- */
.tf-button {
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  position: relative;
  padding: 0 25px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  background: #4761ff;
  font-weight: 500;
  border-radius: 0;
  overflow: hidden;
}

.tf-button span {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 26px;
  z-index: 1;
}

.tf-button::before {
  top: -100%;
}

.tf-button::after {
  top: 100%;
}

.tf-button::after,
.tf-button::before {
  z-index: 0;
  box-sizing: border-box;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  background: #4761ff;
  height: 100%;
  width: 100%;
  opacity: 0;
}

.tf-button:hover::before,
.tf-button:hover::after {
  opacity: 1;
  background: #fff;
}

.tf-button:hover::after {
  top: 50%;
}

.tf-button:hover::before {
  top: -50%;
}

.tf-button:hover span {
  color: #4761ff;
}

.tf-button.style2:hover::before,
.tf-button.style2:hover::after {
  background: #1c2035;
}

.tf-button.style2:hover span {
  color: #fff;
}

/* animation slider */
.box-slider .content-box .sub-title,
.box-slider .content-box .title,
.box-slider .content-box .btn-slider {
  transform: translateY(100px);
  opacity: 0;
}

.swiper-slide-active .box-slider .content-box .sub-title,
.swiper-slide-active .box-slider .content-box .title,
.swiper-slide-active .box-slider .content-box .btn-slider {
  opacity: 1;
  visibility: visible;
  -webkit-transition: transform 800ms ease, opacity 800ms ease;
  -moz-transition: transform 800ms ease, opacity 800ms ease;
  -ms-transition: transform 800ms ease, opacity 800ms ease;
  -o-transition: transform 800ms ease, opacity 800ms ease;
  transition: transform 800ms ease, opacity 800ms ease;
  transition-delay: 1000ms;
}

.swiper-slide-active .box-slider .content-box .sub-title,
.swiper-slide-active .box-slider .content-box .title,
.swiper-slide-active .box-slider .content-box .btn-slider {
  transform: translateY(0px) !important;
}

.swiper-slide-active .box-slider .content-box .sub-title {
  transition-delay: 400ms;
}

.swiper-slide-active .box-slider .content-box .title {
  transition-delay: 500ms;
}

.swiper-slide-active .box-slider .content-box .btn-slider {
  transition-delay: 600ms;
}

/* topbar
-------------------------------------------------------------- */
#topbar {
  overflow: hidden;
  height: 65px;
  position: relative;
  background: #212330;
}

#topbar .container {
  max-width: 1750px;
}

#topbar .topbar-inner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

#topbar .topbar-left {
  margin-top: -4px;
  width: 60%;
}

#topbar .topbar-left ul {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

#topbar .topbar-left ul li span {
  font-size: 15px;
  line-height: 26px;
  font-family: "DM Sans", sans-serif;
  color: #fff;
}

#topbar .topbar-left ul li.mail span {
  position: relative;
  padding-left: 38px;
}

#topbar .topbar-left ul li.mail span::before {
  position: absolute;
  left: 2px;
  top: 3px;
  content: "\e908";
  font-family: "mrakus";
  color: #fff;
  font-size: 26px;
}

#topbar .topbar-left ul li:first-child {
  margin-right: 32px;
}

#topbar .topbar-left ul li:nth-child(2) span {
  font-family: "Kumbh Sans", sans-serif;
}

#topbar .topbar-right {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

#topbar .topbar-right .wrap-social {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

#topbar .topbar-right .wrap-social p {
  font-size: 15px;
  line-height: 26px;
  color: #fff;
  margin-right: -5px;
}

#topbar .topbar-right .tf-button {
  margin-left: 30px;
}

#topbar .topbar-right .tf-button:hover::after,
#topbar .topbar-right .tf-button:hover::before {
  background: #fff;
}

#topbar .topbar-right .tf-button:hover span {
  color: #4761ff;
}

#topbar .social li {
  margin-left: 27px;
  margin-right: 0;
}

#topbar .social li a {
  width: auto;
  height: auto;
  background: none;
}

/* breadcrumbs
-------------------------------------------------------------- */
.breadcrumbs {
  text-align: center;
}

.breadcrumbs .heading {
  text-transform: capitalize;
  color: #fff;
  margin-bottom: -17px;
}

.breadcrumbs ul {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.breadcrumbs ul li {
  position: relative;
}

.breadcrumbs ul li a,
.breadcrumbs ul li span {
  text-transform: uppercase;
  font-size: 14px;
  line-height: 34px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1.2px;
}

.breadcrumbs ul li:last-child {
  padding-left: 12px;
  margin-left: 6px;
}

.breadcrumbs ul li:last-child::before {
  position: absolute;
  left: 0;
  top: 1px;
  content: "/";
  color: #fff;
  font-size: 15px;
}

.breadcrumbs ul li a {
  color: #fff;
}

.breadcrumbs ul li a:hover {
  color: #4761ff;
}

/* page-title
-------------------------------------------------------------- */
.page-title {
  position: relative;
  padding: 108px 0 130px;
  background: rgba(12, 14, 22, 0.52);
}

.page-title .overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../img/bg-page-title2.jpg") center center no-repeat;
  background-size: cover;
  z-index: -1;
}

/* themesflat-pagination
-------------------------------------------------------------- */
.themesflat-pagination ul {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.themesflat-pagination ul li {
  margin-right: 10px;
}

.themesflat-pagination ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  width: 38px;
  height: 51px;
  background-color: #efefef;
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  color: #464958;
}

.themesflat-pagination ul li a:hover,
.themesflat-pagination ul li a.active {
  background-color: #4761ff;
  color: #fff;
}

/* about-section
-------------------------------------------------------------- */
.image-about {
  position: relative;
}

.image-about .image {
  padding-right: 15%;
}

.image-about .image img {
  animation: move5 5s ease-in-out infinite;
}

.image-about .image-right {
  margin-top: -21%;
  text-align: right;
  padding-left: 25%;
  padding-right: 23px;
  animation: move3 4s ease-in-out infinite;
}

.content-box .wrap-fx {
  margin-bottom: 32px;
}

.content-box .wrap-fx .icon-box {
  width: 50%;
  padding-right: 30px;
}

.content-box .desc {
  color: #1c2035;
  margin-bottom: 40px;
}

.content-box .desc.mb0 {
  margin-bottom: 0;
}

.content-box .divider {
  background-color: #e9e9e9;
  height: 1px;
  width: 90%;
}

.content-box .inner-box {
  margin-top: 34px;
  margin-bottom: 36px;
}

.content-box .inner-box .txt-style {
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 32px;
  font-weight: 500;
  color: #4761ff;
}

.content-box .inner-box .desc {
  margin-bottom: 0;
}

.content-box .btn-about {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.content-box .btn-about .tf-button {
  height: 60px;
  padding: 0 58px;
}

.content-box .btn-about .tf-button span {
  font-size: 15px;
}

/* title-section
-------------------------------------------------------------- */
.title-section {
  margin-bottom: 40px;
}

.title-section .title {
  color: #1c2035;
}

.title-section .title.white {
  color: #fff;
}

.title-section .subtitle {
  margin-bottom: 5px;
  font-size: 15px;
  line-height: 36px;
  font-weight: 500;
  color: #4761ff;
  text-transform: uppercase;
}

.title-section.style2 {
  text-align: center;
}

/* section-style
-------------------------------------------------------------- */
.about-fx {
  margin-left: -30px;
}

.about-fx .icon-box {
  width: calc(25% - 30px);
  margin-left: 30px;
}

.tfanimated.wrap-counter::before,
.tfanimated.wrap-counter::after {
  transform: translateX(0);
}

.wrap-counter {
  padding: 52px 7px 45px;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  background-color: #2e2e2e;
  position: relative;
  overflow: hidden;
  border-radius: 30px 0 0 0;
}

.wrap-counter::before {
  -webkit-transition: all 1.5s ease;
  -moz-transition: all 1.5s ease;
  -ms-transition: all 1.5s ease;
  -o-transition: all 1.5s ease;
  transition: all 1.5s ease;
  position: absolute;
  right: -1px;
  bottom: 0;
  width: 28px;
  height: 244px;
  border-radius: 30px 0 0 0;
  background-color: #4761ff;
  content: "";
  transform: translateX(100%);
}

.wrap-counter::after {
  -webkit-transition: all 1.5s ease;
  -moz-transition: all 1.5s ease;
  -ms-transition: all 1.5s ease;
  -o-transition: all 1.5s ease;
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  background-color: #4761ff;
  content: "";
  width: 53px;
  height: 57px;
}

.wrap-counter .box-couter {
  text-align: center;
  width: 25%;
}

.wrap-counter .box-couter .icon {
  margin-bottom: 15px;
  height: 65px;
}

.wrap-counter .box-couter .icon span {
  color: #fff;
  font-size: 60px;
  font-family: bold;
}

.wrap-counter .box-couter .icon span.icon-office-interaction-communication-business-connection-2-svgrepo-com {
  font-size: 80px;
}

.wrap-counter .box-couter .icon span.icon-worker-image-on-card-svgrepo-com {
  font-size: 56px;
}

.wrap-counter .box-couter .icon span.icon-happy-svgrepo-com {
  font-size: 62px;
}

.wrap-counter .box-couter .number-content {
  margin-bottom: 23px;
  padding-bottom: 10px;
  font-family: "Titillium Web", sans-serif;
  color: #fff;
  font-size: 60px;
  line-height: 1;
  font-weight: bold;
  position: relative;
  display: inline-block;
  width: 114px;
}

.wrap-counter .box-couter .number-content::after {
  background-color: #4761ff;
  width: 114px;
  height: 2px;
  content: "";
  bottom: -10px;
  left: 0;
  position: absolute;
}

.wrap-counter .box-couter .heading {
  color: #fff;
  line-height: 1.333;
}

.wrap-counter .box-couter:nth-child(2) .icon {
  margin-top: -3px;
  margin-bottom: 18px;
  margin-left: 6px;
}

.wrap-counter .box-couter:nth-child(3) {
  margin-left: -15px;
}

.wrap-counter .box-couter:nth-child(3) .icon {
  padding-top: 7px;
}

.get-a-quote-form {
  position: relative;
  padding-top: 7px;
  padding-right: 46px;
}

.get-a-quote-form .title-section .subtitle {
  margin-bottom: 1px;
  font-size: 15px;
  line-height: 1.5;
  color: #4761ff;
  font-family: "Kumbh Sans", sans-serif;
}

.get-a-quote-form .title-section .title {
  font-size: 30px;
  line-height: 1.5;
  color: #1c2035;
  font-weight: 600;
}

.get-a-quote-form fieldset {
  width: 100%;
  margin-bottom: 30px;
}

.get-a-quote-form fieldset.email {
  margin-bottom: 38px;
}

.get-a-quote-form fieldset.btn-submit {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
}

.get-a-quote-form fieldset.btn-submit span {
  font-size: 15px;
  font-weight: 500;
}

.get-a-quote-form fieldset.btn-submit .tf-button {
  height: 55px;
}

.get-a-quote-form select,
.get-a-quote-form input {
  background-color: rgba(255, 65, 56, 0);
  border: 1px solid #dedede;
  height: 55px;
  width: 100%;
  padding: 0 19px;
  color: #131212;
  font-size: 15px;
  line-height: 1.5;
}

.get-a-quote-form select::placeholder,
.get-a-quote-form input::placeholder {
  color: #131212;
  font-size: 15px;
  line-height: 1.5;
}

.get-a-quote-form select:focus,
.get-a-quote-form input:focus {
  border-color: #eaebf1;
  background-color: #f1f3fa;
  outline: none;
}

.get-a-quote-form select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.get-a-quote-form .subject {
  position: relative;
}

.get-a-quote-form .subject::after {
  position: absolute;
  right: 14px;
  font-size: 16px;
  top: 10px;
  font-family: "Font Awesome 5 Pro";
  content: "\f078";
  color: #131212;
}

.get-a-quote-content {
  padding-left: 50px;
  padding-right: 60px;
}

.get-a-quote-content .title {
  margin-bottom: 28px;
}

.get-a-quote-content .font-st2 {
  margin-bottom: 20px;
}

.get-a-quote-content .icon-box.style1 {
  margin-top: 35px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  background: #fff;
  padding: 13px 50px 10px 20px;
  max-width: 335px;
}

.get-a-quote-content .icon-box.style1 .icon span {
  color: #4761ff;
  font-size: 58px;
}

.get-a-quote-content .icon-box.style1 .title-st,
.get-a-quote-content .icon-box.style1 p {
  transform: translateY(5px);
}

.get-a-quote-content .icon-box.style1 .tf-button {
  height: 100%;
  position: absolute;
  right: 0;
  background-color: #1c2035;
  padding: 0px 17px 5px 17px;
}

.get-a-quote-content .icon-box.style1 .tf-button:hover::after,
.get-a-quote-content .icon-box.style1 .tf-button:hover::before {
  background: #4761ff;
}

.get-a-quote-content .icon-box.style1 .tf-button span {
  font-size: 20px;
  color: #fff;
}

.wrap-title {
  margin-bottom: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  margin-left: -30px;
}

.wrap-title .title-section {
  width: calc(50% - 30px);
  margin-left: 30px;
}

.wrap-title .title-section .title {
  margin-bottom: 0;
}

.wrap-title .desc {
  width: calc(50% - 30px);
  margin-left: 30px;
  padding-left: 18px;
  margin-bottom: 19px;
}

.content-values {
  padding-right: 40px;
}

.content-values p {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 32px;
  color: rgba(28, 32, 53, 0.8);
}

.content-values p.title {
  font-weight: 500;
  color: #4761ff;
  font-size: 22px;
  line-height: 32px;
}

.content-values .content-inner {
  margin-top: 33px;
}

.content-values .content-inner p {
  margin-bottom: 0;
}

.content-values .content-inner p.title {
  margin-bottom: 15px;
}

.image-values {
  position: relative;
  text-align: right;
  margin-left: 94px;
  margin-right: 17px;
  margin-top: 22px;
  animation: move5 5s ease-in-out infinite;
}

.image-values img {
  width: 100%;
}

.image-values::before {
  position: absolute;
  content: "";
  height: 100%;
  top: 12px;
  left: -13px;
  width: 32.5%;
  background: #4761ff;
}

.project-details p {
  font-size: 18px;
  line-height: 32px;
  color: rgba(28, 32, 53, 0.8);
}

.project-details .content-inner h3.title {
  margin-bottom: 28px;
  font-size: 43px;
  line-height: 32px;
}

.project-details .content-inner .icon-list2 {
  margin-top: 27px;
}

.project-details .content-inner .icon-list2 li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  margin-bottom: 11px;
}

.project-details .content-inner .icon-list2 li span {
  font-size: 18px;
  line-height: 32px;
  color: #1c2035;
  font-family: "Kumbh Sans", sans-serif;
}

.project-details .content-inner .icon-list2 li span.icon {
  margin-right: 17px;
  background-color: #616264;
  width: 28px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.project-details .content-inner .icon-list2 li span.icon i {
  font-size: 15px;
  color: #fff;
}

/* blog-post
-------------------------------------------------------------- */
.blog-post {
  position: relative;
  margin-bottom: 30px;
}

.blog-post .image {
  position: relative;
  overflow: hidden;
}

.blog-post .image img {
  width: 100%;
  webkit-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  transition: all 0.3s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.blog-post .content {
  background-color: #f8f7f7;
  padding: 23px 15px 16px 27px;
}

.blog-post .content ul {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  margin-bottom: 20px;
}

.blog-post .content ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.blog-post .content ul li a {
  font-size: 15px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  position: relative;
  color: #fff;
}

.blog-post .content ul li a.user {
  color: #727376;
  padding-left: 30px;
  margin-left: 14px;
}

.blog-post .content ul li a.user::before {
  color: #727376;
  position: absolute;
  left: 0;
  top: 0;
  font-family: "mrakus";
  content: "\e905";
  font-size: 21px;
}

.blog-post .content ul li a.user:hover {
  color: #4761ff;
}

.blog-post .content ul li:first-child {
  padding: 0 9px;
  background: #4761ff;
  height: 22px;
}

.blog-post .content .title {
  line-height: 36px;
}

.blog-post .content .title a:hover {
  color: #4761ff;
}

.blog-post .content p {
  text-transform: capitalize;
  margin-bottom: 18px;
}

.blog-post .bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  height: 54px;
  background-color: #f1f1f1;
}

.blog-post .bottom .readmore {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  font-size: 16px;
  line-height: 2;
  height: 54px;
  font-weight: 600;
  position: relative;
  padding: 5px 37px 5px 26px;
  background-color: #e9e9e9;
  color: #1c2035;
}

.blog-post .bottom .readmore::after {
  position: absolute;
  right: 15px;
  top: 15px;
  font-family: "Font Awesome 5 Pro";
  content: "\f178";
  font-size: 15px;
}

.blog-post .bottom .readmore:hover {
  color: #4761ff;
}

.blog-post .bottom .comment {
  position: relative;
  font-size: 15px;
  line-height: 28px;
  color: #727276;
  padding-left: 35px;
  margin-right: 28px;
}

.blog-post .bottom .comment::before {
  position: absolute;
  left: 0;
  top: 0px;
  font-size: 26px;
  content: "\e903";
  font-family: "mrakus";
}

.blog-post .bottom .comment:hover {
  color: #4761ff;
}

.blog-post:hover .image img {
  transform: scale(1.1);
  -webkit-filter: grayscale(0%);
  -ms-filter: grayscale(0%);
  -moz-filter: grayscale(0%);
  transition: all 0.3s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.blog-post.style2 {
  margin-bottom: 50px;
}

.blog-post.style2 .bottom {
  justify-content: flex-start;
}

.blog-post.style2 .bottom .readmore {
  margin-right: 74px;
}

.blog-post.style2 .content {
  padding: 25px 15px 9px 27px;
}

.blog-post.style2 .content .title {
  font-size: 32px;
  line-height: 52px;
  margin-bottom: 19px;
}

.blog-post.style2 .content ul {
  margin-bottom: 4px;
}

.blog-post.style2 .content .txt {
  text-transform: none;
  color: #1c2035;
}

.blogdetail .post {
  box-shadow: 0 4px 70px 0 rgba(0, 0, 0, 0.07);
  background: #fff;
  padding-bottom: 50px;
  margin-bottom: 0;
}

.blogdetail .post .content {
  margin-top: -15.5%;
  padding: 20px 52px 39px;
}

.blogdetail .post .content .title {
  margin-bottom: 0;
}

.blogdetail .post .tf-animated-fadeup.post.image.animated-effect,
.blogdetail .post .tf-animated-fadeup.post .image,
.blogdetail .post .image.animated-effect.tfanimated {
  transition: none !important;
  opacity: 1 !important;
  transform: none !important;
}

.blogdetail .post .wrap-inner {
  margin-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
}

.blogdetail .post .wrap-inner .txt {
  text-transform: capitalize;
  margin-bottom: 26px;
}

.blogdetail .post .wrap-inner .heading {
  margin-top: 41px;
  margin-bottom: 29px;
  text-transform: capitalize;
}

.blogdetail .post .post-inner {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  margin-bottom: 37px;
}

.blogdetail .post .post-inner .img img {
  min-width: 270px;
  min-height: 170px;
}

.blogdetail .post .post-inner .desc {
  color: #494A4D;
  margin-left: 40px;
  text-transform: capitalize;
}

.blogdetail .post .testimonior {
  margin-bottom: 40px;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  background: #FBF3F0;
  padding: 32px 40px 30px;
}

.blogdetail .post .testimonior .img {
  margin-right: 30px;
}

.blogdetail .post .testimonior .img img {
  min-width: 70px;
  min-height: 70px;
}

.blogdetail .post .testimonior .desc {
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #4761ff;
  text-transform: capitalize;
  margin-bottom: 21px;
}

.blogdetail .post .testimonior .name {
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  line-height: 24px;
  padding-left: 40px;
  position: relative;
  color: #4761ff;
  font-weight: 500;
  margin-bottom: 0;
  text-transform: capitalize;
}

.blogdetail .post .testimonior .name::before {
  position: absolute;
  left: 0;
  top: 11px;
  width: 30px;
  height: 2px;
  content: "";
  background: #4761ff;
}

.blogdetail .post .author-post {
  margin-bottom: 83px;
  background: #FBF3F0;
  padding: 38px 40px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.blogdetail .post .author-post .img {
  margin-right: 40px;
}

.blogdetail .post .author-post .img img {
  border-radius: 50%;
  min-width: 170px;
  min-height: 170px;
}

.blogdetail .post .author-post .content-inner .name {
  margin-bottom: 18px;
}

.blogdetail .post .author-post .content-inner p {
  margin-bottom: 26px;
  text-transform: capitalize;
}

.blogdetail .post .author-post .content-inner .social li {
  margin-right: 21px;
  margin-left: 5px;
}

.blogdetail .post .author-post .content-inner .social li a {
  background: none;
  width: auto;
  height: auto;
  color: #4761ff;
  font-size: 16px;
}

.blogdetail .post .author-post .content-inner .social li a:hover {
  color: #4761ff;
}

.post {
  background-color: #f8f7f7;
}

.post .content {
  background-color: #f8f7f7;
  padding: 23px 15px 16px 27px;
}

.post .content ul {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  margin-bottom: 20px;
}

.post .content ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.post .content ul li a {
  font-size: 15px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  position: relative;
  color: #fff;
}

.post .content ul li a.user {
  color: #727376;
  padding-left: 30px;
  margin-left: 14px;
}

.post .content ul li a.user::before {
  color: #727376;
  position: absolute;
  left: 0;
  top: 0;
  font-family: "mrakus";
  content: "\e905";
  font-size: 21px;
}

.post .content ul li a.user:hover {
  color: #4761ff;
}

.post .content ul li a.comment {
  color: #727376;
  padding-left: 30px;
  margin-left: 14px;
}

.post .content ul li a.comment::before {
  color: #727376;
  position: absolute;
  left: 0;
  top: 0;
  font-family: "mrakus";
  content: "\e903";
  font-size: 21px;
}

.post .content ul li:first-child {
  padding: 0 9px;
  background: #4761ff;
  height: 22px;
}

.post .content .title {
  line-height: 36px;
}

.post .content .title a:hover {
  color: #4761ff;
}

.post .content p {
  text-transform: capitalize;
  margin-bottom: 18px;
}

.post .wrap-inner {
  padding: 0px 30px 0 28px;
}

.post .wrap-inner p {
  color: rgba(28, 32, 53, 0.9);
  margin-bottom: 26px;
}

.post .wrap-inner p.mb22 {
  margin-bottom: 22px;
}

.post .box {
  position: relative;
  margin-bottom: 38px;
  padding-left: 20px;
  margin-top: 42px;
}

.post .box::before {
  position: absolute;
  left: 0;
  top: 8px;
  content: "";
  width: 5px;
  height: 92%;
  background: #fefefe;
}

.post .box p {
  font-size: 22px;
  line-height: 38px;
  color: #060315;
  font-weight: 500;
  margin-bottom: 11px;
}

.post .box h6 {
  font-size: 20px;
  color: #060315;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 600;
  margin-bottom: 0;
}

.post .fx-social-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  border-top: 1px solid #e5e5e5;
  padding: 32px 35px 32px 30px;
  margin-top: 33px;
}

.post .fx-social-tag .social li {
  margin: 0 2px 0 0;
}

.post .fx-social-tag .social li a {
  width: 35px;
  height: 35px;
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  font-size: 15px;
  color: #1f0b06;
}

.post .fx-social-tag .social li a:hover,
.post .fx-social-tag .social li a.active {
  background: #4761ff;
  color: #fff;
}

.post .fx-social-tag .tag {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.post .fx-social-tag .tag li {
  margin-left: 4px;
}

.post .fx-social-tag .tag li a {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  color: #13171d;
  font-size: 15px;
  line-height: 26px;
  background: #fff;
  padding: 0 15px;
  height: 36px;
}

.post .fx-social-tag .tag li a:hover {
  color: #4761ff;
}

.wrap-box-details {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  border: 1px solid #f1f1f1;
  padding: 33px 14px 31px 27px;
  margin-bottom: 55px;
}

.wrap-box-details .previous,
.wrap-box-details .next {
  width: 50%;
}

.wrap-box-details .previous a,
.wrap-box-details .next a {
  font-size: 19px;
  line-height: 30px;
  color: #1c2035;
  font-weight: 600;
}

.wrap-box-details .previous a:hover,
.wrap-box-details .next a:hover {
  color: #4761ff;
}

.wrap-box-details .previous h6,
.wrap-box-details .next h6 {
  font-size: 20px;
  line-height: 1.3;
  color: #fff;
}

.wrap-box-details .previous {
  padding-right: 125px;
  position: relative;
}

.wrap-box-details .previous h6 {
  letter-spacing: 0;
}

.wrap-box-details .previous::after {
  position: absolute;
  right: 0;
  top: 13px;
  width: 1px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  content: "";
}

.wrap-box-details .next {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  text-align: right;
  padding-left: 136px;
}

.wrap-box-details .next h6 {
  text-align: center;
}

.wrap-box-details .next .btn-next {
  min-width: 29px;
  min-height: 34px;
  background: #4761ff;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  margin-left: 12px;
  margin-top: -10px;
}

.wrap-box-details .next .btn-next i {
  color: #fff;
  font-size: 16px;
}

/* sidebar
-------------------------------------------------------------- */
#sidebar .widget-title {
  margin-bottom: 23px;
  line-height: 26px;
}

#sidebar .widget {
  background-color: #f1f2f6;
  margin-bottom: 30px;
  padding: 50px 41px 49px 43px;
}

#sidebar .widget.widget-search {
  padding: 38px 42px 32px;
}

#sidebar .widget.widget-recent-posts {
  padding: 50px 30px 53px 43px;
}

#sidebar .widget.widget-recent-posts .widget-title {
  margin-bottom: 32px;
}

#sidebar .widget.widget-picture {
  padding: 34px 41px 42px 43px;
  margin-bottom: 0;
}

#sidebar .widget.widget-picture .widget-title {
  margin-bottom: 16px;
}

.widget.widget-search input[type=text] {
  border: 1px solid #e4e4e4;
  background-color: white;
  font-size: 15px;
  line-height: 26px;
  padding: 13px 15px 13px 30px;
  height: 60px;
  color: #1c2035;
  font-weight: 500;
  width: 100%;
}

.widget.widget-search input[type=text]::placeholder {
  font-size: 15px;
  line-height: 26px;
  color: #1c2035;
  font-weight: 500;
}

.widget.widget-search .widget-form {
  position: relative;
}

.widget.widget-search .widget-form button {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 60px;
  border: 1px solid #e4e4e4;
  background-color: white;
  color: #fff;
}

.widget.widget-search .widget-form button i {
  font-size: 14px;
  color: #1c2035;
  font-weight: bold;
}

.widget.widget-category ul li {
  margin-bottom: 8.5px;
}

.widget.widget-category ul li a {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  background: #fff;
  border: 1px solid #e4e4e4;
  font-size: 15px;
  line-height: 26px;
  font-weight: 500;
  color: #1c2035;
  padding: 0 20px;
}

.widget.widget-category ul li a span {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  text-align: right;
  margin-right: 40px;
  opacity: 0;
  margin-left: -5px;
  color: #fff;
}

.widget.widget-category ul li a::before,
.widget.widget-category ul li a::after {
  right: 24px;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  font-family: "Font Awesome 5 Pro";
  content: "\f356";
  color: #fff;
}

.widget.widget-category ul li a::after {
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translate(0, -50%);
  -moz-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

.widget.widget-category ul li a::before {
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translate(-7px, -50%);
  -moz-transform: translate(-7px, -50%);
  -ms-transform: translate(-7px, -50%);
  -o-transform: translate(-7px, -50%);
  transform: translate(-7px, -50%);
}

.widget.widget-category ul li a:hover {
  background-color: #4761ff;
  color: #fff;
}

.widget.widget-category ul li a:hover::after {
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translate(7px, -50%);
  -moz-transform: translate(7px, -50%);
  -ms-transform: translate(7px, -50%);
  -o-transform: translate(7px, -50%);
  transform: translate(7px, -50%);
}

.widget.widget-category ul li a:hover::before {
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translate(2px, -50%);
  -moz-transform: translate(2px, -50%);
  -ms-transform: translate(2px, -50%);
  -o-transform: translate(2px, -50%);
  transform: translate(2px, -50%);
}

.widget.widget-category ul li a:hover span {
  opacity: 1;
  margin-left: 0;
}

.widget.widget-category ul li:last-child {
  margin-bottom: 0;
}

.widget.widget-recent-posts .recent-posts {
  margin-bottom: 23px;
}

.widget.widget-recent-posts .recent-posts li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.widget.widget-recent-posts .recent-posts li img {
  margin-top: 3px;
}

.widget.widget-recent-posts .recent-posts li .content {
  margin-left: 18px;
}

.widget.widget-recent-posts .recent-posts li .content a {
  font-size: 20px;
  line-height: 1.5;
  font-weight: bold;
  font-family: "Titillium Web", sans-serif;
  color: #1f0b06;
}

.widget.widget-recent-posts .recent-posts li .content a:hover {
  color: #4761ff;
}

.widget.widget-recent-posts .recent-posts li .content .meta-post a {
  margin-bottom: 0;
  font-size: 15px;
  line-height: 2;
  color: #1f0b06;
  font-weight: 400;
  font-family: "Kumbh Sans", sans-serif;
}

.widget.widget-recent-posts .recent-posts li .content .meta-post a:hover {
  color: #4761ff;
}

.widget.widget-recent-posts .recent-posts li:first-child .content li:first-child {
  margin-bottom: 4px;
}

.widget.widget-recent-posts .recent-posts:last-child {
  margin-bottom: 0;
}

.widget.widget-tags ul {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-wrap: wrap;
}

.widget.widget-tags ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  height: 34px;
  padding: 0 20px;
  border-radius: 2px;
  background: #F6F6F6;
  font-size: 14px;
  line-height: 26px;
  margin-right: 12px;
  margin-bottom: 10px;
  color: #494A4D;
}

.widget.widget-tags ul li a:hover {
  background: #4761ff;
  color: #fff;
}

.widget.widget-picture .content {
  background: #4761ff;
  padding: 37px 22px 68px;
}

.widget.widget-picture .content h3 {
  font-size: 28px;
  line-height: 36px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 11px;
}

.widget.widget-picture .content p {
  font-size: 16px;
  line-height: 30px;
  color: #fff;
  font-weight: 600;
}

.widget.widget-picture .content p.tel {
  font-size: 22px;
  line-height: 36px;
  font-family: "Titillium Web", sans-serif;
  margin-top: -8px;
}

.widget.widget-picture .image {
  height: 190px;
  margin-top: -37px;
  -webkit-mask-image: url("../img/bg-mask.png");
  mask-image: url("../img/bg-mask.png");
  -webkit-mask-position: center center;
  mask-position: center center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  text-align: center;
  overflow: hidden;
}

.social {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.social li {
  margin-right: 10px;
}

.social li a {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  height: 40px;
  width: 40px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 12px;
}

.social li a:hover {
  background: #4761ff;
}

/* swiper css
-------------------------------------------------------------- */
.buuton-slider-main {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  background-color: white;
  width: 57px;
  height: 74px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.buuton-slider-main i {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-size: 20px;
  color: #1c2035;
}

.buuton-slider-main.button-next-main {
  margin-bottom: 14px;
}

.buuton-slider-main.swiper-button-disabled,
.buuton-slider-main:hover {
  background: #4761ff;
}

.buuton-slider-main.swiper-button-disabled i,
.buuton-slider-main:hover i {
  color: #fff;
}

.swiper-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  width: 100%;
}

.swiper-pagination.style1 {
  position: relative;
  margin-left: 5px;
}

.swiper-pagination .swiper-pagination-bullet {
  background-color: #eee9e9;
  width: 23px;
  height: 5px;
  border: 2px solid #eee9e9;
  margin: 0 5px;
  border-radius: 2px;
  opacity: 1;
}

.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  border: 2px solid #4761ff;
  width: 35px;
  height: 6px;
  margin: 0 2px;
}

.slider-testimonial.show-shadow {
  padding: 35px 35px !important;
  margin: 0 -35px !important;
}

.slider-testimonial:hover,
.slider-main:hover,
.slider-explore:hover,
.slider-explore2:hover {
  cursor: ew-resize;
}

/* menu style
-------------------------------------------------------------- */
#main-nav-mobi {
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
  display: block;
  margin: 0 auto;
  width: 100%;
  left: 0;
  z-index: 9999;
  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.3);
  padding-left: 0;
  position: absolute;
  top: 100%;
  overflow-y: auto;
  background: #fff;
  max-height: 60vh;
}

#main-nav-mobi ul {
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
}

#main-nav-mobi ul li {
  margin: 0;
  cursor: pointer;
  padding: 0;
  border-top: 1px solid rgba(2, 14, 40, 0.2);
  position: relative;
}

#main-nav-mobi ul li>ul>li:first-child {
  border-top: 1px solid rgba(2, 14, 40, 0.2);
}

#main-nav-mobi ul>li>a {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  display: inline-block;
  padding: 12px 20px;
  position: relative;
}

#main-nav-mobi .sub-menu li a {
  padding-left: 40px;
  text-transform: capitalize;
}

#main-nav-mobi ul li:first-child {
  border-top: 0px;
}

#main-nav-mobi ul ul li.current-item a,
#main-nav-mobi ul>li.current-menu-item>a,
#main-nav-mobi ul>li>a:hover {
  color: #4761ff;
}

#main-nav-mobi .menu-item-has-children .arrow {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  line-height: 48px;
  position: absolute;
  right: 15px;
  text-align: center;
  top: 2px;
  width: 48px;
}

#main-nav-mobi .menu-item-has-children .arrow.active {
  transform: rotate(-180deg);
}

#main-nav-mobi .menu-item-has-children .arrow:before {
  font-family: "Font Awesome 5 Pro";
  content: "\f107";
}

#main-nav-mobi .menu-item-has-children.current-menu-item .arrow:before {
  color: #4761ff;
}

/* Mobile Menu Button */
.mobile-button {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  display: none;
  position: absolute;
  width: 26px;
  height: 26px;
  top: 50%;
  right: 0;
  background-color: transparent;
  cursor: pointer;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.mobile-button:before,
.mobile-button:after,
.mobile-button span {
  background-color: #4761ff;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.mobile-button:before,
.mobile-button:after {
  content: "";
  position: absolute;
  top: 0;
  height: 3px;
  width: 100%;
  left: 0;
  top: 50%;
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}

.mobile-button span {
  position: absolute;
  width: 100%;
  height: 3px;
  left: 0;
  top: 50%;
  overflow: hidden;
  text-indent: 200%;
}

.mobile-button:before {
  -webkit-transform: translate3d(0, -7px, 0);
  -moz-transform: translate3d(0, -7px, 0);
  transform: translate3d(0, -7px, 0);
}

.mobile-button:after {
  -webkit-transform: translate3d(0, 7px, 0);
  -moz-transform: translate3d(0, 7px, 0);
  transform: translate3d(0, 7px, 0);
}

.mobile-button.active span {
  opacity: 0;
}

.mobile-button.active:before {
  -webkit-transform: rotate3d(0, 0, 1, 45deg);
  -moz-transform: rotate3d(0, 0, 1, 45deg);
  transform: rotate3d(0, 0, 1, 45deg);
}

.mobile-button.active:after {
  -webkit-transform: rotate3d(0, 0, 1, -45deg);
  -moz-transform: rotate3d(0, 0, 1, -45deg);
  transform: rotate3d(0, 0, 1, -45deg);
}

/* Sub Menu */
#main-nav .sub-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translateY(15px);
  -moz-transform: translateY(15px);
  -ms-transform: translateY(15px);
  -o-transform: translateY(15px);
  transform: translateY(15px);
  padding: 5px 0;
}

#main-nav .sub-menu li {
  margin-right: 0;
}

#main-nav .sub-menu li a {
  padding: 10px 30px;
}

#main-nav .sub-menu li:hover .sub-menu {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}

#main-nav .sub-menu li.current-item a {
  color: #4761ff !important;
  opacity: 1;
}

.home3 .mobile-button:before,
.home3 .mobile-button:after,
.home3 .mobile-button span,
.home2 .mobile-button:before,
.home2 .mobile-button:after,
.home2 .mobile-button span {
  background-color: #fff;
}

/* box style section
-------------------------------------------------------------- */
.about-box {
  padding: 18px 15px 24px 39px;
  width: 166px;
  background-color: #3e4360;
  position: relative;
  border-radius: 30px 0 0 0;
  overflow: hidden;
}

.about-box .icon {
  margin-bottom: -3px;
}

.about-box .icon span {
  font-size: 51px;
  color: #fff;
}

.about-box p {
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  color: #fff;
}

.about-box::after {
  -webkit-transition: all 1.5s ease;
  -moz-transition: all 1.5s ease;
  -ms-transition: all 1.5s ease;
  -o-transition: all 1.5s ease;
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #4761ff;
  content: "";
  width: 12px;
  height: 100px;
  transform: translateX(-100%);
}

.about-box::before {
  -webkit-transition: all 1.5s ease;
  -moz-transition: all 1.5s ease;
  -ms-transition: all 1.5s ease;
  -o-transition: all 1.5s ease;
  transition: all 1.5s ease;
  position: absolute;
  right: -28px;
  bottom: -28px;
  transform: translateX(100%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4761ff;
  content: "";
}

.about-box.effect1 {
  position: absolute;
  right: 23px;
  top: 103px;
}

.tfanimated.about-box::before,
.tfanimated.about-box::after {
  transform: translateX(0);
}

.icon-box.style1 {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.icon-box .icon {
  margin-right: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.icon-box .icon span {
  font-size: 48px;
  color: #000000;
}

.icon-box .title-st,
.icon-box p {
  font-family: "Catamaran", sans-serif;
  font-size: 20px;
  line-height: 32px;
  color: #1f0b06;
  font-weight: 600;
}

.icon-box .title-st:hover {
  color: #4761ff;
}

.icon-box.style2 {
  display: block;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 0px 28px 0px rgba(202, 201, 201, 0.35);
  padding: 38px 20px;
}

.icon-box.style2 .icon {
  margin-bottom: 13px;
  margin-right: 18px;
  height: 54px;
}

.icon-box.style2 .icon span {
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  font-size: 54px;
  color: #000000;
}

.icon-box.style2 .icon span.icon-design-svgrepo-com {
  font-size: 53px;
}

.icon-box.style2 .icon span.icon-pie-chart-seo-and-web-svgrepo-com {
  font-size: 48px;
}

.icon-box.style2 .icon span.icon-diagram-business-presentation-chart-graph-infographic-svgrepo-com {
  font-size: 46px;
}

.icon-box.style2 .content .title {
  margin-bottom: 13px;
  line-height: 1.333;
  color: #1c2035;
  padding: 0 25px;
  margin-right: 18px;
}

.icon-box.style2 .content p {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(28, 32, 53, 0.8);
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 400;
}

.icon-box.effect2 {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  transform: translate(0);
}

.icon-box.effect2:hover {
  transform: translateY(-15px);
}

.icon-box.effect2:hover .icon span {
  transform: rotateY(180deg);
}

.explore-box {
  position: relative;
}

.explore-box .image {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  overflow: hidden;
  position: relative;
}

.explore-box .image img {
  width: 100%;
}

.explore-box .image .button {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  position: absolute;
  bottom: 50px;
  border-radius: 50%;
  background: #4761ff;
  width: 38px;
  height: 38px;
  z-index: 9;
}

.explore-box .image .button i {
  transform: rotate(-45deg);
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-size: 20px;
  color: #fff;
}

.explore-box .content {
  z-index: 9;
  position: relative;
  margin-top: -25px;
  margin-right: 10px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(202, 201, 201, 0.35);
  padding: 38px 20px 26px 30px;
}

.explore-box .content .sub {
  font-size: 16px;
  line-height: 34px;
  color: #1c2035;
  margin-bottom: 3px;
}

.explore-box .content .title {
  font-size: 28px;
  line-height: 1.14;
  color: #1c2035;
  padding-bottom: 26px;
  border-bottom: 1px solid #e1dbd7;
  margin-bottom: 15px;
}

.explore-box .content p {
  font-size: 16px;
  line-height: 32px;
  color: #1c2035;
}

.explore-box.effect .image img {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
  -moz-filter: grayscale(0%);
}

.explore-box.effect .image::before {
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  content: "";
  position: absolute;
  top: -110%;
  left: -210%;
  width: 200%;
  height: 200%;
  z-index: 1;
  opacity: 0;
  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(to right, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.13) 77%, rgba(255, 255, 255, 0.5) 92%, rgba(255, 255, 255, 0) 100%);
}

.explore-box.effect.active .button i,
.explore-box.effect:hover .button i {
  transform: rotate(0);
}

.explore-box.effect.active .image::before,
.explore-box.effect:hover .image::before {
  opacity: 1;
  top: -20%;
  left: -30%;
  transition-property: left, top, opacity;
  transition-duration: 0.7s, 0.7s, 0.15s;
  transition-timing-function: linear;
}

.explore-box.effect.active .image img,
.explore-box.effect:hover .image img {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
}

.explore-box.effect.active .content .title,
.explore-box.effect:hover .content .title {
  color: #4761ff;
}

.testimonial-box {
  position: relative;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 35px 0px rgba(222, 214, 212, 0.35);
  padding: 54px 30px 30px;
  text-align: center;
}

.testimonial-box .icon {
  padding-top: 5px;
  border-radius: 50%;
  background-color: #1c2035;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  top: -17px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.testimonial-box .icon span {
  color: #fff;
  font-size: 23px;
}

.testimonial-box p.txt {
  color: rgba(31, 11, 6, 0.8);
  margin-bottom: 30px;
}

.testimonial-box .img-box img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 11px;
}

.testimonial-box .img-box .name {
  font-family: "Catamaran", sans-serif;
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: -4px;
}

.testimonial-box .img-box .desc {
  font-size: 15px;
  line-height: 1.5;
  color: rgba(28, 32, 53, 0.8);
  margin-bottom: -1px;
}

.testimonial-box .img-box .start {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.testimonial-box .img-box .start li {
  margin: 0 2px 0 1px;
}

.testimonial-box .img-box .start li a {
  font-size: 13px;
  color: #ed8a19;
}

.team-box .image {
  position: relative;
  overflow: hidden;
}

.team-box .image .social {
  display: block;
  position: absolute;
  left: 20px;
  bottom: 10px;
}

.team-box .image .social li {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-10px);
  margin: 0 0 11px 0;
}

.team-box .image .social li:nth-child(1) {
  -webkit-transition-delay: 0.2s;
  -moz-transition-delay: 0.2s;
  -ms-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.team-box .image .social li:nth-child(2) {
  -webkit-transition-delay: 0.3s;
  -moz-transition-delay: 0.3s;
  -ms-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

.team-box .image .social li:nth-child(3) {
  -webkit-transition-delay: 0.4s;
  -moz-transition-delay: 0.4s;
  -ms-transition-delay: 0.4s;
  -o-transition-delay: 0.4s;
  transition-delay: 0.4s;
}

.team-box .image .social li a {
  background-color: #fff;
  width: 48px;
  height: 48px;
  color: #1c2035;
}

.team-box .image .social li a:hover,
.team-box .image .social li a.active {
  background: #4761ff;
  color: #fff;
}

.team-box .content {
  background-color: #fff;
  box-shadow: 0px 0px 32px 0px rgba(207, 204, 204, 0.45);
  text-align: center;
  padding: 31px 30px 26px;
}

.team-box .content h5 {
  line-height: 1.54;
  font-weight: 600;
  margin-bottom: -9px;
}

.team-box .content p {
  font-size: 15px;
  line-height: 34px;
  color: rgba(28, 32, 53, 0.7);
}

.team-box.active .image .social li,
.team-box:hover .image .social li {
  opacity: 1;
  transform: translateX(0);
}

.service-box .image {
  position: relative;
  overflow: hidden;
}

.service-box .image img {
  width: 100%;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  filter: grayscale(0);
}

.service-box .image::before {
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  content: "";
  position: absolute;
  top: -110%;
  left: -210%;
  width: 200%;
  height: 200%;
  z-index: 1;
  opacity: 0;
  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(to right, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.13) 77%, rgba(255, 255, 255, 0.5) 92%, rgba(255, 255, 255, 0) 100%);
}

.service-box .content {
  padding: 31px 20px 34px 33px;
  box-shadow: 0px 0px 28px 0px rgba(202, 201, 201, 0.35);
  background: #fff;
}

.service-box .content .title {
  margin-bottom: 13px;
  min-height: 72px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.service-box .content .title h4 {
  line-height: 32px;
  padding-right: 48px;
}

.service-box .content .title .icon {
  padding-top: 4px;
}

.service-box .content .title .icon.style {
  margin-right: 16px;
}

.service-box .content .title .icon.style2 {
  padding-top: 2px;
  margin-right: 1px;
}

.service-box .content .title .icon span {
  font-size: 54px;
}

.service-box .content p {
  margin-bottom: 27px;
  color: rgba(28, 32, 53, 0.8);
}

.service-box .content .btn-readmore {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.service-box .content .readmore {
  background-color: #e9e9e9;
  height: 45px;
  padding: 0px 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.service-box .content .readmore span {
  margin-left: 7px;
  margin-top: 5px;
  font-size: 18px;
  color: #1c2035;
}

.service-box .content .readmore span.txt {
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  text-transform: none;
  margin: 0;
}

.service-box .content .readmore:hover {
  background: #4761ff;
  color: #fff;
}

.service-box .content .readmore:hover span {
  color: #fff;
}

.service-box .content .readmore:hover::before,
.service-box .content .readmore:hover::after {
  background: #4761ff;
}

.service-box:hover .image img {
  filter: grayscale(100%);
}

.service-box:hover .image::before {
  opacity: 1;
  top: -20%;
  left: -30%;
  transition-property: left, top, opacity;
  transition-duration: 0.7s, 0.7s, 0.15s;
  transition-timing-function: linear;
}

/* footer
-------------------------------------------------------------- */
#footer {
  position: relative;
  background: url("../img/bg-footer.png") center center no-repeat;
  background-size: cover;
}

#footer .widget-title {
  font-weight: 600;
  color: #fff;
  margin-bottom: 28px;
}

#footer .footer-main {
  padding: 96px 0 74px;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

#footer .footer-main .footer__logo {
  margin-bottom: 19px;
}

#footer .footer-main .widget {
  width: 25%;
}

#footer .footer-main .widget.widget-logo .list {
  margin-bottom: 39px;
}

#footer .footer-main .widget.widget-logo .list li {
  margin-bottom: 0px;
}

#footer .footer-main .widget.widget-logo .list li span {
  font-size: 16px;
  line-height: 34px;
  color: rgba(255, 255, 255, 0.55);
}

#footer .footer-main .widget.widget-logo .social li {
  margin: 0 11px 0 0;
}

#footer .footer-main .widget.widget-logo .social li a {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: #fff;
  color: #413e3b;
  font-size: 18px;
}

#footer .footer-main .widget.widget-logo .social li a:hover {
  background: #4761ff;
  color: #fff;
}

#footer .footer-main .widget.widget-infomation {
  width: 28%;
  padding-top: 4px;
  padding-left: 28px;
}

#footer .footer-main .widget.widget-infomation .infomation li {
  position: relative;
}

#footer .footer-main .widget.widget-infomation .infomation li::before {
  position: absolute;
  left: -3px;
  top: 10px;
  font-family: "mrakus";
  color: #fff;
  font-size: 26px;
}

#footer .footer-main .widget.widget-infomation .infomation li span {
  font-size: 16px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.5);
}

#footer .footer-main .widget.widget-infomation .infomation>li {
  line-height: 30px;
  padding-left: 39px;
  margin-bottom: 20px;
}

#footer .footer-main .widget.widget-infomation .infomation>li:nth-child(1)::before {
  content: "\e904";
}

#footer .footer-main .widget.widget-infomation .infomation>li:nth-child(2)::before {
  content: "\e906";
  left: -3px;
  top: 6px;
}

#footer .footer-main .widget.widget-infomation .infomation>li:nth-child(2) ul li {
  margin-bottom: -1px;
}

#footer .footer-main .widget.widget-infomation .infomation>li:nth-child(3)::before {
  content: "\e902";
  left: 1px;
  top: 6px;
}

#footer .footer-main .widget.widget-service {
  width: 22%;
  padding-top: 4px;
  padding-left: 35px;
}

#footer .footer-main .widget.widget-service .widget-title {
  margin-bottom: 22px;
}

#footer .footer-main .widget .widget-link {
  font-size: 16px;
  line-height: 38px;
  color: rgba(255, 255, 255, 0.55);
}

#footer .footer-main .widget.widget-subscribe {
  padding-top: 4px;
  padding-left: 22px;
}

#footer .footer-main .widget.widget-subscribe p {
  line-height: 32px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 22px;
  font-size: 18px;
}

#footer .footer-main .widget.widget-subscribe form {
  position: relative;
  background-color: #f3f3f3;
  margin-left: -3px;
  margin-right: 5px;
}

#footer .footer-main .widget.widget-subscribe form input {
  background-color: #f3f3f3;
  width: 100%;
  height: 60px;
  font-size: 15px;
  line-height: 2;
  color: rgba(14, 16, 13, 0.5);
  padding: 0 20px;
}

#footer .footer-main .widget.widget-subscribe form input::placeholder {
  font-size: 15px;
  line-height: 2;
  color: rgba(14, 16, 13, 0.5);
}

#footer .footer-main .widget.widget-subscribe form button {
  position: absolute;
  right: -5px;
  top: 5px;
  background: #4761ff;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  padding: 0 15px;
  color: #fff;
  font-size: 15px;
  line-height: 2;
  font-weight: 500;
}

#footer .footer-main .widget.widget-subscribe form button span {
  position: absolute;
  top: -5px;
  right: 0px;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #4761ff;
}

#footer .footer-bottom {
  background-color: #292b34;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

#footer .footer-bottom .copyright {
  text-align: center;
}

#footer .footer-bottom .copyright p {
  margin-top: 7px;
  font-size: 15px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.9);
}

/* section style all page
-------------------------------------------------------------- */
.grid .tf-section.tf-blog {
  padding: 124px 0 84px;
}

.tf-post article {
  width: 66%;
  padding-right: 2px;
}

.tf-post #sidebar {
  margin-top: 2px;
  width: 34%;
  padding-left: 30px;
}

.bloglist .tf-section.tf-post {
  padding: 142px 0 90px;
}

.blogdetails .tf-section.tf-post {
  padding: 142px 0 62px;
}

.blogdetails .post .image {
  margin-bottom: 2px;
}

.blogdetails .post .content ul {
  margin-bottom: 4px;
}

.blogdetails .post .content ul li a.comment::before {
  font-size: 28px;
}

.blogdetails .post .content ul li:last-child {
  margin-left: -7px;
}

.blogdetails .post .content ul li:last-child a {
  padding-left: 35px;
}

.blogdetails .post .content .title {
  font-size: 32px;
  line-height: 1.625;
  margin-bottom: 3px;
}

.blogdetails article .image-box {
  position: relative;
  border: 1px solid #f1f1f1;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  padding: 35px 24px 27px;
  margin-bottom: 36px;
}

.blogdetails article .image-box .image {
  min-width: 78px;
  min-height: 78px;
  margin-right: 24px;
}

.blogdetails article .image-box .image img {
  border-radius: 50%;
}

.blogdetails article .image-box .content h4 {
  color: #060315;
  line-height: 26px;
  font-weight: 600;
  margin-bottom: 14px;
}

.blogdetails article .image-box .content p {
  color: #1c2035;
  font-size: 18px;
  line-height: 30px;
}

.blogdetails article .image-box .social {
  position: absolute;
  top: 35px;
  right: 82px;
}

.blogdetails article .image-box .social li {
  margin: 0 0 0 18px;
}

.blogdetails article .image-box .social li a {
  width: auto;
  height: auto;
  background: none;
  color: #1f0b06;
}

.blogdetails article .image-box .social li a:hover {
  color: #4761ff;
}

.blogdetails .form-comment h3 {
  line-height: 48px;
  font-weight: 600;
  font-family: "Kumbh Sans", sans-serif;
  margin-bottom: 0px;
}

.blogdetails .form-comment p {
  line-height: 1.7;
  font-size: 15px;
  color: #060315;
  margin-bottom: 34px;
}

.blogdetails .form-comment form {
  margin-left: -30px;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-wrap: wrap;
}

.blogdetails .form-comment form fieldset {
  width: calc(50% - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
}

.blogdetails .form-comment form fieldset input {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: 100%;
  border: 1px solid #eaeaea;
  background-color: rgba(247, 247, 246, 0);
  height: 55px;
  padding: 0px 20px;
  font-size: 15px;
  line-height: 25.6px;
}

.blogdetails .form-comment form fieldset input:focus,
.blogdetails .form-comment form fieldset input:active {
  border-color: #4761ff;
}

.blogdetails .form-comment form fieldset.btn-submit,
.blogdetails .form-comment form fieldset.checkbox,
.blogdetails .form-comment form fieldset.message {
  width: calc(100% - 30px);
}

.blogdetails .form-comment form fieldset.message {
  margin-bottom: 14px;
}

.blogdetails .form-comment form fieldset.checkbox {
  margin-bottom: 28px;
}

.blogdetails .form-comment form fieldset textarea {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border: 1px solid #eaeaea;
  background-color: rgba(247, 247, 246, 0);
  height: 190px;
  width: 100%;
  outline: none;
  padding: 26px 20px;
  font-size: 15px;
  line-height: 25.6px;
}

.blogdetails .form-comment form fieldset textarea:focus,
.blogdetails .form-comment form fieldset textarea:active {
  border-color: #4761ff;
}

.blogdetails .form-comment form fieldset .tf-button {
  height: 51px;
  padding: 0 30px 0 33px;
}

.blogdetails .form-comment form fieldset .tf-button span {
  font-size: 16px;
  line-height: 31px;
  text-transform: capitalize;
}

.blogdetails .form-comment form label {
  line-height: 26px;
  font-size: 15px;
  position: relative;
  cursor: pointer;
  padding-left: 32px;
}

.blogdetails .form-comment form label input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  margin-right: 0px;
  margin-bottom: 0px;
}

.blogdetails .form-comment form label .btn-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  border: 1px solid #eaeaea;
  position: absolute;
  top: 3px;
  left: 0;
  width: 19px;
  height: 19px;
  background-color: transparent;
  border-radius: 0;
}

.blogdetails .form-comment form label .btn-checkbox:after {
  font-family: "Font Awesome 5 Pro";
  content: "\f00c";
  left: 3px;
  font-size: 14px;
  top: -3px;
  color: #fff;
  position: absolute;
  display: none;
}

.blogdetails .form-comment form label input:checked~.btn-checkbox:after {
  display: block;
}

.blogdetails .form-comment form label input:checked~.btn-checkbox {
  background-color: #4761ff;
  border: 2px solid #4761ff;
}

.main .page-title {
  background: rgba(12, 14, 22, 0.52);
  padding: 160px 0 20px;
}

.main .page-title .overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../img/bg-page-title2.jpg") center center fixed no-repeat;
  background-size: cover;
  z-index: -1;
}

.main .page-title .button-slider {
  margin-top: -4px;
}

.main .box-slider {
  text-align: center;
}

.main .box-slider .sub-title {
  text-transform: uppercase;
  font-size: 16px;
  line-height: 34px;
  font-weight: 500;
  color: #fefefe;
  letter-spacing: 1.5px;
  margin-bottom: 5px;
}

.main .box-slider .title {
  font-size: 115px;
  line-height: 0.99;
  color: #fff;
  margin-bottom: 54px;
}

.main .box-slider .btn-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.main .box-slider .btn-slider .tf-button {
  padding: 0 36px;
}

.main .box-slider .btn-slider .tf-button span {
  letter-spacing: 0.5px;
  font-size: 15px;
}

.tf-counter {
  z-index: 10;
  padding: 0;
  margin-top: -167px;
}

.tf-video .overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../img/bgsection1.jpg") center center no-repeat;
  background-size: cover;
  filter: brightness(0.6);
  z-index: -1;
}

.tf-video .wrap-video {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.tf-video .wrap-video .popup-youtube {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  width: 117px;
  height: 109px;
  background: #4761ff;
  border-radius: 30px 0 0 0;
  cursor: pointer;
  animation: pulse_three 3s linear infinite;
}

.tf-video .wrap-video .popup-youtube i {
  color: #fff;
  font-size: 15px;
}

.tf-testimonial .swiper-pagination.style2 {
  position: absolute;
  right: 15px;
  left: auto;
  top: -50px;
  justify-content: flex-end;
}

.tf-team .container-fluid {
  max-width: 1600px;
}

.tf-section.tf-about {
  padding: 103px 0 120px;
}

.tf-section.tf-about .content-box {
  padding-left: 22px;
  padding-right: 22px;
}

.tf-section.tf-about .content-box .title-section {
  padding-right: 20px;
}

.tf-section.tf-about .content-box .icon-box .icon span.icon-target-svgrepo-com {
  font-size: 58px;
}

.tf-section.tf-about .image-about {
  position: relative;
  padding-top: 12px;
}

.tf-section.tf-video {
  padding: 109px 0 251px;
  z-index: 9;
}

.tf-section.explore-our-work {
  padding: 101px 0 106px;
}

.tf-section.get-a-quote {
  padding: 104px 0 58px;
}

.tf-section.tf-testimonial {
  padding: 86px 0 0;
}

.tf-section.tf-testimonial .wrap-title {
  margin-bottom: 46px;
}

.tf-section.tf-team {
  padding: 65px 0 0;
}

.tf-section.tf-blog {
  padding: 93px 0 82px;
}

.tf-section.tf-blog .wrap-title .sub-title {
  margin-bottom: 1px;
}

.tf-section.tf-blog .wrap-title .desc {
  padding-left: 51px;
  margin-bottom: 7px;
}

.tf-section.tf-blog .wrap-title .desc p {
  margin-right: -10px;
}

.tf-section.tf-about.style2 .image-about .image {
  padding-right: 5%;
}

.tf-section.tf-about.style2 .image-about .image img {
  margin-left: -15px;
}

.tf-section.tf-about.style2 .image-about .image-right {
  margin-top: -19%;
}

.tf-section.tf-about.style2 .image-about .image-style {
  position: absolute;
  right: 62px;
  top: 92px;
  z-index: 99;
}

.tf-section.tf-about.style2 .image-about .image-style .boder {
  position: relative;
}

.tf-section.tf-about.style2 .image-about .image-style .boder::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 9px solid #fff;
  left: 0;
  top: 0;
}

.tf-section.tf-about.style2 .content-box {
  padding-right: 40%;
}

.tf-section.tf-about.style2 .content-box p {
  color: rgba(28, 32, 53, 0.8);
}

.tf-section.tf-about.style2 .content-box p.subtitle {
  color: #4761ff;
}

.tf-section.tf-about.style2 .content-box .wrap-fx {
  margin-bottom: 38px;
  margin-right: -10px;
  align-items: flex-start;
}

.tf-section.tf-about.style2 .content-box .wrap-fx .about-box {
  position: relative;
  top: 0;
  margin-right: 37px;
  min-width: 166px;
  right: auto;
  left: 0;
}

.tf-section.tf-about.style2 .content-box .wrap-fx .about-box p {
  color: #fff;
}

.tf-section.tf-about.style2 .content-box .wrap-fx .content {
  padding-top: 4px;
}

.tf-section.tf-about.style2 .content-box .wrap-fx .content .title {
  font-size: 22px;
  line-height: 32px;
  color: #4761ff;
  font-weight: 500;
  margin-bottom: 6px;
}

.tf-section.tf-about.style2 .content-box .wrap-fx .content p {
  margin-bottom: 20px;
}

.tf-section.tf-about.style2 .content-box .wrap-fx .content .list li span {
  font-size: 16px;
  line-height: 2;
  color: rgba(28, 32, 53, 0.8);
  position: relative;
  padding-left: 28px;
}

.tf-section.tf-about.style2 .content-box .wrap-fx .content .list li span::before {
  position: absolute;
  font-family: "mrakus";
  content: "\e91a";
  font-size: 15px;
  left: 2px;
  top: -3px;
  color: #000000;
}

.tf-section.tf-about.style2 .content-box .wrap-fx .content .list li:first-child {
  margin-bottom: -3px;
}

.home2 .service-box .content {
  box-shadow: 0px 0px 28px 0px rgba(202, 201, 201, 0.1);
}

.home2 #topbar {
  background: #fff;
}

.home2 #topbar .topbar-left ul li span {
  color: #1c2035;
}

.home2 #topbar .topbar-left ul li span::before {
  color: #1c2035;
}

.home2 #topbar .topbar-left ul li span.style {
  color: #4761ff;
}

.home2 #topbar .topbar-right .wrap-social p {
  color: #1c2035;
}

.home2 #topbar .topbar-right .wrap-social .social li a {
  color: #1c2035;
}

.home2 #topbar .topbar-right .tf-button:hover::before,
.home2 #topbar .topbar-right .tf-button:hover::after {
  background: #1c2035;
}

.home2 #topbar .topbar-right .tf-button:hover span {
  color: #fff;
}

.home2.main .tf-section.tf-counter {
  margin-top: 0;
}

.home2.main .tf-section.service-list {
  padding: 110px 0 0;
}

.home2.main .tf-section.tf-about {
  padding: 99px 0 0px;
}

.home2.main .box-slider {
  text-align: left;
  width: 68%;
}

.home2.main .page-title {
  padding: 267px 0 20px;
}

.home2.main .page-title .btn-slider {
  justify-content: flex-start;
}

.home2.main .page-title .button-slider .buuton-slider-main {
  margin-left: auto;
}

.home2.main .page-title .overlay {
  background: url(../img/bg-page-title3.jpg) center center fixed no-repeat;
  background-size: cover;
}

.home2 .tf-section.tf-service {
  padding: 109px 0 0;
  z-index: 11;
}

.home2 .tf-section.tf-video {
  margin-top: -134px;
  padding: 221px 0 87px;
}

.home2 .tf-section.explore-our-work {
  padding: 113px 0 0;
}

.home2 .tf-section.explore-our-work .container {
  max-width: 1600px;
}

.home2 .tf-section.tf-testimonial {
  padding: 66px 0 0;
}

.home2 .tf-section.tf-blog {
  padding: 53px 0 84px;
}

.home2 .tf-section.tf-counter .container {
  max-width: 1748px;
}

.home2 .tf-section.get-a-quote {
  padding: 72px 0 86px;
}

.home2 .tf-section.get-a-quote .get-a-quote-content .wrap-fx {
  margin-bottom: 0;
  padding-left: 7px;
  margin-top: 45px;
}

.home2 .tf-section.get-a-quote .get-a-quote-content .wrap-fx .icon-box {
  width: 50%;
  padding-right: 30px;
}

.home2 .tf-section.get-a-quote .get-a-quote-content .wrap-fx .icon-box.style1 {
  margin-top: 0;
  padding: 0;
  background: none;
}

.home2 .tf-section.get-a-quote .get-a-quote-content .wrap-fx .icon-box.style1 .icon span {
  color: #000000;
}

.home2 .tf-section.get-a-quote .get-a-quote-content .wrap-fx .icon-box.style1 .icon span.icon-diagram-order-svgrepo-com {
  font-size: 48px;
}

.home2 .tf-section.get-a-quote .get-a-quote-content .wrap-fx .icon-box:nth-child(2) {
  margin-top: -8px;
}

.home2 .tf-section.get-a-quote .get-a-quote-content .wrap-fx .icon-box:nth-child(2) .icon {
  margin-right: 16px;
}

.home2 .wrap-counter {
  padding: 52px 280px 45px;
}

.home2 .wrap-counter::after {
  width: 210px;
  height: 40px;
}

.home2 .wrap-counter::before {
  width: 44px;
  height: 225px;
}

.pg-about .tf-section.tf-about {
  padding: 100px 0 115px;
}

.pg-about .tf-section.section-values {
  padding: 105px 0 65px;
}

.pg-about .tf-section.tf-testimonial {
  padding: 103px 0 80px;
}

.pg-about .tf-section.get-a-quote {
  padding: 104px 0 92px;
}

.pg-team .tf-section.tf-team {
  padding: 124px 0 79px;
}

.pg-team .tf-section.tf-team .team-box {
  margin-bottom: 30px;
}

.pg-team .tf-section.tf-video {
  z-index: 1;
}

.inner-page-style #footer {
  margin-top: -166px;
}

.inner-page-style #footer .wrap-counter {
  z-index: 9;
}

.inner-page-style #footer .footer-main {
  padding: 94px 0 74px;
}

.pg-testimonior .tf-section.tf-testimonial {
  padding: 141px 0 48px;
}

.pg-testimonior .tf-section.tf-testimonial .testimonial-box {
  margin-bottom: 68px;
}

.pg-service .tf-section.tf-service {
  padding: 124px 0 90px;
}

.pg-service .tf-section .service-box {
  margin-bottom: 30px;
}

.pg-service-details .tf-section.tf-post {
  padding: 124px 0 90px;
}

.pg-service-details .tf-section.tf-post #sidebar {
  margin-top: 0;
}

.pg-service-details .tf-section.tf-post #sidebar .widget-title {
  margin-bottom: 17px;
}

.pg-service-details .tf-section.tf-post #sidebar .widget {
  margin-bottom: 0;
  padding: 50px 41px 30px 43px;
}

.pg-service-details .tf-section.tf-post #sidebar .widget.widget-picture {
  padding: 10px 41px 48px 43px;
}

.service-details .image {
  margin-bottom: 38px;
}

.service-details .content-inner h4 {
  line-height: 32px;
  margin-bottom: 18px;
}

.service-details .content-inner h4.mb22 {
  margin-bottom: 22px;
}

.service-details .content-inner p {
  margin-bottom: 19px;
  font-size: 18px;
  line-height: 32px;
  color: rgba(28, 32, 53, 0.8);
}

.service-details .content-inner .image-box {
  margin-top: 45px;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.service-details .content-inner .image-box .image {
  margin-top: 8px;
  width: 45%;
}

.service-details .content-inner .image-box .content {
  padding-left: 40px;
  width: 55%;
  padding-right: 20px;
}

.service-details .content-inner .image-box .content p {
  margin-bottom: 36px;
}

.service-details .content-inner .image-box .content .icon-list-st2 {
  display: block;
}

.service-details .content-inner .image-box .content .icon-list-st2 li {
  margin-bottom: 7px;
  position: relative;
}

.service-details .content-inner .image-box .content .icon-list-st2 li::before {
  position: absolute;
  font-family: "mrakus";
  content: "\e917";
  left: 4px;
  top: 7px;
  font-size: 22px;
  font-weight: 100;
  color: #4761ff;
}

.service-details .content-inner .image-box .content .icon-list-st2 li span {
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 32px;
  color: rgba(28, 32, 53, 0.8);
  font-family: "Kumbh Sans", sans-serif;
  padding-left: 33px;
}

.icon-list {
  margin-top: 30px;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  margin-left: -30px;
  flex-wrap: wrap;
}

.icon-list li {
  margin-bottom: 6px;
  width: calc(48% - 30px);
  margin-left: 30px;
  position: relative;
  padding-left: 30px;
}

.icon-list li::before {
  position: absolute;
  font-family: "mrakus";
  content: "\e917";
  left: 0px;
  top: 5px;
  font-size: 22px;
  font-weight: 100;
}

.icon-list li span {
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 32px;
  color: rgba(28, 32, 53, 0.8);
  font-family: "Kumbh Sans", sans-serif;
  position: relative;
}

.icon-list li.style {
  margin-left: 13px;
}

.pg-project .explore-box {
  margin-bottom: 30px;
}

.pg-project .tf-section.explore-our-work {
  padding: 124px 0 86px;
}

.pg-project .tf-section.tf-post {
  padding: 124px 0 30px;
}

.pg-project .tf-section.tf-project {
  padding: 46px 0 90px;
}

.pg-project .tf-section.tf-project h2.title {
  font-size: 43px;
  line-height: 32px;
  margin-bottom: 70px;
}

.pg-project #sidebar .widget {
  padding: 50px 41px 53px 43px;
  margin-bottom: 40px;
}

.pg-project #sidebar .widget.widget-picture {
  padding: 35px 41px 42px 43px;
}

.pg-contact .tf-section.tf-contact {
  padding: 120px 0 100px;
}

.pg-contact .tf-section.tf-contact .contact-form .title-section {
  padding-right: 30%;
  margin-bottom: 37px;
}

.pg-contact .tf-section.tf-contact .contact-form .title-section h3 {
  font-size: 34px;
  line-height: 1;
  margin-bottom: 23px;
}

.pg-contact .tf-section.tf-contact .contact-form .title-section p {
  color: rgba(28, 32, 53, 0.8);
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form {
  position: relative;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-wrap: wrap;
  margin-left: -30px;
  padding-right: 8px;
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset {
  margin-bottom: 24px;
  width: calc(50% - 30px);
  margin-left: 30px;
  display: flex;
  flex-direction: column;
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset label {
  font-size: 18px;
  line-height: 31px;
  font-weight: 600;
  color: #1f0b06;
  font-family: "Titillium Web", sans-serif;
  margin-bottom: 13px;
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset input {
  width: 100%;
  background-color: whitesmoke;
  height: 50px;
  padding: 0 19px;
  font-size: 15px;
  line-height: 1.5;
  color: rgba(31, 11, 6, 0.7);
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset input::placeholder {
  font-size: 15px;
  line-height: 1.5;
  color: rgba(31, 11, 6, 0.7);
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset textarea {
  height: 195px;
  width: 100%;
  background-color: whitesmoke;
  outline: none;
  padding: 22px 19px;
  font-size: 15px;
  border: none;
  line-height: 1.5;
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset textarea::placeholder {
  font-size: 15px;
  line-height: 1.5;
  color: rgba(31, 11, 6, 0.7);
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset.btn-button {
  display: block;
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset.btn-button .tf-button {
  height: 51px;
  padding: 0 30px;
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset.btn-button .tf-button span {
  text-transform: capitalize;
  font-size: 16px;
  line-height: 31px;
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset.message {
  margin-bottom: 36px;
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset.btn-button {
  margin-bottom: 0;
}

.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset.btn-button,
.pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset.message {
  width: calc(100% - 30px);
}

.flat-map {
  overflow: hidden;
  height: 542px;
  margin: 7px 9px 0 28px;
}

.contact-box {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  margin-left: -30px;
  margin-top: 81px;
}

.contact-box .box {
  width: calc(33.333% - 30px);
  margin-left: 30px;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.contact-box .box .icon {
  min-width: 79px;
  height: 79px;
  background-color: #b8b8b8;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  margin-right: 28px;
}

.contact-box .box .icon span {
  font-size: 30px;
  color: #fff;
}

.contact-box .box .content {
  padding-top: 3px;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
}

.contact-box .box .content span {
  font-size: 18px;
  line-height: 32px;
  color: rgba(28, 32, 53, 0.9);
}

.contact-box .box .content span.style {
  color: #000141;
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
  margin-bottom: 10px;
}

.contact-box .box:nth-child(2) {
  padding-left: 16px;
}

.contact-box .box:nth-child(2) .icon {
  margin-right: 18px;
}

.contact-box .box:nth-child(3) {
  padding-left: 26px;
}

.contact-box .box:nth-child(3) .icon {
  margin-right: 18px;
}

.tf-section.tf-404 {
  padding: 100px 0 120px;
}

.tf-section.tf-404 .content-section {
  text-align: center;
}

.tf-section.tf-404 .content-section .title {
  font-family: "Titillium Web", sans-serif;
  font-weight: bold;
  font-size: 252px;
  color: #5a5858;
  line-height: 1;
  margin-bottom: 17px;
}

.tf-section.tf-404 .content-section .title span {
  font-family: "agency";
}

.tf-section.tf-404 .content-section h2 {
  font-size: 45px;
  line-height: 1.5;
  font-weight: 600;
  color: #1f0b06;
  margin-bottom: 7px;
}

.tf-section.tf-404 .content-section p {
  font-size: 20px;
  line-height: 1.5;
  color: rgba(28, 32, 53, 0.8);
  margin-bottom: 35px;
}

.tf-section.tf-404 .content-section .wrap-button {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.tf-section.tf-404 .content-section .wrap-button .tf-button {
  padding: 0 37px;
  height: 64px;
}

.tf-section.tf-404 .content-section .wrap-button .tf-button span {
  text-transform: none;
  font-size: 18px;
  font-weight: 600;
}

._404 {
  font-size: 252px;
  color: #5a5858;
  font-weight: bold;
  line-height: 0.317;
  text-align: center;
  position: absolute;
  left: 759.922px;
  top: 726.558px;
  z-index: 61;
}

/* widget
-------------------------------------------------------------- */
.social {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.social li {
  margin-left: 15px;
}

.social li a {
  color: #fff;
  font-size: 15px;
}

.social li a:hover {
  color: #4761ff;
}

.flat-show-search {
  position: relative;
}

.flat-show-search::before {
  position: absolute;
  width: 1px;
  height: 38px;
  content: "";
  background-color: #cbcbcb;
  top: 0;
  left: 0;
}

.flat-show-search .show-search {
  position: relative;
}

.flat-show-search .show-search a {
  position: relative;
  display: block;
  text-align: center;
  padding-top: 2px;
}

.flat-show-search .show-search a i {
  font-weight: bold;
  font-size: 20px;
}

.flat-show-search .top-search {
  position: absolute;
  right: 0;
  top: 100%;
  width: 250px;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.flat-show-search .top-search #searchform-all {
  position: relative;
}

.flat-show-search .top-search #searchform-all #s {
  height: 60px;
  font-size: 14px;
  color: rgba(21, 65, 110, 0.65);
  background-color: #fff;
  border: none;
  width: 100%;
  padding: 0 20px;
  color: #1c2035;
}

.flat-show-search .top-search #searchform-all #s::placeholder {
  color: #1c2035;
}

.flat-show-search .top-search #searchform-all #searchsubmit {
  padding: 3px;
  position: absolute;
  right: 15px;
  top: 15px;
  font-family: "FontAwesome";
  color: #e3cca1;
  background: transparent;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.flat-show-search .top-search #searchform-all #searchsubmit span {
  color: #1c2035;
  font-size: 20px;
  font-weight: bold;
}

.flat-show-search .top-search.show {
  visibility: visible;
  opacity: 1;
  z-index: 1;
  top: 167%;
}

.widget-project .list-project {
  margin-bottom: 36px;
}

.widget-project .list-project li {
  margin-bottom: 18px;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
}

.widget-project .list-project li span {
  font-size: 15px;
  line-height: 26px;
  color: rgba(28, 32, 53, 0.8);
}

.widget-project .list-project li span.style {
  text-transform: capitalize;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #1c2035;
  margin-bottom: -1px;
}

.widget-project .list-project li:nth-child(3) {
  margin-bottom: 10px;
}

.widget-project .tf-button {
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  border: 1px solid #e4e4e4;
  height: 50px;
  background: #fff;
}

.widget-project .tf-button span {
  text-transform: none;
  font-size: 15px;
  line-height: 26px;
  font-weight: 500;
  color: #1c2035;
}

.widget-project .tf-button::before,
.widget-project .tf-button::after {
  background: #fff;
}

.widget-project .tf-button:hover::before,
.widget-project .tf-button:hover::after {
  background: #4761ff;
}

.widget-project .tf-button:hover span {
  color: #fff;
}

/* Magnific Popup CSS */
.mfp-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1042;
  overflow: hidden;
  position: fixed;
  background: #3f3f3f;
  opacity: 0.8;
  filter: alpha(opacity=80);
}

.mfp-wrap {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1043;
  position: fixed;
  outline: none !important;
  -webkit-backface-visibility: hidden;
}

.mfp-container {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0 8px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.mfp-container:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.mfp-align-top .mfp-container:before {
  display: none;
}

.mfp-content {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
  z-index: 1045;
}

.mfp-inline-holder .mfp-content,
.mfp-ajax-holder .mfp-content {
  width: 100%;
  cursor: auto;
}

.mfp-ajax-cur {
  cursor: progress;
}

.mfp-zoom-out-cur,
.mfp-zoom-out-cur .mfp-image-holder .mfp-close {
  cursor: pointer;
  /* cursor: -moz-zoom-out;
  cursor: -webkit-zoom-out;
  cursor: zoom-out;  */
}

.mfp-zoom {
  cursor: pointer;
  cursor: -webkit-zoom-in;
  cursor: -moz-zoom-in;
  cursor: zoom-in;
}

.mfp-auto-cursor .mfp-content {
  cursor: auto;
}

.mfp-close,
.mfp-arrow,
.mfp-preloader,
.mfp-counter {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.mfp-loading.mfp-figure {
  display: none;
}

.mfp-hide {
  display: none !important;
}

.mfp-preloader {
  color: #cccccc;
  position: absolute;
  top: 50%;
  width: auto;
  text-align: center;
  margin-top: -0.8em;
  left: 8px;
  right: 8px;
  z-index: 1044;
}

.mfp-preloader a {
  color: #cccccc;
}

.mfp-preloader a:hover {
  color: white;
}

.mfp-s-ready .mfp-preloader {
  display: none;
}

.mfp-s-error .mfp-content {
  display: none;
}

button.mfp-close,
button.mfp-arrow {
  overflow: visible;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  display: block;
  outline: none;
  padding: 0;
  z-index: 1046;
  -webkit-box-shadow: none;
  box-shadow: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

.mfp-close {
  width: 44px;
  height: 44px;
  line-height: 44px;
  position: absolute;
  right: 0;
  top: 0;
  text-decoration: none;
  text-align: center;
  opacity: 0.65;
  padding: 0 0 18px 10px;
  color: white;
  font-style: normal;
  font-size: 28px;
  font-family: Arial, Baskerville, monospace;
}

.mfp-close:hover,
.mfp-close:focus {
  opacity: 1;
}

.mfp-close:active {
  top: 1px;
}

.mfp-close-btn-in .mfp-close {
  color: #333333;
}

.mfp-image-holder .mfp-close,
.mfp-iframe-holder .mfp-close {
  color: white;
  background: transparent;
  right: -6px;
  text-align: right;
  padding-right: 6px;
  width: 100%;
}

.mfp-counter {
  position: absolute;
  top: 0;
  right: 0;
  color: #cccccc;
  font-size: 12px;
  line-height: 18px;
}

.mfp-arrow {
  position: absolute;
  opacity: 0.65;
  margin: 0;
  top: 50%;
  margin-top: -55px;
  padding: 0;
  width: 90px;
  height: 110px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.mfp-arrow:active {
  margin-top: -54px;
}

.mfp-arrow:hover,
.mfp-arrow:focus {
  opacity: 1;
}

.mfp-arrow:before,
.mfp-arrow:after,
.mfp-arrow .mfp-b,
.mfp-arrow .mfp-a {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 35px;
  margin-left: 35px;
  border: medium inset transparent;
}

.mfp-arrow:after,
.mfp-arrow .mfp-a {
  border-top-width: 13px;
  border-bottom-width: 13px;
  top: 8px;
}

.mfp-arrow:before,
.mfp-arrow .mfp-b {
  border-top-width: 21px;
  border-bottom-width: 21px;
}

.mfp-arrow-left {
  left: 0;
}

.mfp-arrow-left:after,
.mfp-arrow-left .mfp-a {
  border-right: 17px solid white;
  margin-left: 31px;
}

.mfp-arrow-left:before,
.mfp-arrow-left .mfp-b {
  margin-left: 25px;
  border-right: 27px solid #3f3f3f;
}

.mfp-arrow-right {
  right: 0;
}

.mfp-arrow-right:after,
.mfp-arrow-right .mfp-a {
  border-left: 17px solid white;
  margin-left: 39px;
}

.mfp-arrow-right:before,
.mfp-arrow-right .mfp-b {
  border-left: 27px solid #3f3f3f;
}

.mfp-iframe-holder {
  padding-top: 40px;
  padding-bottom: 40px;
}

.mfp-iframe-holder .mfp-content {
  line-height: 0;
  width: 100%;
  max-width: 900px;
}

.mfp-iframe-holder .mfp-close {
  top: -40px;
}

.mfp-iframe-scaler {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
}

.mfp-iframe-scaler iframe {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  background: black;
}

.mfp-arrow.mfp-arrow-left.mfp-prevent-close,
.mfp-arrow.mfp-arrow-right.mfp-prevent-close {
  background: transparent;
}

/* Main image in popup */
img.mfp-img {
  /* cursor: w-resize; */
  width: auto;
  max-width: 100%;
  height: auto;
  display: block;
  line-height: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 0 40px;
  margin: 0 auto;
}

/* The shadow behind the image */
.mfp-figure {
  line-height: 0;
}

.mfp-figure:after {
  content: "";
  position: absolute;
  left: 0;
  top: 40px;
  bottom: 40px;
  display: block;
  right: 0;
  width: auto;
  height: auto;
  z-index: -1;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  background: #444444;
}

.mfp-figure small {
  color: #bdbdbd;
  display: block;
  font-size: 12px;
  line-height: 14px;
}

.mfp-bottom-bar {
  margin-top: -36px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  cursor: auto;
}

.mfp-title {
  text-align: left;
  line-height: 18px;
  color: #f3f3f3;
  word-wrap: break-word;
  padding-right: 36px;
}

.mfp-image-holder .mfp-content {
  max-width: 100%;
}

/* .mfp-gallery .mfp-image-holder .mfp-figure {
  cursor: pointer; } */
@media screen and (max-width: 800px) and (orientation: landscape),
screen and (max-height: 300px) {

  /**
       * Remove all paddings around the image on small screen
       */
  .mfp-img-mobile .mfp-image-holder {
    padding-left: 0;
    padding-right: 0;
  }

  .mfp-img-mobile img.mfp-img {
    padding: 0;
  }

  .mfp-img-mobile .mfp-figure {
    /* The shadow behind the image */
  }

  .mfp-img-mobile .mfp-figure:after {
    top: 0;
    bottom: 0;
  }

  .mfp-img-mobile .mfp-figure small {
    display: inline;
    margin-left: 5px;
  }

  .mfp-img-mobile .mfp-bottom-bar {
    background: rgba(0, 0, 0, 0.6);
    bottom: 0;
    margin: 0;
    top: auto;
    padding: 3px 5px;
    position: fixed;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mfp-img-mobile .mfp-bottom-bar:empty {
    padding: 0;
  }

  .mfp-img-mobile .mfp-counter {
    right: 5px;
    top: 3px;
  }

  .mfp-img-mobile .mfp-close {
    top: 0;
    right: 0;
    width: 35px;
    height: 35px;
    line-height: 35px;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    text-align: center;
    padding: 0;
  }
}

@media all and (max-width: 900px) {
  .mfp-arrow {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }

  .mfp-arrow-left {
    -webkit-transform-origin: 0;
    transform-origin: 0;
  }

  .mfp-arrow-right {
    -webkit-transform-origin: 100%;
    transform-origin: 100%;
  }

  .mfp-container {
    padding-left: 6px;
    padding-right: 6px;
  }
}

.mfp-ie7 .mfp-img {
  padding: 0;
}

.mfp-ie7 .mfp-bottom-bar {
  width: 600px;
  left: 50%;
  margin-left: -300px;
  margin-top: 5px;
  padding-bottom: 5px;
}

.mfp-ie7 .mfp-container {
  padding: 0;
}

.mfp-ie7 .mfp-content {
  padding-top: 44px;
}

.mfp-ie7 .mfp-close {
  top: 0;
  right: 0;
  padding-top: 0;
}

/* animate in */
.my-mfp-slide-bottom.mfp-ready .mfp-content {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  opacity: 1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

/* animate out */
.my-mfp-slide-bottom.mfp-removing .mfp-content {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -ms-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
}

/* Dark overlay, start state */
.my-mfp-slide-bottom.mfp-bg {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  -webkit-transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  -ms-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
}

/* animate in */
.my-mfp-slide-bottom.mfp-ready.mfp-bg {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  filter: alpha(opacity=80);
  opacity: 0.8;
}

/* animate out */
.my-mfp-slide-bottom.mfp-removing.mfp-bg {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
}

/* Extras class
-------------------------------------------------------------- */
.mt62 {
  margin-top: 62px;
}

.mb22 {
  margin-bottom: 22px;
}

.font-st2 {
  font-size: 18px;
  line-height: 1.77;
}

.mt40 {
  margin-top: 40px;
}

.show-shadow {
  padding: 20px !important;
  margin: -20px !important;
}

.bg1 {
  background-color: #f9faff;
}

.position-relative {
  position: relative;
}

.ml-5 {
  margin-left: -5px;
}

.ml-20 {
  margin-left: -20px;
}

.mt103 {
  margin-top: 103px;
}

.mb5 {
  margin-bottom: 5px;
}

.pb10 {
  padding: 0 10%;
}

.mb50 {
  margin-bottom: 50px;
}

.title-section.mb58 {
  margin-bottom: 58px;
}

.title-section.mb50 {
  margin-bottom: 50px;
}

.title-section.mb22 {
  margin-bottom: 22px;
}

.title-section.mb0 {
  margin-bottom: 0;
}

.title-section.mb61 {
  margin-bottom: 61px;
}

.title-section.mb38 {
  margin-bottom: 38px;
}

.title-section.mb52 {
  margin-bottom: 52px;
}

.title-section .subtitle.mb0 {
  margin-bottom: 0;
}

.title-section .subtitle.mb1 {
  margin-bottom: 1px;
}

.title-section .subtitle.mb2 {
  margin-bottom: 2px;
}

.title-section .subtitle.mb4 {
  margin-bottom: 4px;
}

.title-section .subtitle.mb6 {
  margin-bottom: 6px;
}

.mt51 {
  margin-top: 51px;
}

.pd22 {
  padding: 0 22%;
}

.mb37 {
  margin-bottom: 37px;
}

.mb74 {
  margin-bottom: 74px;
}

.mb36 {
  margin-bottom: 36px;
}

.mb19 {
  margin-bottom: 19px;
}

.mb40 {
  margin-bottom: 40px;
}

.mb32 {
  margin-bottom: 32px;
}

/* Reponsive
-------------------------------------------------------------- */
@media only screen and (max-width: 1700px) {
  .tf-section.tf-about.style2 .content-box {
    padding-right: 28%;
  }
}

@media only screen and (max-width: 1600px) {
  .tf-section.tf-about.style2 .content-box {
    padding-right: 23%;
  }

  .home2 .wrap-counter {
    padding: 52px 100px 45px;
  }
}

@media only screen and (max-width: 1440px) {
  .tf-section.tf-about.style2 .content-box {
    padding-right: 10%;
  }
}

@media only screen and (max-width: 1440px) {
  .header #header-inner .header-right .flat-show-search {
    margin-left: 20px;
    padding-left: 20px;
  }
}

@media only screen and (max-width: 1200px) {
  .pg-project #sidebar .widget {
    padding: 50px 30px;
  }

  .pg-project #sidebar .widget.widget-picture {
    padding: 35px 30px;
    margin-bottom: 0;
  }

  .pg-service-details .tf-section.tf-post #sidebar .widget {
    padding: 50px 20px 30px 20px;
  }

  .pg-service-details .tf-section.tf-post #sidebar .widget.widget-picture {
    padding: 10px 20px 50px 20px;
  }

  .service-details .content-inner .image-box .content {
    padding-left: 30px;
    padding-right: 0;
  }

  .service-details .content-inner .image-box .content p {
    margin-bottom: 15px;
  }

  .slider-post:hover {
    cursor: pointer;
  }

  .home2 .wrap-counter {
    padding: 52px 50px 45px;
  }

  .tf-section.tf-about.style2 .content-box {
    padding-right: 0%;
  }

  .tf-testimonial .swiper-pagination.style2 {
    right: 15px;
  }

  .icon-box.style2 .icon {
    margin-right: 0;
  }

  .icon-box.style2 .content .title {
    padding: 0;
    margin-right: 0;
  }

  .tf-section.tf-about .content-box {
    padding-left: 0;
    padding-right: 0;
  }

  .tf-section.tf-about .content-box .title-section {
    padding-right: 0;
  }

  #sidebar .widget.widget-category,
  #sidebar .widget.widget-search,
  #sidebar .widget.widget-recent-posts,
  #sidebar .widget.widget-picture {
    padding: 30px;
  }

  #topbar .topbar-right .wrap-social p {
    display: none;
  }

  .header #header-inner #main-nav {
    right: 0;
    left: auto;
  }

  .header #header-inner #main-nav .menu {
    justify-content: flex-end;
  }

  .header #header-inner .header-right {
    display: none;
  }

  .contact-box .box {
    padding-left: 0 !important;
  }

  .contact-box .box .icon {
    margin-right: 15px;
  }

  .contact-box .box .content {
    padding-right: 15px;
  }
}

@media only screen and (max-width: 991px) {
  .tf-section.tf-about.style2 .image-about .image-style {
    right: 0;
  }

  .contact-box {
    flex-wrap: wrap;
  }

  .contact-box .box {
    margin-bottom: 30px;
    width: calc(50% - 30px);
  }

  .pg-contact .tf-section.tf-contact .contact-form .contact-form {
    padding-right: 0;
    margin-bottom: 40px;
  }

  .flat-map {
    margin: 0;
  }

  .pg-project .tf-section.tf-project h2.title {
    margin-bottom: 40px;
  }

  .service-details .content-inner .icon-list li.style {
    margin-left: 30px;
  }

  .service-details .image img {
    width: 100%;
  }

  .content-values {
    padding-right: 0;
  }

  .image-values {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }

  .slider-service:hover {
    cursor: ew-resize;
  }

  .tf-section.tf-blog .wrap-title .desc {
    padding-left: 0;
  }

  .team-box {
    margin-bottom: 30px;
  }

  .team-box .image img {
    width: 100%;
  }

  .wrap-title .desc {
    padding-left: 0;
  }

  .get-a-quote-form,
  .get-a-quote-content {
    padding: 0;
  }

  .wrap-counter {
    padding: 50px 0 20px;
    flex-wrap: wrap;
  }

  .wrap-counter .box-couter {
    width: 50%;
    padding: 0 15px;
    margin-bottom: 30px;
  }

  .pb10 {
    padding: 0;
  }

  .about-fx {
    flex-wrap: wrap;
  }

  .about-fx .icon-box {
    width: calc(50% - 30px);
    margin-bottom: 30px;
  }

  .tf-section.tf-about.style1 .image-about {
    margin-bottom: 40px;
  }

  .tf-section.tf-about.style1 .image-about .image {
    padding-right: 20%;
  }

  .tf-section.tf-about.style1 .image-about .image img {
    width: 100%;
  }

  .tf-section.tf-about.style1 .image-about .image-right {
    padding-left: 30%;
  }

  .tf-section.tf-about.style1 .image-about .image-right img {
    width: 100%;
  }

  .about-box.effect1 {
    right: 0;
  }

  .image-about .image-right {
    padding-right: 0;
  }

  .home2.main .box-slider {
    width: 100%;
  }

  .home2.main .page-title {
    padding: 150px 0 100px;
  }

  .home2.main .page-title .button-slider {
    display: none;
  }

  .main .page-title {
    padding: 100px 0;
  }

  .main .page-title .button-slider {
    display: none;
  }

  .main .box-slider .title {
    font-size: 80px;
  }

  .pd22 {
    padding: 0;
  }

  .home2 .tf-about .image-about {
    margin-bottom: 40px;
  }

  .tf-post .wrap-fx {
    display: block;
  }

  .tf-post #sidebar,
  .tf-post article {
    width: 100%;
    padding: 0;
  }

  .tf-post article {
    margin-bottom: 50px;
  }

  #topbar {
    height: auto;
  }

  #topbar .topbar-inner {
    display: block;
  }

  #topbar .topbar-inner .topbar-left,
  #topbar .topbar-inner .topbar-right {
    width: 100%;
  }

  #topbar .topbar-inner .topbar-left {
    margin-top: 0;
    margin-bottom: 10px;
  }

  #topbar .topbar-inner .topbar-left ul {
    justify-content: center;
  }

  #topbar .topbar-inner .topbar-right {
    justify-content: center;
  }

  #sidebar .widget {
    margin-bottom: 60px;
  }

  .mobile-button {
    display: block;
  }

  #footer .footer-main .widget {
    width: 50%;
  }

  #footer .footer-main .widget.widget-subscribe,
  #footer .footer-main .widget.widget-service,
  #footer .footer-main .widget.widget-infomation,
  #footer .footer-main .widget.widget-logo {
    width: 50%;
    margin-bottom: 30px;
    padding: 0 15px;
  }

  .post .image img {
    width: 100%;
  }

  .wrap-box-details .previous {
    padding-right: 30px;
  }

  .wrap-box-details .next {
    padding-left: 30px;
  }
}

@media only screen and (max-width: 767px) {
  .contact-box {
    flex-wrap: wrap;
  }

  .contact-box .box {
    width: calc(100% - 30px);
  }

  .icon-list li {
    width: calc(100% - 30px);
  }

  .icon-list li.style {
    margin-left: 30px;
  }

  .service-details .content-inner .image-box {
    display: block;
  }

  .service-details .content-inner .image-box .image,
  .service-details .content-inner .image-box .content {
    width: 100%;
  }

  .service-details .content-inner .image-box .image {
    margin-bottom: 30px;
  }

  .service-details .content-inner .image-box .content {
    padding-left: 0;
  }

  .content-values {
    margin-bottom: 40px;
  }

  .home2.main .tf-section.tf-testimonial,
  .home2.main .tf-section.explore-our-work,
  .home2.main .tf-section.service-list {
    padding: 70px 0 0 !important;
  }

  .home2.main .tf-section.tf-video {
    padding: 120px 0 70px !important;
  }

  .home2.main .tf-section.tf-blog,
  .home2.main .tf-section.tf-about {
    padding: 40px 0 0 !important;
  }

  .home2 .tf-about .image-about {
    margin-bottom: 40px;
  }

  .ml-5 {
    margin-left: 0;
  }

  .about-fx.mt103 {
    margin-top: 70px;
  }

  .swiper-pagination {
    display: none;
  }

  .wrap-title {
    display: block;
  }

  .wrap-title .title-section {
    width: calc(100% - 30px);
  }

  .wrap-title .desc {
    width: calc(100% - 30px);
    padding-left: 0;
  }

  .get-a-quote-form {
    margin-bottom: 40px;
  }

  .tf-section.tf-video {
    padding: 70px 0 160px !important;
  }

  .tf-section.tf-about.style1 .image-about .image {
    padding-right: 10%;
  }

  .tf-section.tf-about.style1 .image-about .image-right {
    padding-left: 15%;
  }

  .title-section {
    margin-bottom: 30px !important;
  }

  .title-section .title {
    font-size: 45px;
  }

  .get-a-quote-content .title {
    font-size: 45px;
  }

  .main .box-slider .title {
    font-size: 58px;
  }

  .breadcrumbs .heading {
    font-size: 40px;
    margin-bottom: 0;
  }

  #topbar .topbar-inner .topbar-left {
    display: none;
  }

  .tf-section.mb-pd0 {
    padding-bottom: 0 !important;
  }

  .tf-section.mobie-pb40 {
    padding-bottom: 40px !important;
  }

  .mobie-mb0 {
    margin-bottom: 0 !important;
  }

  .tf-section {
    padding: 70px 0 70px !important;
  }

  .tf-section.mobie-pd0 {
    padding-bottom: 0 !important;
  }

  .tf-section.mobie-pd40 {
    padding-bottom: 40px !important;
  }

  .tf-section.mobie-pt40 {
    padding-top: 40px !important;
  }

  .pg-team #footer .footer-main,
  #footer .footer-main {
    padding: 70px 0 40px;
  }

  .inner-page-style .tf-section.tf-video {
    padding: 70px 0 251px !important;
  }
}

@media only screen and (max-width: 600px) {
  #footer .footer-bottom {
    height: auto;
  }

  #footer .footer-bottom .copyright p {
    margin: 10px 0;
  }

  .home2 .tf-section.get-a-quote .get-a-quote-content .wrap-fx {
    display: block;
    padding-left: 0;
  }

  .home2 .tf-section.get-a-quote .get-a-quote-content .wrap-fx .icon-box {
    width: 100%;
    max-width: 100%;
  }

  .home2 .tf-section.get-a-quote .get-a-quote-content .wrap-fx .icon-box:nth-child(2) {
    margin-top: 30px;
    margin-left: 0;
  }

  .blog-post.style2 .bottom .readmore {
    margin-right: 30px;
  }

  .tf-section.tf-about.style2 .image-about .image-right {
    margin-top: 30px;
    padding: 0;
  }

  .tf-section.tf-about.style2 .image-about .image-right img {
    width: 100%;
  }

  .tf-section.tf-about.style2 .image-about .image-style {
    position: relative;
    top: 0;
    margin-top: 30px;
  }

  .tf-section.tf-about.style2 .image-about .image-style img {
    width: 100%;
  }

  .tf-section.tf-about.style2 .image-about .image-style .boder::after {
    display: none;
  }

  .tf-section.tf-about.style2 .image-about .image {
    padding: 0;
  }

  .tf-section.tf-about.style2 .image-about .image img {
    margin: 0;
  }

  .tf-section.tf-404 .content-section .title {
    font-size: 150px;
  }

  .tf-section.tf-404 .content-section h2 {
    font-size: 40px;
  }

  .pg-contact .tf-section.tf-contact .contact-form .contact-form fieldset {
    width: calc(100% - 30px);
  }

  .wrap-counter .box-couter:nth-child(2) .icon {
    margin-top: 0;
    margin-bottom: 15px;
    margin-left: 0;
  }

  .wrap-counter .box-couter:nth-child(3) {
    margin-left: 0;
  }

  .wrap-counter .box-couter:nth-child(3) .icon {
    padding-top: 0;
  }

  .about-fx .icon-box {
    width: calc(100% - 30px);
  }

  #topbar .topbar-inner .topbar-left ul {
    display: block;
    text-align: center;
  }

  #topbar .topbar-inner .topbar-left ul li {
    margin-left: 0;
    margin-right: 0;
  }

  #topbar .topbar-inner .topbar-left ul li:first-child {
    margin-bottom: 5px;
  }

  #topbar .topbar-inner .topbar-right {
    justify-content: center;
  }

  #topbar .topbar-inner .social li {
    margin-left: 20px;
  }

  #topbar .topbar-inner .social li:first-child {
    margin-left: 0;
  }

  .wrap-counter .box-couter {
    width: 100%;
  }
}

@media only screen and (max-width: 500px) {
  .blogdetails .post .content {
    padding: 20px 30px;
  }

  .blogdetails .post .content ul {
    flex-wrap: wrap;
  }

  .blogdetails .post .content ul li {
    margin-bottom: 10px;
    margin-left: 0;
    margin-right: 15px;
  }

  .blogdetails .post .content ul li a {
    margin-left: 0;
  }

  .blogdetails .post .content ul li a:last-child {
    margin-left: 0;
  }

  .tf-section.tf-about.style2 .content-box .wrap-fx .about-box {
    margin-bottom: 30px;
  }

  .content-box .wrap-fx {
    display: block;
  }

  .content-box .wrap-fx .icon-box {
    width: 100%;
  }

  .content-box .wrap-fx .icon-box.style1 {
    justify-content: flex-start;
  }

  .content-box .wrap-fx .icon-box:nth-child(1) {
    margin-bottom: 20px;
  }

  .blogdetails article .image-box {
    display: block;
    text-align: center;
  }

  .blogdetails article .image-box .image {
    margin-bottom: 20px;
  }

  .blogdetails article .image-box .social {
    position: relative;
    left: 0;
    top: 0;
    right: auto;
    justify-content: center;
  }

  .blogdetails article .image-box .social li {
    margin: 0 10px 0 0;
  }

  .blogdetails article .image-box .content {
    margin-bottom: 15px;
  }

  .blogdetails .form-comment form fieldset {
    width: calc(100% - 30px);
  }

  .post .fx-social-tag {
    display: block;
    text-align: center;
  }

  .post .fx-social-tag .social {
    justify-content: center;
    margin-bottom: 15px;
  }

  .post .fx-social-tag .tag {
    justify-content: center;
  }

  .wrap-box-details {
    display: block;
  }

  .wrap-box-details .previous,
  .wrap-box-details .next {
    width: 100%;
    text-align: center;
  }

  .wrap-box-details .previous {
    margin-bottom: 15px;
  }

  #footer .footer-main .widget.widget-subscribe,
  #footer .footer-main .widget.widget-service,
  #footer .footer-main .widget.widget-infomation,
  #footer .footer-main .widget.widget-logo {
    width: 100%;
  }
}

/* themesflat animation
-------------------------------------------------------------- */
.tf-animated-twocolumn .item-animated.first {
  transform: translateX(-15px);
}

.tf-animated-twocolumn .item-animated.last {
  transform: translateX(15px);
}

.tf-animated-fadeup.img-box-service .content,
.tf-animated-fadeup .image-faq .image,
.tf-animated-fadeup .title-section,
.tf-animated-fadeup .breadcrumbs,
.tf-animated-fadeup .animated-effect {
  opacity: 0;
  -webkit-transform: translate3d(0, 30px, 0);
  transform: translate3d(0, 30px, 0);
}

.tf-animated-fadeup.img-box-service .content.tfanimated,
.tf-animated-fadeup .image-faq .image.tfanimated,
.tf-animated-fadeup .title-section.tfanimated,
.tf-animated-fadeup .breadcrumbs.tfanimated,
.tf-animated-fadeup .animated-effect.tfanimated {
  -webkit-transform: none !important;
  -ms-transform: none !important;
  transform: none !important;
  opacity: 1 !important;
  webkit-transition: opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
  transition: opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
  transition: transform 0.8s ease-in-out, opacity 0.8s linear;
  transition: transform 0.8s ease-in-out, opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
}

/* hover top */
.tf-animated-hover-top {
  transition: all 0.5s;
  transform: translateY(0);
}

.tf-animated-hover-top:hover {
  transform: translateY(-30px);
}

.tf-animated-hover-top-s2 {
  transition: all 0.5s;
  transform: translateY(0);
}

.tf-animated-hover-top-s2:hover {
  transform: translateY(-10px);
}

.tf-animated-fadeleft.img-box-service .image,
.tf-animated-fadeleft .box-left,
.tf-animated-fadeleft .boder-rd10,
.tf-animated-fadeleft .animated-effect {
  opacity: 0;
  -webkit-transform: translate3d(-30px, 0, 0);
  transform: translate3d(-30px, 0, 0);
}

.tf-animated-fadeleft.img-box-service .image.tfanimated,
.tf-animated-fadeleft .box-left.tfanimated,
.tf-animated-fadeleft .boder-rd10.tfanimated,
.tf-animated-fadeleft .animated-effect.tfanimated {
  -webkit-transform: none !important;
  -ms-transform: none !important;
  transform: none !important;
  opacity: 1 !important;
  webkit-transition: opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
  transition: opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
  transition: transform 0.8s ease-in-out, opacity 0.8s linear;
  transition: transform 0.8s ease-in-out, opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
}

.tf-animated-faderight.img-box-service .image,
.tf-animated-faderight .image-faq .image2,
.tf-animated-faderight .box-right,
.tf-animated-faderight .bg-about,
.tf-animated-faderight .img-style,
.tf-animated-faderight .animated-effect {
  opacity: 0;
  -webkit-transform: translate3d(30px, 0, 0);
  transform: translate3d(30px, 0, 0);
}

.tf-animated-faderight.img-box-service .image.tfanimated,
.tf-animated-faderight .image-faq .image2.tfanimated,
.tf-animated-faderight .box-right.tfanimated,
.tf-animated-faderight .bg-about.tfanimated,
.tf-animated-faderight .img-style.tfanimated,
.tf-animated-faderight .animated-effect.tfanimated {
  -webkit-transform: none !important;
  -ms-transform: none !important;
  transform: none !important;
  opacity: 1 !important;
  webkit-transition: opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
  transition: opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
  transition: transform 0.8s ease-in-out, opacity 0.8s linear;
  transition: transform 0.8s ease-in-out, opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
}

.tf-animated-fadedown .animated-effect {
  opacity: 0;
  -webkit-transform: translate3d(0, -30px, 0);
  transform: translate3d(0, -30px, 0);
}

.tf-animated-fadedown .animated-effect.tfanimated {
  -webkit-transform: none !important;
  -ms-transform: none !important;
  transform: none !important;
  opacity: 1 !important;
  webkit-transition: opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
  transition: opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
  transition: transform 0.8s ease-in-out, opacity 0.8s linear;
  transition: transform 0.8s ease-in-out, opacity 0.8s linear, -webkit-transform 0.8s ease-in-out;
}

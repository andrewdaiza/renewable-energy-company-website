let aboutUs = document.querySelector('.aboutus-1');
let aboutLink = document.querySelector('.nested-1');
let vision = document.querySelector('.vision-2');
let visionLink = document.querySelector('.nested-2');
let mission = document.querySelector('.mission-3');
let missionLink = document.querySelector('.nested-3');
let approach = document.querySelector('.approach-4');
let approachLink = document.querySelector('.nested-4');

aboutUs.addEventListener('mouseover', aboutMouseOver);
aboutUs.addEventListener('mouseout', aboutMouseOut);
aboutLink.addEventListener('mouseover', aboutMouseOver);
aboutLink.addEventListener('mouseout', aboutMouseOut);

vision.addEventListener('mouseover', visionMouseOver);
vision.addEventListener('mouseout', visionMouseOut);
visionLink.addEventListener('mouseover', visionMouseOver);
visionLink.addEventListener('mouseout', visionMouseOut);

mission.addEventListener('mouseover', missionMouseOver);
mission.addEventListener('mouseout', missionMouseOut);
missionLink.addEventListener('mouseover', missionMouseOver);
missionLink.addEventListener('mouseout', missionMouseOut);

approach.addEventListener('mouseover', approachMouseOver);
approach.addEventListener('mouseout', approachMouseOut);
approachLink.addEventListener('mouseover', approachMouseOver);
approachLink.addEventListener('mouseout', approachMouseOut);

function aboutMouseOver() {
  aboutUs.classList.add('moreinfo-links-hover');
}
function aboutMouseOut() {
  aboutUs.classList.remove('moreinfo-links-hover');
}
function visionMouseOver() {
  vision.classList.add('moreinfo-links-hover');
}
function visionMouseOut() {
  vision.classList.remove('moreinfo-links-hover');
}
function missionMouseOver() {
  mission.classList.add('moreinfo-links-hover');
}
function missionMouseOut() {
  mission.classList.remove('moreinfo-links-hover');
}
function approachMouseOver() {
  approach.classList.add('moreinfo-links-hover');
}
function approachMouseOut() {
  approach.classList.remove('moreinfo-links-hover');
}

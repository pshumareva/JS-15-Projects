// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // console.log(links.classList); // shows you all the classes that "links" has
    // console.log(links.classList.contains('random')); // false

    // if (links.classList.contains('show-links')){
    //     links.classList.remove('show-links'); //if the class "show-links" is there- remove it
    // } else {
    //     links.classList.add('show-links'); //if its not - add it
    // }

    links.classList.toggle('show-links'); //toggles the class in one line
    

})
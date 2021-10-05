const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
/******************************
 * The event listener will invoke 
 * the makeHero() function when 
 * the form is submitted.
 ******************************/
function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value; // Create a real name property that's displays hidden text    
    // Create a list of all powers that are attached to this hero
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    hero.category = form.category.value; // The value of the radio button that was selected is stored inform.category.value
    hero.age = form.age.value; // Receive the value for the hero's age property
    hero.city = form.city.value; // Receive the value for the hero's city property
    hero.origin = form.origin.value; // Receive the value for the hero's origin-story property
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}
/******************************
 * It is also possible to implement 
 * custom form validation using 
 * JavaScript.
 ******************************/
form.addEventListener('submit',validate,false);
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}
/******************************
 * We can improve the usability 
 * of the form further by giving 
 * instant feedback, instead of 
 * waiting for the form to be 
 * submitted.
 ******************************/
form.heroName.addEventListener('keyup',validateInline,false);
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}
/******************************
 * Another useful technique that 
 * can aid usability is to disable 
 * the submit button if there are 
 * errors on the form. If the 
 * submit button is disabled then 
 * no action is taken when it’s 
 * clicked.
 ******************************/
form.heroName.addEventListener('keyup',disableSubmit,false);
function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}
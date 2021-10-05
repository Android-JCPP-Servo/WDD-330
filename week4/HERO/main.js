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
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}
// Input Fields
// Text Input Fields

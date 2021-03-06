// There’s a ladder object that allows to go up and down:
let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() {
        alert('Step ' + this.step);
    }
};
// Now, if we need to make several calls in sequence, can do it like this:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
// Modify the code of up, down and showStep to make the calls chainable, like this:
ladder.up().up().down().showStep(); // 1
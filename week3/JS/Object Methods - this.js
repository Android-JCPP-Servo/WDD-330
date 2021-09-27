// Task 1: Using "this" in object literal
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
let user = makeUser();
alert(user.ref.name);
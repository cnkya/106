function sayHello() {
    console.log("Hello World")//displays the message in the console//This is the child of sayHello function
}
function sayGoodbye() {
    console.log("boy bye")//displays the message in the console//This is the child of sayGoodbye function
}
function init() {//this is the child of winddow.onload
    console.log("Whats up world")//displays the message in the console//this is the child of init function
    sayHello();//calls the function//this is the child of the init function
    sayGoodbye();//calls the function//this is the child of the init function
}
window.onload = init;//calls the init function when the page is loaded// This is the parent
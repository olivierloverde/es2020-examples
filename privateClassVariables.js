class MyClass {
    #privateVariable = "Hello private world"

    helloWorld() { console.info(this.#privateVariable) }
}

const myClass = new MyClass()
myClass.helloWorld() // works
console.info(myClass.#helloWorld) // SyntaxError: Private field '#helloWorld' must be declared in an enclosing class


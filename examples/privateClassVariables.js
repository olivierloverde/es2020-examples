class MyClass {
    #privateVariable = "Hello private world"

    helloWorld() { console.info(this.#privateVariable) }
}

const myClass = new MyClass()
myClass.helloWorld() // works
console.info(myClass.#privateVariable) // SyntaxError: Private field '#privateVariable' must be declared in an enclosing class


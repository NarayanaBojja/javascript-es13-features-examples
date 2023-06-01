class Person {
    #firstName = 'Narayana';
    #lastName = 'Bojja';
    #getFirstName() {
        return this.#firstName;
    }
    #getLastName() {
        return this.#lastName;
    }
    getFullName() {
        return this.#getFirstName() + " " + this.#getLastName();
    }
}
const personObj = new Person();
// console.log(personObj.#firstName);
const fullName = personObj.getFullName();
console.log(fullName);
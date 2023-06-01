class Person {
    static name;
    static {
        this.name = 'Narayana';
    }
     static getName() {
        return this.name;
     }
}
const fullName = Person.getName();
console.log(fullName);
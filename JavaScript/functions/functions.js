let person = {
    name: "Emilia",
    age: 22,
    print: function () {
        let result = this.name + " " + this.age;
        console.log(result);
    },
    sister: { sName: "No c" }
}

person.print();
console.log(person.sister.sName);
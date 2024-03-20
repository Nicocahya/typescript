"use strict";
describe('any', function () {
    it('should suport in typescript', function () {
        const person = {
            id: 1,
            name: "Nico cahya",
            age: 17
        };
        person.age = 18;
        person.address = "Indonesia";
        console.info(person);
    });
});

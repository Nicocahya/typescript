"use strict";
describe('', function () {
    it('should same with javascript', function () {
        const names = ["nico", "karin", "kise"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', function () {
        const hobbies = ["membaca", "bermain game"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
    });
    it('should support tupple', function () {
        const person = ["nico", "cahya", 20];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});

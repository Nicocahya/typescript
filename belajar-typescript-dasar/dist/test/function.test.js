"use strict";
describe('Function', function () {
    it('should support in typescript', function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Nico")).toBe("Hello Nico");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Nico");
    });
    it('should support default value', function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Nico")).toBe("Hello Nico");
    });
    it('should support rest parameter', function () {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it('should support optional parameter', function () {
        function sayHello(fristName, lastName) {
            if (lastName) {
                return `Hello ${fristName} ${lastName}`;
            }
            else {
                return `Hello ${fristName}`;
            }
        }
        expect(sayHello("Nico")).toBe("Hello Nico");
        expect(sayHello("Nico", "Cahya")).toBe("Hello Nico Cahya");
    });
    it('should support function overloading', function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("Nico")).toBe("NICO");
    });
});

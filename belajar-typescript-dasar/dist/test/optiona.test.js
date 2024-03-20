"use strict";
describe('Optional Parameter', function () {
    it('should support nul and undefined', function () {
        function sayHello(name) {
            if (name) {
                console.info('Hello ${name}');
            }
            else {
                console.info('Hello');
            }
        }
        sayHello("Nico");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});

import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello nico', function () {
        expect(sayHello('nico')).toBe('Hello nico');
    });
});

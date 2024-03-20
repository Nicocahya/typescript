describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: 'ABS27 SPEED SHOP',
            nib: "1324212",
            npwp: "7862726"
        };
        seller.name = "ABS27 SPEED SHOP";
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', function () {
        const names = ["Nico", "Cahya", "Kisee"];
        console.info(names);
    });
    it('should support indexable interface for non number index', function () {
        const dictionary = {
            "name": "Nico",
            "address": "Indonesia"
        };
        expect(dictionary["name"]).toBe("Nico");
        expect(dictionary["address"]).toBe("Indonesia");
    });
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "Nico",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Kisee",
            division: "IT",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
    it('should support in interface', function () {
        const person = {
            name: "Nico",
            sayHello: function (name) {
                return `Hello ${name}, my name if ${this.name}`;
            }
        };
        console.info(person.sayHello("Budi"));
    });
    it('should support intersection types', function () {
        const domain = {
            id: "1",
            name: "Nico"
        };
        console.info(domain);
    });
    it('should support type assertions', function () {
        const person = {
            name: "Nico",
            age: 17
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};

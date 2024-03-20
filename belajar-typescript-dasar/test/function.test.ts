describe('Function', function () {
    it('should support in typescript', function () {

        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Nico")).toBe("Hello Nico");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Nico")
    })

    it('should support default value', function () {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Nico")).toBe("Hello Nico");
    })

    it('should support rest parameter', function () {
        function sum(...values: number []): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }

        expect(sum(1,2,3,4,5)).toBe(15);
    })

    it('should support optional parameter', function () {
        function sayHello(fristName : string, lastName? : string ): string {

            if(lastName){
            return `Hello ${fristName} ${lastName}`;
            }else {
            return `Hello ${fristName}`;
            }
        }

        expect(sayHello("Nico")).toBe("Hello Nico");
        expect(sayHello("Nico", "Cahya")).toBe("Hello Nico Cahya")
    })
})
import { CustomerType } from "../src/enum";
describe('Enum', function () {
    it('should support in typescript', function () {
        const customer = {
            id: 1,
            name: "Nico",
            type: CustomerType.GOLD
        };
        console.info(customer);
    });
});

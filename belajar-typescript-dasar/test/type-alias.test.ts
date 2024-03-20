import { Category, Product } from "../src/type-alias"

describe('Type Alias', function () {
    it('should support in typescript', function () {

        const category: Category = {
            id: "1",
            name: "PC"
        }

        const product: Product = {
            id: "1",
            name: "Iphone 16 pro max",
            price: 30000000,
            category: category
        }

        console.info(category)
        console.info(product)
    })
})
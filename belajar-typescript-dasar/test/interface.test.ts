import { Seller } from "../src/seller"

describe('Interface', function () {
    it('should support in typescript', function () {

        const seller: Seller = {
            id: 1,
            name: 'ABS27 SPEED SHOP',
            nib: "1324212",
            npwp: "7862726"
        }

        seller.name = "ABS27 SPEED SHOP"

        console.info(seller);
    })
})
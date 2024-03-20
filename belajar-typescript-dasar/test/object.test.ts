describe('Object', function () {
    it('should support in typescript', function () {

        const person: {id: string, name: string} = {
            id: "1",
            name: "Nico"
        }

        console.info(person);

        person.id = "2";
        person.name = "Cahya";

        console.info(person);
    })
})
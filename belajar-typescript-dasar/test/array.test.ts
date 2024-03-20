describe('', function () {
    it('should same with javascript', function () {

        const names: string[] = ["nico", "karin", "kise"];
        const values: number[] = [1,2,3]

        console.info(names);
        console.info(values);
    })

    it('should support readonly array', function () {

        const hobbies: ReadonlyArray<string> = ["membaca", "bermain game"]
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
    })
})
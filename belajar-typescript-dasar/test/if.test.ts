describe('If Statment', function () {
    it('should support in typescript', function () {

        const examValue = 90;

        if (examValue > 80) {
            console.info("Good");
        } else if (examValue > 60 ) {
            console.info("Not Bad")
        } else {
            console.info("Try Again")
        }
    })

    it('should support ternary operator', function () {

        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Try Again";
        console.info(say);
    })

    it('should support switch statment', function () {

        function sayHello(name: string): string {
            switch(name){
                case "Nico" :
                    return "Hi Nico" ;
                case "Kisee" :
                    return "Hi Kisee" ;
                default :
                    return "Hello"       
            }
        }

        console.info(sayHello("Nico"));
        console.info(sayHello("Kisee"));
        console.info(sayHello("Karina"));
    })
})
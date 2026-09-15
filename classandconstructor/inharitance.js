class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){

        super(username)

        this.email = email;
        this.password = password;

    }

    addCourses(){
        console.log(`A new course added by ${this.username}`);
        
    }
}



const chai = new Teacher("chai","chai@teacher",'aa2343567')

chai.addCourses()


const masalaChai = new User("masalachai")

//masalaChai.addCourses()
chai.logme()

console.log(chai=== masalaChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);

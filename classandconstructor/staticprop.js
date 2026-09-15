class User  {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username : ${this.username}`);
        
    }

    static createdId(){                  // use static to prevent the access of function   kisi bhi child ya inharit ko accse nahi milta hai
        return `123456789`
    }
}


const hitesh = new User("sumit")

// console.log(hitesh.createdId()); 


class Teacher extends User{
    constructor(email, username){
        super(username)
        this.email= email
    }
}


const iphone = new Teacher("iphone",  'iphone@gmail.com')

iphone.logme()

console.log(iphone.createdId());




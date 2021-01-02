

const returnFullName = ( firstName, lastName ) => {
    return  `My name is ${lastName} ${firstName}`
}

const addNumbers = ( num1, num2, num3 ) => {
    return num1 + num2 + num3
}


const returnAge = ( age ) => {
    return age;
}

const returnFullNameAndAge = (firstName,lastName,age) => {
    let fullName = returnFullName( firstName, lastName );
    let myAge = returnAge( age );
    return `${fullName} and i am ${myAge}`
}

class User{
    constructor() {
        
    }

    returnAllUserInfomation = ( firstName, lastName, age ) => {
        
        let userInfo = returnFullNameAndAge(firstName,lastName,age );
        return userInfo;
    }
}

module.exports={returnFullName,addNumbers,returnFullNameAndAge,User}
const {returnFullName, addNumbers,returnFullNameAndAge,User} = require('./testing.js');

//Unit Testing
test( 'This should return my fullname', () => {
    let fullName = returnFullName( 'samuel', 'Adebayo' );
    expect( fullName ).toBe( 'My name is Adebayo samuel' )
} );


test( 'This should return sum of numbers', () => {
    let numbers = addNumbers( 20, 10, 60 )
    expect( numbers ).toBe( 90 )
} );


//Integration Testing

test( "This should return My name is Adebayo samuel and i am 20", () => {
    let fullNameAndAge = returnFullNameAndAge( 'samuel', 'Adebayo', 20 );
    expect( fullNameAndAge ).toBe( 'My name is Adebayo samuel and i am 20' )
} );


test( "This should return My name is Adebayo samuel and i am 50", () => {
    const Users = new User()
    let fullInfo = Users.returnAllUserInfomation( 'samuel', 'Adebayo', 50 );
   
    expect( fullInfo ).toBe( 'My name is Adebayo samuel and i am 50' );
} );

"use strict";
{
    const updateProfile = (personProfile, profileUpdates) => {
        return Object.assign(Object.assign({}, personProfile), profileUpdates);
    };
    const myProfile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com",
    };
    console.log(updateProfile(myProfile, { name: "Apurbo Paul", age: 26 }));
    // Output:{ name: 'Apurbo Paul', age: 26, email: 'alice@example.com' }
}

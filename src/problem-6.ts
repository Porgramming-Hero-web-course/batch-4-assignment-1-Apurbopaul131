{
  //problem-6
  // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    personProfile: Profile,
    profileUpdates: Partial<Profile>
  ): Profile => {
    return { ...personProfile, ...profileUpdates };
  };

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  console.log(updateProfile(myProfile, { name: "Apurbo Paul", age: 26 }));
  // Output:{ name: 'Apurbo Paul', age: 26, email: 'alice@example.com' }
}

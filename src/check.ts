{
  interface Profile {
    [key: string]: any;
  }
  const updateProfile = (obj: Profile, objPro: Partial<Profile>): Profile => {
    for (let objP in objPro) {
      for (let ob in obj) {
        if (objP === ob) {
          obj[ob] = objPro[objP];
          break;
        }
      }
    }
    return obj;
  };

  const Apubo: Profile = {
    name: "Apubo",
    age: 24,
    email: "apurbopaul131@gmail.com",
  };
  const updateApurbo: Partial<Profile> = {
    name: "Antu",
    age: 25,
    address: "hello",
  };
  console.log(updateProfile(Apubo, updateApurbo));
}

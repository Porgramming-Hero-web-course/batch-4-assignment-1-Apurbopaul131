"use strict";
{
    const updateProfile = (obj, objPro) => {
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
    const Apubo = {
        name: "Apubo",
        age: 24,
        email: "apurbopaul131@gmail.com",
    };
    const updateApurbo = {
        name: "Antu",
        age: 25,
        address: "hello",
    };
    console.log(updateProfile(Apubo, updateApurbo));
}

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
    console.log(updateProfile({ name: "Apubo", age: 24, email: "apurbopaul131@gmail.com" }, { name: "Antu", age: 25 }));
}

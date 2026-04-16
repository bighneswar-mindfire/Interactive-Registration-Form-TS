import { type User } from "./types";

export const validateUser=(data:Partial<User>) =>{
    const errors:Record<string,string> = {};
    if(!data.name) errors.name="Name is Required";
    if(!data.phone) errors.phone="Phone is Required";
    if(!data.mail) errors.mail="mail is Required";
    if(!data.gender) errors.gender="gender is Required";

    return errors;
};

export const createRecord=(data:Omit<User,'id'>)=>({

    ...data,
    id:Date.now().toString()
});



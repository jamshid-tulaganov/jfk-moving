//validation functions
 export  const emailValidations = (email) => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(email);
}

export const phoneNumberValidation = (telNumber) => {
    let regex = new RegExp('^(\\([0-9]{3}\\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$');
    return regex.test(telNumber);
}

export const firstNameValidation = (firstName:string) => {
    let regex = new RegExp('/^[a-zA-Z]+ [a-zA-Z]+$/');
    return !regex.test(firstName);
}
export const lastNameValidation = (lastName:string) => {
    let regex = new RegExp('/^[a-zA-Z]+ [a-zA-Z]+$/');
    return !regex.test(lastName);
}

export const validationAll = () => {
    emailValidations();
    phoneNumberValidation();
    firstNameValidation();
    lastNameValidation();
}

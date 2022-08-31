export const zipCodeValidation = (zipcode) => {
    if(!zipcode.includes('_')) {
        return true;
    }
}
//validation payment
export const cardNumberValidation = (cardNumber:string) => {
    if(!cardNumber.includes('_') ) {
        return true
    }else {
        console.log('false')
    }
}

export const dateValidation = (date:string) => {

    if(!date.includes('_') ) {
        return true
    }else {
        console.log('false')
    }

}

export const nameValidation = (name:string) => {
    if(name.length > 0) {
        return true;
    }
}

export const passwordValidation = (password) => {
    if(!password.includes('_') ) {
        return true
    }else {
        console.log('false')
    }
}
export const checkValidData = (email,password) =>{
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.text(email);
    const isPasswordValid =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/.text(password);

    if(!isEmailValid) return "email id is not valid";
    if(!isPasswordValid) return"password is not valid";
    return null;
}
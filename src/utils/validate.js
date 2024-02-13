export const checkValidData = (email,password) =>{
    // const isName = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name)
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const isPasswordValid =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    // const isName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(name);
   
    if(!isEmailValid) return "email id is not valid";
    if(!isPasswordValid||(password==="")) return "password is not valid";
    // if(!isName) return "enter your name"

    return null;
}






    
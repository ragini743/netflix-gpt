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





      // checkValidData(email.current.value,password.current.value)
      // setErrorMessage(checkValidData)}
      // if ((email.current && password.current && name.current) !== null) {
      //   return (
      //     console.log("email", email.current.value),
      //     checkValidData(
      //       email.current.value,
      //       password.current.value,
      //       name.current.value
      //     ),
      //      setErrorMessage(checkValidData)
      //   )
      // }else if(email.current.value){
      //     return (checkValidData(email.current.value,password.current),
      //     console.log("pass",password.current),
      //    setErrorMessage(checkValidData))

      // }else if(email.current.value&&password.current.value){
      //     return (checkValidData(email.current.value,password.current.value),
      //     console.log("I am second elseIf"))
      // }
      //  else {
      //     checkValidData(email.current.value ,password.current.value)
      //  return setErrorMessage(checkValidData);
      // }
    
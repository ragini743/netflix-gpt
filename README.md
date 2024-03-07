# netflix-gpt
### create react app
### configured tailwindcss
### header
### routing of app
### Login form
### signUp form
### Form validation
#### useRef hook
#### firebase setup 
#### deployijng our app to production
#### create a signUp user account
#### implement signIn user Api
#### created Redux store with userSlice
#### implement signOut
#### update profile
#### fetch from tmdb Movies



# features
### login/sign up
#### signin/sign up form 
#### --redirect to browser
### browse
#### --header
#### --main movie
##### ---trailer in background
##### --- title and description
##### --- movieSuggestions
```
movieSuggestion*N in horizontal scroll
```

# netflix-gpt
#### search bar
#### movie suggestions


### how to deploy your project on firebase
command
```
firebase install
firebase
firebase login
firebase init
then configure this option to controll your project  () hosting:configure files for firebase Hosting and (optionally ) setup gitHub Link
ques :what do you want to use as your public directory?build
configure as a single-page app?no
setUp automatic builds and deploy with GitHub?no
npm run build
firebase deploy
```


### how to create authentication
always use web modular API
### how to install redux?
```
npm i -D @reduxjs/toolkit
npm i react-redux
```

### how to create a redux store?
```
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer:{}
})
export default appStore ; 

this  reducer have different reducers from  different slice 

now we have to create a slice

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState :null ,
    reducers:{
        addUser:(state,action)=>{
            return action.payload ;
        } ,
        removeUser:(state,action) =>{
            return null;
        }
    }
}) ;

export const {addUser,removeUser} = userSlice.actions;

export default userSlice.reducer ;



now our previous appStore will update
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer:{ user:userReducer ,}
})
export default appStore ; 

```


### what is onAuthStateChanged ?
it is used when there is auth changed.
if user signedUp and signIn or SignOut
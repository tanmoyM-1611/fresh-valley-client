import React, { useContext, useState } from 'react';

import firebase from "firebase/app"
import "../Login/Login.css"
import "firebase/auth";
// import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from '../../../config/firebase.config';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const [user,setUser]=useState({
    success: false,
    name:'',
    email:'',
    password:'',
    error:'',
    photo:'',
    
  })
  const [newUser,setNewUser]=useState(true)
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
    var googleProvider = new firebase.auth.GoogleAuthProvider();
   
    //google log in
    const handleGoogleSignIn=()=>{
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    var user = result.user;
     console.log(user)
    const {displayName,email}=user
    const logInUser={
      success:true,
      name:displayName,
      email:email,
    }
    setUser(logInUser)
    setLoggedInUser(logInUser)
    storeAuthToken();
    history.replace(from);
  })
  .catch((error) => {  
    const errorMessage = error.message;
    alert(errorMessage);
  });
    }
    
    //sign up
    const handleChange=(event)=>{
     
     let isFormValid=true;
     if(event.target.name==="email"){
      isFormValid=/\S+@\S+\.\S+/.test(event.target.value)
     }
     if(event.target.name==="password"&&event.target.name==="password2"){
      const isPassVaild=event.target.value.length >6 
      const isPassHasNumber= /\d{1}/.test(event.target.value);
      isFormValid=isPassVaild && isPassHasNumber
     }
    //  if(event.target.name==="password2"){
    //   const isPassVaild=event.target.value.length >6 
    //   const isPassHasNumber= /\d{1}/.test(event.target.value);
    //   isFormValid=isPassVaild && isPassHasNumber
    //  }
     if(isFormValid){
       const newUserInfo={...user}
       newUserInfo[event.target.name]=event.target.value
       setUser(newUserInfo)
     }
 
  //     // make API call
  
    }
    const handleSubmit=event=>{
      if(newUser&&user.email&&user.password){
        if(user.password!=user.password2){
          alert("Password don't match");
       }
       else{
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then(res => {
    updateUser(user.name)
  })

  .catch((error) => {
    var errorMessage = error.message;
    // console.log(errorMessage)
    alert( errorMessage)
  });
}
    }
    if(!newUser&&user.email&&user.password){
      firebase.auth().signInWithEmailAndPassword(user.email,user.password)
      .then((res) => {
        const {displayName}=res.user
        // Signed in
        const newUserInfo={...user} 
        newUserInfo.name=displayName;
        newUserInfo.error='';
        newUserInfo.success=true 
        setUser(newUserInfo)
        setLoggedInUser(newUserInfo)
        storeAuthToken();
        history.replace(from);
        
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert( errorMessage)
      });
    }
   
  event.preventDefault();
  }
  //update 
  const updateUser=(name)=>{
    const currentUser = firebase.auth().currentUser;

    currentUser.updateProfile({
    displayName: name, 
}).then(function(res) {
  var userInfo = firebase.auth().currentUser;
  name=userInfo.displayName
  const newUserInfo={...user}
  newUserInfo.name=name;
  newUserInfo.error='';
  newUserInfo.success=true
  setUser(newUserInfo)
  setLoggedInUser(newUserInfo)
  // history.replace(from);
}).catch(function(error) {
  
});
  }

  const storeAuthToken=()=>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      // Send token to your backend via HTTPS
      // ...
      // console.log(idToken)
        sessionStorage.setItem("token",idToken)
    }).catch(function(error) {
      // Handle error
    });
  }
    return (
        <section className="">
            <div id="login-box">
  <div class="left">
    <h1>{newUser?"Sign up":"Log in"}</h1>
    <br />
   
   <form action="" onSubmit={handleSubmit}> 
    
   {newUser && <input type="text" name="name" placeholder="Name" onBlur={handleChange}/>}
    <input type="text" name="email" placeholder="E-mail" required onBlur={handleChange}/>
    <input type="password" name="password" placeholder="Password" required onBlur={handleChange}/>
   { newUser && <input type="password" name="password2" placeholder="Retype password" required onBlur={handleChange}/> }
      {newUser &&
  <div className="d-flex">
   <label style={{paddingRight:"5px"}} for="birthday">Birthday:</label>
    <input type="date" name="birthday" placeholder="Birthday" required onBlur={handleChange}/></div>}
    <input type="submit" name="signup_submit" value={newUser ? "Sign me up" : "Log In"}/>
    </form>
  
  </div>
  <div class="right">
    <span class="loginwith"><br />Social network</span>
    <button  onClick={handleGoogleSignIn} class="social-signin google">Log in with Google+</button>
    
  </div>
  <div class="or">OR</div>
  
  <div className="bottom">
    <p>{newUser?"Already have an account,":"Have no account?"} <strong style={{cursor:"pointer",color:"green"}} onClick={()=>setNewUser(!newUser)}>{newUser?"Log in": "Register"}</strong> </p>
  </div>
</div> 
      </section>
    );
};

export default Login;
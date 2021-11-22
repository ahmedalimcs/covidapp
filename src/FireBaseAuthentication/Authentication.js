import { auth,ref,db,set } from "./firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = ()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  const [name,setName] = useState('');

  console.log(email);
  console.log(password)

  const firebaseSignUp = (f) => {
    f.preventDefault();
     let obj = {
      email,
      password,
    };
    createUserWithEmailAndPassword(auth, obj.email,obj.password)
      .then((resolve) => {
        let uid = resolve.user.uid;
        console.log(uid);
        const refrence = ref(`/user/${obj.uid}`)})
      
      
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });

      console.log(obj)
      

   
    // createUserWithEmailAndPassword(auth,email,password)
    // .then((resolve) => {
    //     let uid = resolve.user.uid;
    //     console.log(uid);
    //     const refrence = ref(db, `/users/${obj.uid}`);
    //     set(refrence, obj).then(() => {
    //       setEmail("");
    //       setPassword("");
    //       setName("");
    //       alert("user created Successfully");
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    // console.log(obj);
  };

  return (
    <>
     <div class="div">
        <h1 className="text-center text-danger">LoginForm</h1>
        <div className="container text-center ">
          <img
            class="img"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
            width="200px"
          />
        </div>
        <br></br>
        <div className="text-center">
          <button class="btn">LOGIN</button>
          {/* <button class="btn1">SIGNUP</button> */}
          <br></br>
        </div>
        <br></br>
        <form onSubmit={(f) => firebaseSignUp(f)} className="text-center">
          <label className="text-black m-2">Address:</label>
          <input
            class="inp"
            type="text"
            name=""
            id=""
            value={email}
            placeholder="Email Address"
            onChange={(f) => setEmail(f.target.value)}
            
          />
          
          <br></br>
          <br></br>
          {/* <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(f) => setName(f.target.value)}
          /> */}
          <label className="text-black m-2">Password:</label>
          <input
            class="hello"
            type="password"
            name=""
            id=""
            value={password}
            placeholder="Password"
            onChange={(f) => setPassword(f.target.value)}
          />
         
          <p class="for">Forgetpassword?</p>
          
        </form>
        <div className="text-center">
          <button class="log">Login</button>
          <br></br> 
          <button type="submit" className={`btn btn-success`}>Submit</button>

          <br></br>
          <input type="checkbox" name="" id="" />
          <span class="me">Remember me</span>
        </div>
      </div>
    </>
  );
}

export default  SignUp ;

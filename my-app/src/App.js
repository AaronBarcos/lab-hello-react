// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id='one'>
        <div id='top'>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="" />
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="" />
        </div>
        <div id='down'>
          <h1>Say hello to ReactJs</h1>
          <h4>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h4>
          <button>Awesome!</button>
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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </div>
      </section>
    </div>
  );
}

export default App;

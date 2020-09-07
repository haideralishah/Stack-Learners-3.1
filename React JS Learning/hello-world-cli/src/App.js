// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <h>Hello CLI</h>
//       </header>
//     </div>
//   );
// }






















import React, { Component } from 'react';
import Student from './components/Student';
import StopWatch from './components/Stopwatch';
import Lifecycles from './components/Lifecycles';
// class App extends Component {
//   render() {
//     return (
//   <h1>Hello World</h1>           

//React.createElement('h1', null, 'Hello World')
//     )
//   }
// }

// const App = () => <Student />;
const App = () => <StopWatch />;
// const App = () => <Lifecycles topic="React JS" />;

export default App;

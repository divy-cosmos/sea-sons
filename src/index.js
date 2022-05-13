import * as ReactDOMClient from "react-dom/client";
import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//      );
//     return (

//        <div>
//             Latitude :
//        </div>
//    );
// };

//

// App class component. In class components 'this' is equal to instance of App class here.

class App extends React.Component {
  
  // BABEL COMPILES A CLASS COMPONENT WITH ITS CONSTRUCTOR WHEN AN INSTANCE OF THE COMPONENT IS RENDERED. so it's optional to use the constructor for assigning 'state' to a class based component.
  

  //   constructor() {
  //     super();

  //     //this is the only time we are initializing the state property directly
  //     this.state = { lat: null , errorMessage : '' };

  //   }
  //alterntive approach to initialize state object for App component
  state = { lat: null, errorMessage: "" };

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      // we called setState() to update our state property
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  };

  // optional function to render the content
  renderContent() {
    // if(!this.state.errorMessage && this.state.lat){
    //     return <div>Latitude : {this.state.lat}</div>
    // }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    return <Spinner message="Please allow to fetch location..."/>;
  }
  
  render() {
    return(
      <div>
        {this.renderContent()} 
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(<App />);

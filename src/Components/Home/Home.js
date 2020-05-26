import React, { Component } from 'react';
import valueRequests from '../apiRequests/valuesRequests';
import './Home.scss';

class Home extends Component {
  state = {
    displayValues: [],
  }

  getValues = () => {
    valueRequests.getValues()
      .then((values) => {
        let myNewValues = [...values];
        this.setState({displayValues: myNewValues});
      })
      .catch((error) => {
        console.log("it broke: ", error);
      });
  }

  showAllValues = () => {
    const myValues = [...this.state.displayValues];
    return myValues.map(value => <div>{value}</div>);
  }

  render () {
    const testText = this.props.testText;
    return (
      <div className="Home">
          <h1 className="testTarget">{testText}</h1>
          <button onClick={this.getValues}>Click Me!</button>
          {this.showAllValues()}
      </div>
    );
  }
}

export default Home;
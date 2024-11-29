import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate software developer.",
        imgSrc: "https://www.irvinetechcorp.com/wp-content/uploads/2020/09/shutterstock_696061426.jpeg",
        profession: "Software Engineer"
      },
      show: false,
      intervalTime: 0 
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

 

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Person Profile</h1>

        <button onClick={this.toggleShow}>
          {this.state.show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {this.state.show && (
          <div className="profile">
            <img src={this.state.person.imgSrc} alt="Profile" />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <p><strong>Profession:</strong> {this.state.person.profession}</p>
          </div>
        )}

       
      </div>
    );
  }
}

export default App;
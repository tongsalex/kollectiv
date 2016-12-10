import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import '../reset.css';
import './App.css';

require('../../fonts/signerica.css');

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentToken: '',
      signup: {
        username: '',
        password: '',
      },
      login: {
        username: '',
        password: '',
      },

    };
  }

// GLOBAL FUNCTIONS
  componentDidMount() {
    // this.getAllBlogPosts();
  }

  alertInfo(msg) {
    alert(msg);
  }
// ************************************* //

// SIDEBAR FUNCTIONS
  signup() {
    fetch('/api/artist/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.signup.username,
        password: this.state.signup.password,
      }),
    })
    .then((data) => {
      this.setState({
        signup: {
          username: '',
          password: '',
        },
      });
    });
  }

  login() {
    console.log('im logging in');
    fetch('/api/artist/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password,
      }),
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        currentToken: data,
        login: {
          username: '',
          password: '',
        },
      });
    })
    .then(this.alertInfo('Youre logged in'))
    .catch(err => console.log(err));
  }

  logout() {
    this.setState({
      currentToken: '',
    }, () => {
      console.log('after logout ', this.state);
    });
    this.alertInfo('Youre logged out!');
  }

  updateLoginUsername(event) {
    this.setState({
      login: {
        username: event.target.value,
        password: this.state.login.password,
      },
    });
  }

  updateLoginPassword(event) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: event.target.value,
      },
    });
  }
// ************************************* //

  render() {
    return (
      <div id="app-container">
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Megrim"
          rel="stylesheet"
        />

        <Sidebar
          loginUsername={this.state.login.username}
          updateLoginUsername={event => this.updateLoginUsername(event)}
          loginPassword={this.state.login.password}
          updateLoginPassword={event => this.updateLoginPassword(event)}
          login={event => this.login(event)}
          logout={event => this.logout(event)}
        />
        <Header />
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;


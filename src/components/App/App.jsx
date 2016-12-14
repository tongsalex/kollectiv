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

    // JWT //
      currentToken: '',
    // ******************** //

    // LOGIN DATA //
      currentUser: null,
      login: {
        username: '',
        password: '',
      },
    // *********** //

    // GLOBAL *PUBLIC* DATA //
      blogPosts: [],
      events: [],
      detailedBlogPost: {
        title: '',
        subtitle: '',
        content: '',
        date_created: '',
        image_url: '',
      },
    // ******************** //

    // EDIT BLOG POST //
      editedBlogPost: {
        title: 'null',
        subtitle: 'null',
        content: 'null',
        image_url: 'null',
      },
    // ******************** //

    // LOAD ALL USER ACCOUNT DATA //
      accountInfo: {
        first_name: '',
        last_name: '',
        bio: '',
        email: '',
        date: '',
        artist_id: null,
        username: null,
      },
      accountBlogPosts: [],
    // ******************** //

    // NEW POST DATA TO DB //
      newBlogPost: {
        title: '',
        subtitle: '',
        content: '',
        image_url: '',
      },
    // ******************** //

    // SIDEBAR STATE //
      appcontainer: 'app-right-sub-container',
      sidebar: 'app-left-sub-container-hidden',
    // ******************** //
    };
  }
// ************************************* //

// GLOBAL FUNCTIONS //
  componentDidMount() {
    this.getAllBlogPosts();
    this.getAllEvents();
    document.getElementById('soundcloud-player').style.visibility = 'hidden';
    document.getElementById('soundcloud-player').style.opacity = 0;
  }

  alertInfo(msg) {
    alert(msg);
  }
// ************************************* //

// USER ACCOUNT PROFILE FUNCTIONS //
  showAccountNavbar() {
    document.getElementById('navbar-account-button').style.visibility = 'visible';
  }

  loadAccountInfo() {
    fetch(`/api/account/${this.state.currentUser}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.currentToken,
      },
      method: 'GET',
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        accountInfo: data,
      });
    })
    .then(event => this.getAccountBlogPosts(event))
    .catch(err => console.log(err));
  }

  updateProfile() {
    fetch(`/api/account/${this.state.currentUser}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.currentToken,
      },
      method: 'PUT',
      body: JSON.stringify({
        first_name: this.state.accountInfo.first_name,
        last_name: this.state.accountInfo.last_name,
        bio: this.state.accountInfo.bio,
        email: this.state.accountInfo.email,
      }),
    })
    .then(this.alertInfo('Account info edited!'))
    .then(event => this.loadAccountInfo(event))
    .catch(err => console.log(err));
  }

  // UPDATE INPUT FUNCTIONS //
    updateProfileFirstName(event) {
      this.setState({
        accountInfo: {
          first_name: event.target.value,
          last_name: this.state.accountInfo.last_name,
          bio: this.state.accountInfo.bio,
          email: this.state.accountInfo.email,
          date: this.state.accountInfo.date,
          artist_id: this.state.accountInfo.artist_id,
          username: this.state.accountInfo.username,
        },
      });
    }

    updateProfileLastName(event) {
      this.setState({
        accountInfo: {
          first_name: this.state.accountInfo.first_name,
          last_name: event.target.value,
          bio: this.state.accountInfo.bio,
          email: this.state.accountInfo.email,
          date: this.state.accountInfo.date,
          artist_id: this.state.accountInfo.artist_id,
          username: this.state.accountInfo.username,
        },
      });
    }

    updateProfileBio(event) {
      this.setState({
        accountInfo: {
          first_name: this.state.accountInfo.first_name,
          last_name: this.state.accountInfo.last_name,
          bio: event.target.value,
          email: this.state.accountInfo.email,
          date: this.state.accountInfo.date,
          artist_id: this.state.accountInfo.artist_id,
          username: this.state.accountInfo.username,
        },
      });
    }

    updateProfileEmail(event) {
      this.setState({
        accountInfo: {
          first_name: this.state.accountInfo.first_name,
          last_name: this.state.accountInfo.last_name,
          bio: this.state.accountInfo.bio,
          email: event.target.value,
          date: this.state.accountInfo.date,
          artist_id: this.state.accountInfo.artist_id,
          username: this.state.accountInfo.username,
        },
      });
    }
  // ************************************* //
// ************************************* //

// USER ACCOUNT BLOG FUNCTIONS //
  getAccountBlogPosts() {
    fetch(`/api/account/blogposts/${this.state.accountInfo.artist_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.currentToken,
      },
      method: 'GET',
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        accountBlogPosts: data,
      });
    })
    .catch(err => console.log(err));
  }

  deleteBlogPost(blogPostId) {
    fetch(`/api/accountBlogPosts/${blogPostId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.currentToken,
      },
      method: 'DELETE',
    })
    .then(event => this.getAccountBlogPosts(event))
    .then(event => this.getAllBlogPosts(event))
    .catch(err => console.log(err));
  }

  makeNewBlogPost() {
    fetch('/api/accountBlogPosts/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.currentToken,
      },
      method: 'POST',
      body: JSON.stringify({
        title: this.state.newBlogPost.title,
        subtitle: this.state.newBlogPost.subtitle,
        content: this.state.newBlogPost.content,
        image_url: this.state.newBlogPost.image_url,
        artist_id: this.state.accountInfo.artist_id,
      }),
    })
    .then(this.setState({
      newBlogPost: {
        title: '',
        subtitle: '',
        content: '',
        image_url: '',
      },
    }))
    .then(this.alertInfo('New blog post accepted!'))
    .then(event => this.getAccountBlogPosts(event))
    .then(event => this.getAllBlogPosts(event))
    .catch(err => console.log(err));
  }

  // UPDATE INPUT FUNCTIONS //
  updateNewBlogPostTitle(event) {
    this.setState({
      newBlogPost: {
        title: event.target.value,
        subtitle: this.state.newBlogPost.subtitle,
        content: this.state.newBlogPost.content,
        image_url: this.state.newBlogPost.image_url,
      },
    });
  }

  updateNewBlogPostSubtitle(event) {
    this.setState({
      newBlogPost: {
        title: this.state.newBlogPost.title,
        subtitle: event.target.value,
        content: this.state.newBlogPost.content,
        image_url: this.state.newBlogPost.image_url,
      },
    });
  }

  updateNewBlogPostContent(event) {
    this.setState({
      newBlogPost: {
        title: this.state.newBlogPost.title,
        subtitle: this.state.newBlogPost.subtitle,
        content: event.target.value,
        image_url: this.state.newBlogPost.image_url,
      },
    });
  }

  updateNewBlogPostImageUrl(event) {
    this.setState({
      newBlogPost: {
        title: this.state.newBlogPost.title,
        subtitle: this.state.newBlogPost.subtitle,
        content: this.state.newBlogPost.content,
        image_url: event.target.value,
      },
    });
  }
  // ************************************* //
// ************************************* //

// SIDEBAR LOGIN/LOGOUT FUNCTIONS //
  openSidebar() {
    this.setState({
      sidebar: 'app-left-sub-container-show',
      appcontainer: 'app-right-sub-container-blur',
    });
  }

  closeSidebar() {
    this.setState({
      sidebar: 'app-left-sub-container-hidden',
      appcontainer: 'app-right-sub-container',
    });
  }

  signup() {
    fetch('/api/user/signup', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.signup.username,
        password: this.state.signup.password,
      }),
    })
    .then(() => {
      this.setState({
        signup: {
          username: '',
          password: '',
        },
      });
    })
    .then(this.alertInfo('Signed up!'))
    .catch(err => console.log(err));
  }

  login() {
    console.log('im logging in');
    fetch('/api/user/login', {
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
        currentUser: this.state.login.username,
        login: {
          username: '',
          password: '',
        },
      });
    })
    .then(event => this.loadAccountInfo(event))
    .then(event => this.showAccountNavbar(event))
    .then(event => this.closeSidebar(event))
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

  // UPDATE INPUT FUNCTIONS //
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
// ************************************* //

// BLOG FUNCTIONS //
  getAllBlogPosts() {
    fetch('/api/blog', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'GET',
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        blogPosts: data,
      });
    })
    .catch(err => console.log(err));
  }

  getSingleBlogPost(params) {
    fetch(`/api/blog/${params}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.currentToken,
      },
      method: 'GET',
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        detailedBlogPost: data,
      });
    })
    .catch(err => console.log(err));
  }

  getSingleBlogPostToEdit(params) {
    fetch(`/api/blog/${params}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.currentToken,
      },
      method: 'GET',
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        editedBlogPost: data,
      });
    })
    .catch(err => console.log(err));
  }

  updateBlogPost() {
    fetch(`/api/blog/${this.state.editedBlogPost.blog_post_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.currentToken,
      },
      method: 'PUT',
      body: JSON.stringify({
        title: this.state.editedBlogPost.title,
        subtitle: this.state.editedBlogPost.subtitle,
        content: this.state.editedBlogPost.content,
        image_url: this.state.editedBlogPost.image_url,
      }),
    })
    .then(this.alertInfo('Blog post edited!'))
    .then(event => this.getAccountBlogPosts(event))
    .then(event => this.getAllBlogPosts(event))
    .catch(err => console.log(err));
  }

// UPDATE INPUT FUNCTIONS //
  updateEditedBlogPostTitle(event) {
    this.setState({
      editedBlogPost: {
        blog_post_id: this.state.editedBlogPost.blog_post_id,
        title: event.target.value,
        subtitle: this.state.editedBlogPost.subtitle,
        content: this.state.editedBlogPost.content,
        image_url: this.state.editedBlogPost.image_url,
      },
    });
  }

  updateEditedBlogPostSubtitle(event) {
    this.setState({
      editedBlogPost: {
        blog_post_id: this.state.editedBlogPost.blog_post_id,
        title: this.state.editedBlogPost.title,
        subtitle: event.target.value,
        content: this.state.editedBlogPost.content,
        image_url: this.state.editedBlogPost.image_url,
      },
    });
  }

  updateEditedBlogPostContent(event) {
    this.setState({
      editedBlogPost: {
        blog_post_id: this.state.editedBlogPost.blog_post_id,
        title: this.state.editedBlogPost.title,
        subtitle: this.state.editedBlogPost.subtitle,
        content: event.target.value,
        image_url: this.state.editedBlogPost.image_url,
      },
    });
  }

  updateEditedBlogPostImageUrl(event) {
    this.setState({
      editedBlogPost: {
        blog_post_id: this.state.editedBlogPost.blog_post_id,
        title: this.state.editedBlogPost.title,
        subtitle: this.state.editedBlogPost.subtitle,
        content: this.state.editedBlogPost.content,
        image_url: event.target.value,
      },
    });
  }
  // ************************************* //
// ************************************* //

// NAVBAR FUNCTIONS //
  openSoundcloud() {
    if (document.getElementById('soundcloud-player').style.visibility == 'hidden') {
      document.getElementById('soundcloud-player').style.visibility = 'visible';
      document.getElementById('soundcloud-player').style.opacity = 1;
    } else {
      document.getElementById('soundcloud-player').style.opacity = 0;
      document.getElementById('soundcloud-player').style.visibility = 'hidden';
    }
  }
// ************************************* //

// EVENT FUNCTIONS //
  getAllEvents() {
      fetch('/api/events', {
        headers: {
          'content-type': 'application/json',
        },
        method: 'GET',
      })
      .then(r => r.json())
      .then((data) => {
        this.setState({
          events: data,
        });
      })
      .catch(err => console.log(err));
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

        <div id={this.state.sidebar}>
          <Sidebar
            closeSidebar={event => this.closeSidebar(event)}

            loginUsername={this.state.login.username}
            updateLoginUsername={event => this.updateLoginUsername(event)}
            updateLoginPassword={event => this.updateLoginPassword(event)}
            loginPassword={this.state.login.password}
            login={event => this.login(event)}
            logout={event => this.logout(event)}
            isAuthenticated={this.state.isAuthenticated}
          />
        </div>

        <div id={this.state.appcontainer}>
            <Header />
            <Navbar openSidebar={event => this.openSidebar(event)} openSoundcloud={event => this.openSoundcloud(event)}/>
            {this.props.children && React.cloneElement(this.props.children, {

              // STATE
              state: this.state,

              // UPDATE PROFILE
              updateProfileFirstName: (event => this.updateProfileFirstName(event)),
              updateProfileLastName: (event => this.updateProfileLastName(event)),
              updateProfileBio: (event => this.updateProfileBio(event)),
              updateProfileEmail: (event => this.updateProfileEmail(event)),
              updateProfile: (event => this.updateProfile(event)),

              // BLOG POST FUNCTIONS
              deleteBlogPost: (event => this.deleteBlogPost(event)),
              getSingleBlogPost: (event => this.getSingleBlogPost(event)),
              getSingleBlogPostToEdit: (event => this.getSingleBlogPostToEdit(event)),

              updateEditedBlogPostTitle: (event => this.updateEditedBlogPostTitle(event)),
              updateEditedBlogPostSubtitle: (event => this.updateEditedBlogPostSubtitle(event)),
              updateEditedBlogPostContent: (event => this.updateEditedBlogPostContent(event)),
              updateEditedBlogPostImageUrl: (event => this.updateEditedBlogPostImageUrl(event)),

              // NEW BLOG POST FUNCTIONS
              updateNewBlogPostTitle: (event => this.updateNewBlogPostTitle(event)),
              updateNewBlogPostSubtitle: (event => this.updateNewBlogPostSubtitle(event)),
              updateNewBlogPostContent: (event => this.updateNewBlogPostContent(event)),
              updateNewBlogPostImageUrl: (event => this.updateNewBlogPostImageUrl(event)),
              makeNewBlogPost: (event => this.makeNewBlogPost(event)),
              updateBlogPost: (event => this.updateBlogPost(event)),
            })}
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;


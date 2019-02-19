import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:4000/api/posts')
    .then(res => {
      console.log(res)
      this.setState({
        posts: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }



  render() {
    return (
      <div className="App">
        {this.state.posts.map(post => {
          console.log(post)
          return(
            <div>
              <h1>{post.title}</h1>
              <p>{post.contents}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;

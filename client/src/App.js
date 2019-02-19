import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 5%;
  justify-content: center;
  background: cornsilk;
`

const TitleCard = styled.div`
  width: 55%;
  margin-top: 1.5%;
  margin-bottom: 1.5%;
  border: 1px solid black;
  padding: 1% 4%;
  text-align: center;
  border-radius: 10px;
  background: white;
`

const StyledHeader = styled.h1`
  width: 100%;
  text-align: center;
  background: silver;
  margin-top: 0%;
  padding-top: 3%;
  padding-bottom: 3%;
  color: white;
  font-weight: bold;
`


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
      <AppContainer className="App">
      <StyledHeader>Lord Of The Rings Quotes</StyledHeader>
        {this.state.posts.map(post => {
          console.log(post)
          return(
            <TitleCard>
              <h3>{post.title}</h3>
              <p>{post.contents}</p>
            </TitleCard>
          )
        })}
      </AppContainer>
    );
  }
}

export default App;

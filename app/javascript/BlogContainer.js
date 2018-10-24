import React, { Component } from 'react'

export default class BlogContainer extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.getAllPosts()
  }

  getAllPosts = () => {
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: `
          query {
            posts {
              dream_title
              dream_details
            }
          }
        `
      })
    }).then(response => {
      return response.json()
    }).then(response => {
      this.setState({posts: response.data.posts})
    })
  }

  render () {
    return (
      <div>
        <h1>Dreamr</h1>
        <h2>Hello from React</h2>
        <h3>Posts to render here</h3>
        <br/>
        {this.state.posts.map((post, index) => (
          <div className='post-row' key={index}>
            <h2>{post.dream_title}</h2>
            <p>{post.dream_details}</p>
            <br/>
          </div>
        ))}
      </div>
    )
  }
}
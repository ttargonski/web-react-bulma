import React, { Component } from "react";

class Faq extends Component {
  state = {
    error: null,
    isLoaded: false,
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            posts: result
          });
        },
        error => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="faq">
          <div className="section">
            <div className="container">
              <p className="title">FAQ</p>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr
              </p>
              <div className="columns">
                {posts.map(post => {
                  return (
                    <div key={post.id} className="column is-one-third">
                      <div className="card">
                        <div className="card-content">
                          <p className="subtitle">{post.title}?</p>
                          <p className="answer">{post.body}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Faq;

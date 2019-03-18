import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { newPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.newPost(post);

    this.setState({ title: '' });
    this.setState({ body: '' });
  };

  render() {
    return (
      <div>
        <h1>Add form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  newPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { newPost }
)(PostForm);

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentFrom extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    comment: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;

    this.props.onSubmit(comment);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { comment } = this.state;

    return (
      <form onSubmit={this.handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px'
      }}>
        <textarea name="comment" value={comment} onChange={this.handleChange} style={{
          height:'200px',
          margin: '10px 0'
        }} placeholder="Comment"></textarea>
        <button>Submit</button>
      </form>
    );
  }
}

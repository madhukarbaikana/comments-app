import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  toggleLike = id => {
    const {commentsList} = this.state
    console.log('like button is clicked')
    const filteredCommentsList = commentsList.map(eachComment => {
      if (eachComment.id === id) {
        return {...eachComment, isLiked: !eachComment.isLiked}
      }

      return eachComment
    })

    this.setState({commentsList: filteredCommentsList})
  }

  onAddComment = event => {
    event.preventDefault()

    const initialBackgroundClassName = `name-logo ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onDelete = id => {
    const {commentsList} = this.state

    const filteredCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({commentsList: filteredCommentsList})
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="comments-bg-container">
        <div className="comments-container">
          <div className="add-comments-container">
            <div className="form-container">
              <h1 className="add-comments-heading">Comments</h1>

              <form className="add-comments-form" onSubmit={this.onAddComment}>
                <p className="form-description">
                  Say something about 4.O technologies
                </p>
                <input
                  type="text"
                  value={name}
                  className="input"
                  placeholder="Your Name"
                  onChange={this.onChangeName}
                />
                <br />
                <textarea
                  type="text"
                  value={comment}
                  rows="7"
                  cols="32"
                  className="input comment"
                  placeholder="Your Comment"
                  onChange={this.onChangeComment}
                />
                <br />
                <button className="submit-button" type="submit">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
          <hr className="horizontal-rule" />
          <div className="comments-bottom-section">
            <h1 className="comments-bottom-section-heading">
              <span className="comments-count">{commentsList.length}</span>
              Comments
            </h1>
            <ul className="comment-items-container">
              {commentsList.map(eachComment => (
                <CommentItem
                  commentDetails={eachComment}
                  onDelete={this.onDelete}
                  toggleLike={this.toggleLike}
                  key={eachComment.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Comments

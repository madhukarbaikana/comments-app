// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const likeImgUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
const likedImgUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

const CommentItem = props => {
  const {commentDetails, onDelete, toggleLike} = props
  const {name, comment, date, initialClassName, isLiked, id} = commentDetails

  const onClickLike = () => {
    toggleLike(id)
  }

  const likeClassName = isLiked && 'liked'

  const likeImg = isLiked ? (
    <img src={likedImgUrl} className="like-image" alt="like" />
  ) : (
    <img src={likeImgUrl} className="like-image" alt="like" />
  )

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <h1 className={initialClassName}>{name[0]}</h1>

        <div>
          <div className="name-container">
            <h1 className="name">{name}</h1>
            <p className="timed">{formatDistanceToNow(date)}</p>
          </div>

          <p className="comment-description">{comment}</p>
        </div>
      </div>

      <div className="like-delete-container">
        <div>
          {likeImg}
          <button
            className={`like-button ${likeClassName}`}
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="delete-button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem

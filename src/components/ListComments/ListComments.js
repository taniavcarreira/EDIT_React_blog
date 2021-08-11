import React from 'react'
import './listComments.css'


class ListComments extends React.Component {
  render () {
    return(
      <div className="comment">
        {this.props.comments.map(comment => { 
          return(
          <>
            <p className="comment-header">{comment.author}</p>
            <p className="comment-body">- {comment.message}</p>
            <div className="comment-footer">
              <a href="#" className="comment-footer-delete">Delete Comment</a>
            </div>
          </>
          )
        })}
      </div>
    );
  }
}

export default ListComments
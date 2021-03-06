import React from 'react';
import './commentBox.css';
import DynamicForm from '../DynamicForm/dynamicForm';
import ListComments from '../ListComments/listComments';


const fields = [
  {
    type:'text',
    name:'username',
    placeholder:'username'
  },
  {
    type:'text',
    name:'email',
    placeholder:'your email'
  },
  {
    type:'textarea',
    name:'comment',
    placeholder:'write a comment',
    rows:6
  }
]


class CommentBox extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      displayComments: false,
      comments: [
        {
          id: 1,
          author:'Tania Carreira',
          email:'tanyavyeyra@gmail.com',
          message:'Comentário 1',
        },
        {
          id: 2,
          author:'Tania Carreira',
          email:'tanyavyeyra@gmail.com',
          message:'Comentário 2',
        }
      ]
    };
  }

    addComment = (comment) => {
      console.log(comment)
      const newComment = {
        id: 2,
        author:comment.username,
        email:comment.email,
        message:comment.comment
      }

      const commentsCopy = [].concat(this.state.comments); // criar uma variável com cópia dos comentários para manipular os dados
      commentsCopy.push(newComment);

      this.setState({comments: commentsCopy});
  };

    handleClick = () => {
      this.setstate({
        displayComments:!this.state.displayComments
      });
    }

    removeComment = (id) => {
      const commentsNotRemoved = this.state.comments.filter(comment => comment.id !== id)
      this.setState({comments: commentsNotRemoved})
    }

    render() {
      
      let buttonText = "Show Comments";

      // if (this.state.displayComments === true){
      //   buttonText ='Hide Comments';
      //   commentNodes = <div className="comment-list">{comments}</div>;
      // }
    
      return (
        <div className="comment-box">
          <h2>Share your ideas</h2>
          <DynamicForm fields={fields} submitFn={this.addComment}/>
          <h3>Comments</h3>
          <ListComments comments={this.state.comments} removeGn={this.removeComment}/>
        </div>
      ); //end of return
    } //end of render
  }

export default CommentBox;
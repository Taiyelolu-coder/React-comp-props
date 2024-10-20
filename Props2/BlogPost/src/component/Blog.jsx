import "./Blog.css"



function Blog(props) {
  

    return (
      <div className="Blog-post">
        <img src={props.image} alt="" />
        <h1>Title: {props.title}</h1>
        <h2>Author: {props.author}</h2>
        <p>{props.content}</p>
        <h5>{props.date}</h5>
      </div>
    )
  }
  
  export default Blog
  
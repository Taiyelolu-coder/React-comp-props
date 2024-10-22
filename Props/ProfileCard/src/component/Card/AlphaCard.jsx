import "./Card.css"

function AlphaCard(props){
     return(
        <div className="Profile-card">
            <img src={props.image} alt="" />
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h2>Location: {props.location}</h2>

        </div>
     )
} 

export default AlphaCard
import React,{useState} from "react";
import Loading from '../components/Loading'
export default function Projects(props) {
  const [loading, setLoading] = useState(true)
  const ShowCard = (props) => {
    return(
      <div
        className={`card rounded-4 border-3 bg-${
          props.mode === "body-secondary" ? "light" : "secondary"
        }`}
        style={{flex: "1 1 100%", minWidth: "17rem"}}
      >
        <div className="container" style={{transform:"translateY(44%)",height:
  "250px", display: loading?"block":"none"}}>
          <Loading/>
        </div>
        <img
          src={`https://picsum.photos/25${props.index}/250`}
          className="card-img-top rounded-top-4 object-fit-cover"
          alt="..."
          style={{height:"250px", objectFit:"cover", display:loading?"none":"block"}}
          onLoad={(e)=>setLoading(false)}
        />
        <div
          className={`card-body border-top border-5 text-${
            props.mode === "body-secondary" ? "black" : "white"
          }`}
        >
          <h5 className="card-title">Project {props.index+1}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href={props.index === 0?"/textconverter":props.index === 1? "https://sahilbishnoi156.github.io/react-proj1/":"https://sahilbishnoi156.github.io/Front-end-replica/"} className={`btn btn-${props.txtMode}`} style={{cursor:"pointer",width:"50%"}} target="_blank" rel="noreferrer">
            Explore
          </a>
        </div>
      </div>
    )
  }
  const myArray = Array.from({ length: 4 }, (_, index) => index);

  return (
    <div
      className={`container d-grid overflow-hidden`}
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
        gridRowGap: "3rem",
        gridColumnGap: "6rem",
      }}
    >
      {myArray.map((index)=>{return <ShowCard key={index} index={index} mode={props.mode} txtMode={props.txtMode}/>})}
    </div>
  );
}

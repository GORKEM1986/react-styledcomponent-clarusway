import data from "../data";
import CardStyles from "./styled/CardStyles.styled";

const Card = () => {
  return(
  data.map((item)=>{
    const {id,title,body,image} = item
    return(
      <CardStyles key={id} num="1">
      <div>
          <h1>{title}</h1>
          <p>
         {body}
          </p>
      </div>
      <div className="img">
        <img src={"images/"+ image} alt="" />
      </div>
   </CardStyles>
    )
  })
        
  )
};

export default Card;

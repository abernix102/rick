import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect} from "react";
import { Borde , Image, CloseCard, Info, TitleInfo , P, ButtonLike} from "./cards/cards";
function Card({id, name, status, species, gender, image, origin,  onClose, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      }  );
   }, [myFavorites]);

   const handleFavorite = ()=>{
      if(isFav === true){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({id, name, status, species, gender, image, onClose})
      }
   }
   return (
      <Borde>
         <CloseCard onClick={()=>onClose(id)}>x</CloseCard>
         <Image src={image} alt={name}/>
         <Link style={{textDecoration:'none'}} to={`/detail/${id}`}><TitleInfo >{name}</TitleInfo></Link>
         <Info>
          <P><span style={{fontWeight:'bold'}}>species: </span> {species}</P>
          <P><span style={{fontWeight:'bold'}}>gender: </span>{gender}</P>
          <P><span style={{fontWeight:'bold'}}>origin: </span> {origin}</P>
         </Info>
         {
         isFav ? (
            <ButtonLike onClick={handleFavorite}>❤️</ButtonLike>
         ) : (
            <ButtonLike onClick={handleFavorite}>🤍</ButtonLike>
         )
         }
      </Borde>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
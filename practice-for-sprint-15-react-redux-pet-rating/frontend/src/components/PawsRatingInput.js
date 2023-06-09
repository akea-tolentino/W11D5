import {useState} from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {

const [activeRating, setActiveRating] = useState(rating);

  return (
    <>
      <input
        type="number"
        disabled={disabled}
        value={rating}
        onChange={onChange}
        />
      <div className="rating-input">
        <div onMouseEnter={()=> setActiveRating(1)}
          className={activeRating > 0 ? "filled" : "empty"} >
          <i className="fa fa-paw"></i>
        </div>
        <div onMouseEnter={() => setActiveRating(2)}
          className={activeRating > 1 ? "filled" : "empty"} >
          <i className="fa fa-paw"></i>
        </div>
        <div onMouseEnter={() => setActiveRating(3)}
          className={activeRating > 2 ? "filled" : "empty"} >
          <i className="fa fa-paw"></i>
        </div>
        <div onMouseEnter={() => setActiveRating(4)} 
          className={activeRating > 3 ? "filled" : "empty"} >
          <i className="fa fa-paw"></i>
        </div>
        <div onMouseEnter={() =>setActiveRating(5)}
          className={activeRating > 4 ? "filled" : "empty"} >
          <i className="fa fa-paw"></i>
        </div>
      </div>
    </>
  );
};

export default PawsRatingInput;
import { useState } from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {
    const [activeRating, setActiveRating] = useState(rating);

    return (
        <>
            {/* <input
                type="number"
                disabled={disabled}
                value={rating}
                onChange={onChange}
            /> */}
            <div className="rating-input">
                <div
                    onClick={() => onChange(1)}
                    onMouseEnter={() => {
                        if (!disabled) setActiveRating(1);
                    }}
                    onMouseLeave={() => {
                        if (!disabled) setActiveRating(rating);
                    }}
                    className={activeRating > 0 ? "filled" : "empty"}
                >
                    <i className="fa fa-paw"></i>
                </div>
                <div
                    onClick={() => onChange(2)}
                    onMouseEnter={() => {
                        if (!disabled) setActiveRating(2);
                    }}
                    onMouseLeave={() => {
                        if (!disabled) setActiveRating(rating);
                    }}
                    className={activeRating > 1 ? "filled" : "empty"}
                >
                    <i className="fa fa-paw"></i>
                </div>
                <div
                    onClick={() => onChange(3)}
                    onMouseEnter={() => {
                        if (!disabled) setActiveRating(3);
                    }}
                    onMouseLeave={() => {
                        if (!disabled) setActiveRating(rating);
                    }}
                    className={activeRating > 2 ? "filled" : "empty"}
                >
                    <i className="fa fa-paw"></i>
                </div>
                <div
                    onClick={() => onChange(4)}
                    onMouseEnter={() => {
                        if (!disabled) setActiveRating(4);
                    }}
                    onMouseLeave={() => {
                        if (!disabled) setActiveRating(rating);
                    }}
                    className={activeRating > 3 ? "filled" : "empty"}
                >
                    <i className="fa fa-paw"></i>
                </div>
                <div
                    onClick={() => onChange(5)}
                    onMouseEnter={() => {
                        if (!disabled) setActiveRating(5);
                    }}
                    onMouseLeave={() => {
                        if (!disabled) setActiveRating(rating);
                    }}
                    className={activeRating > 4 ? "filled" : "empty"}
                >
                    <i className="fa fa-paw"></i>
                </div>
            </div>
        </>
    );
};

export default PawsRatingInput;

import * as React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ffff00",
  },
  "& .MuiRating-iconHover": {
    color: "#FFFF8A",
  },
});

function RatingInput() {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <StyledRating
      name="illuminate-controlled"
      value={ratingValue}
      icon={<HiOutlineLightBulb />}
      emptyIcon={<HiOutlineLightBulb />}
      onChange={(event, newValue) => {
        setRatingValue(newValue);
      }}
    />
  );
}

export default RatingInput;
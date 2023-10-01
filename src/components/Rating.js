import React from "react";
import { Rate } from "antd";

const Rating = ({rate, review}) => {

  return(
    <div className="flex items-center gap-4">
        <Rate defaultValue={rate} allowHalf />
        <p>( {review} Customer Reviews )</p>
    </div>

  )
};

export default Rating;

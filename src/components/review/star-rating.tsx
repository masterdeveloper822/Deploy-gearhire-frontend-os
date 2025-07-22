import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
        >
          <FontAwesomeIcon
            icon={faStar}
            className={`h-8 w-8 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          />
        </button>
      ))}
    </div>
  );
}

export default StarRating;
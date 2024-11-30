import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const FAQItem = ({ id, summary, children }) => {
  const detailsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check if the current hash matches this FAQ's ID
    if (location.hash === `#${id}`) {
      if (detailsRef.current) {
        detailsRef.current.open = true;
        detailsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, id]);

  return (
    <details id={id} ref={detailsRef}>
      <summary>### {summary}</summary>
      <div>{children}</div>
    </details>
  );
};

export default FAQItem;

import React, { useState } from "react";
import "./styles.scss";

interface Props {
  defaultExpanded?: boolean;
  text: string;
}

const Accordion: React.FC<Props> = ({ children, defaultExpanded = false, text }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="brand-accordion">
      <div className="brand-accordion--top" onClick={() => setExpanded(!expanded)}>
        <span className="brand-accordion--text">{text}</span>
        <span
          className={`brand-accordion--chevron${expanded ? "--expanded" : ""}`}
        >
          ›
        </span>
      </div>
      <div className={`brand-accordion--content${expanded ? "--expanded" : ""}`}>
        {children}
      </div>
    </div>
  )
};

export default Accordion;

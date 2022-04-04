import React from 'react'

export default function SampleNextArrow(props) {
    
    const { className, style, onClick } = props;
  return (
    <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
  );
}

import "style.scss";
import React from "react";

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className="card">
            {children}
        </div>
    )

};

export default Card;
import React from "react";

const Qualities = ({ userQualities }) => {
    return userQualities.map((qualities) => {
        return (
            <span
                key={qualities._id}
                className={"badge m-1 bg-" + qualities.color}
            >
                {qualities.name}
            </span>
        );
    });
};

export default Qualities;

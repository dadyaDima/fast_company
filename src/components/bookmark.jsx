import React from "react";
import PropTypes from "prop-types";

const Bookmarks = ({ usersList, userId, onItemClick }) => {
    const selectedUser = usersList.find((user) => user._id === userId);

    return selectedUser.bookmark ? (<i className="bi bi-heart-fill" onClick={() => onItemClick(userId)}></i>) : (<i className="bi bi-heart" onClick={() => onItemClick(userId)}></i>);
};

Bookmarks.propTypes = {
    usersList: PropTypes.array.isRequired,
    userId: PropTypes.string.isRequired,
    onItemClick: PropTypes.func.isRequired
};

export default Bookmarks;

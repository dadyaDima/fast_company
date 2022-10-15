import React from "react";
import Bookmarks from "./bookmark";
import Qualities from "./qualities";
import PropTypes from "prop-types";

const User = ({ usersList, user, onDeleteUser, onToggleBookmark }) => {
    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>
                {" "}
                <Qualities userQualities={user.qualities} />
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <Bookmarks
                    usersList={usersList}
                    userId={user._id}
                    onItemClick={onToggleBookmark}
                />
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteUser(user._id)}
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    usersList: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    onDeleteUser: PropTypes.func.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
};

export default User;

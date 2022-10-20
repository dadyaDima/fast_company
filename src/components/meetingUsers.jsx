import React from "react";
import PropTypes from "prop-types";

const MeetingUsers = ({ userMeetYouCount }) => {
    const setVariableWord = () => {
        const lastNum = Number(String(userMeetYouCount).slice(-1));

        if (lastNum === 1) return "Человек тусанет";
        if (userMeetYouCount > 4 && userMeetYouCount < 21) return `Человек тусанет`;
        if ([2, 3, 4].indexOf(lastNum) >= 0) return "Человека тусанут";
    };

    return userMeetYouCount !== 0 ? (<span className="badge bg-info text-dark">{" "}{`${userMeetYouCount} : ${setVariableWord()} с тобой сегодня ;)`}{" "}</span>) : (<span className="badge bg-danger">{" "}Не кто не тусанет с тобой сегодня :({" "}</span>);
};

MeetingUsers.propTypes = {
    userMeetYouCount: PropTypes.number
};

export default MeetingUsers;

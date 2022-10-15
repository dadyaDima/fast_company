import React, { useState } from "react";
import API from "../API/index";
import User from "./user";
import MeetingUsers from "./meetingUsers";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

const Users = () => {
    const [usersList, setUserList] = useState(API.users.fetchAll());
    const [currentPage, setCurrentPage] = useState(1);

    const usersLength = usersList.length;
    const pagesSize = 4;
    const userCrops = paginate(usersList, currentPage, pagesSize);

    const handleDeleteUser = (deletingUserId) => {
        setUserList((prevState) =>
            prevState.filter((user) => deletingUserId !== user._id)
        );
    };

    const handleToggleBookmark = (user_id) => {
        const updatedBookmarks = usersList.map((user) => {
            if (user._id === user_id) {
                user.bookmark = !user.bookmark;
                return user;
            }
            return user;
        });
        setUserList(updatedBookmarks);
    };

    const handlePageChanges = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <MeetingUsers userMeetYouCount={usersLength} />

            {usersLength > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrops.map((user) => (
                            <User
                                key={user._id}
                                usersList={usersList}
                                user={user}
                                onDeleteUser={handleDeleteUser}
                                onToggleBookmark={handleToggleBookmark}
                            />
                        ))}
                    </tbody>
                </table>
            )}

            <Pagination
                usersLength={usersLength}
                pagesSize={pagesSize}
                onPageChange={handlePageChanges}
                currentPage={currentPage}
            />
        </>
    );
};

export default Users;

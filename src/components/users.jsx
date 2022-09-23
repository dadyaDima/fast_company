import React from 'react'
import User from './user'
import MeetingUsers from './meetingUsers'

const Users = ({usersList, userMeetYouCount, onDeleteUser, onToggleBookmark}) => {

    return (
        <>
            <MeetingUsers userMeetYouCount={userMeetYouCount} />

            {
                usersList.length > 0 && <table className="table">
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
                        {usersList.map((user) => <User  key={user._id} 
                                                        usersList={usersList}
                                                        user={user} 
                                                        onDeleteUser={onDeleteUser}
                                                        onToggleBookmark={onToggleBookmark}
                                                />)}
                    </tbody>
                </table> 
            }
        </>
    )
}

export default Users
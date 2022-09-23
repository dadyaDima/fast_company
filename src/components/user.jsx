import React from 'react'
import Bookmarks from './bookmark';
import Qualities from './qualities'

const User = ({usersList, user, onDeleteUser, onToggleBookmark}) => {

    return <tr key={user._id}>
                <td>{user.name}</td>
                <td> <Qualities userQualities={user.qualities}/></td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td onClick={ () => onToggleBookmark(user._id)}> <Bookmarks usersList={usersList}
                               userId={user._id} 
                /></td>
                <td><button type="button" className="btn btn-danger btn-sm" onClick={ () => onDeleteUser(user._id)}>Удалить</button></td>
            </tr>
}

export default User
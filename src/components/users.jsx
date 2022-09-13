import React, {useState} from 'react'
import API from '../API/API/index'



const Users = () => {
    console.log(API.users.fetchAll());
    const [usersList, setUserList] = useState(API.users.fetchAll())
    const [userMeetYouCount, setUserMeetYouCount] = useState(usersList.length)


    const renderUsersList = () => {
        
        return (
            usersList.map((user) => {
                 
            return <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{renderUserQualities(user.qualities)}</td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}</td>
                        <td><button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeletUser(user)}>Удалить</button></td>
                    </tr>
                    
            })
        )
    }

    const renderUserQualities = (userQualities) => {
        return userQualities.map(qualiti => {
            return <span key={qualiti._id} className={'badge bg-' + qualiti.color}>{qualiti.name}</span>
        })
    }

    const handleDeletUser = (deletingUser) => {
        setUserMeetYouCount((prevState) => prevState - 1)        
        setUserList((prevState) => prevState.filter((user) => deletingUser._id !== user._id))
    }

    const renderMeetingUsers = () => {
        const lastNum = String(userMeetYouCount).slice(-1);
        const endingWord = (lastNum > 1 && lastNum < 5) ? 'а' : ''

        return (userMeetYouCount !== 0 )
                ? <span className="badge bg-info text-dark"> {`${userMeetYouCount} : человек${endingWord} тусанет с тобой сегодня ;)`} </span>
                : <span className="badge bg-danger"> Не кто не тусанет с тобой сегодня :( </span>                               
    }

    return (
        <>
            { renderMeetingUsers() }

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { renderUsersList() }
                </tbody>
            </table>
        </>
        
    )
}

export default Users
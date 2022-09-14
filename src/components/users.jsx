import React, {useState} from 'react'
import API from '../API/API/index'

const Users = () => {
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
                        <td><button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(user._id)}>Удалить</button></td>
                    </tr>
                    
            })
        )
    }

    const renderUserQualities = (userQualities) => {
        return userQualities.map(qualiti => {
            return <span key={qualiti._id} className={'badge m-1 bg-' + qualiti.color}>{qualiti.name}</span>
        })
    }

    const handleDeleteUser = (deletingUserId) => {
        setUserMeetYouCount((prevState) => prevState - 1)        
        setUserList((prevState) => prevState.filter((user) => deletingUserId !== user._id))
    }

    const renderMeetingUsers = () => {
        //функция внутри функции только потому что она больше не где во внешнем коде не будет использоваться(специфическая)
        const setVariableWord = () => {
            console.log('Почему 2 раза выполняется тело функции если вызов был только 1 ?');
            const lastNum = Number(String(userMeetYouCount).slice(-1))
            if(lastNum === 1) return 'Человек тусанет'
            if(userMeetYouCount > 4 && userMeetYouCount < 21) return `Человек тусанет`
            if([2, 3, 4].indexOf(lastNum) >= 0) return 'Человека тусанут'
            
        }

        return (userMeetYouCount !== 0 )
                ? <span className="badge bg-info text-dark"> {`${userMeetYouCount} : ${setVariableWord()} с тобой сегодня ;)`} </span>
                : <span className="badge bg-danger"> Не кто не тусанет с тобой сегодня :( </span>                               
    }

    return (
        <>
            { renderMeetingUsers() }

            {
                usersList.length > 0 && <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    { renderUsersList() }
                </tbody>
            </table> 
            }
        </>
    )
}

export default Users
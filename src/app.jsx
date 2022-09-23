import React, {useState} from "react"
import API from './API/API/index'
import Users from './components/users'

const App = () => {
    const [usersList, setUserList] = useState(API.users.fetchAll())
    const [userMeetYouCount, setUserMeetYouCount] = useState(usersList.length)

    const handleDeleteUser = (deletingUserId) => {
        setUserMeetYouCount((prevState) => prevState - 1)        
        setUserList((prevState) => prevState.filter((user) => deletingUserId !== user._id))
    }

    const handleToggleBookmark = (user_id) => {
        
        const updatedBookmarks = usersList.map(user => {
            if(user._id === user_id) {
                user.bookmark = !user.bookmark
                return user
            } 
            return user
        })
        setUserList(updatedBookmarks)
    }

    return <Users   usersList={usersList} 
                    userMeetYouCount={userMeetYouCount} 
                    onDeleteUser={handleDeleteUser} 
                    onToggleBookmark={handleToggleBookmark} 
            />
}

export default App
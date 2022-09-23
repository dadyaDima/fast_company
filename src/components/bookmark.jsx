import React from 'react'

const Bookmarks = ({usersList, userId}) => {
    const selectedUser = usersList.find(user => user._id === userId)

    return selectedUser.bookmark ? <i className="bi bi-bookmark-plus"></i> : <i className="bi bi-bookmark-plus-fill"></i>
}

export default Bookmarks
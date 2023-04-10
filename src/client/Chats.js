import React, { useState } from "react";

const chats = [
    {
        "id": 2,
        "users": [
            {
                "avatar": "/uploads/avatar1.png",
                "username": "fulan"
            },
            {
                "avatar": "/uploads/avatar2.png",
                "username": "adam"
            }
        ]
    },
    {
        "id": 4,
        "users": [
            {
                "avatar": "/uploads/avatar1.png",
                "username": "fulan"
            },
            {
                "avatar": "/uploads/avatar2.png",
                "username": "adam"
            }
        ]
    },
    {
        "id": 5,
        "users": [
            {
                "avatar": "/uploads/avatar1.png",
                "username": "fulan"
            },
            {
                "avatar": "/uploads/avatar2.png",
                "username": "adam"
            }
        ]
    },
    {
        "id": 6,
        "users": [
            {
                "avatar": "/uploads/avatar1.png",
                "username": "fulan"
            },
            {
                "avatar": "/uploads/avatar2.png",
                "username": "adam"
            }
        ]
    }
]

const usernamesToString = (users) => {
    const userLists = users.slice(1);
    var usernameString = '';

    for (let i = 0; i < userLists.length; i++) {
        usernameString += userLists[i].username;
        if (i - 1 === userLists.length) {
            usernameString += ', ';
        }
    }
    return usernameString;
}

const shorten = (text) => {
    if (text.length > 12) {
        return text.substring(0, text.length - 9) + '...';
    }
    return text;
}

const Chats = () => {
    return (
        <div className="chats">
            {chats.map((chat, i) =>
                <div key={chat.id} className="chat">
                    <div className="header">
                        <img src={(chat.users.length > 2 ?
                            '/public/group.png' :
                            chat.users[1].avatar)} />
                        <div>
                            <h2>{shorten(usernamesToString
                                (chat.users))}</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Chats;
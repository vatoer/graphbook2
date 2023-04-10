import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CHATS = gql`{
    chats {
        id
        users {
            id
            avatar
            username
        }
        lastMessage {
            text
        }
    }
}`;

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
    const { loading, error, data } = useQuery(GET_CHATS);

    if (loading) return <div className="chats"><p>Loading...</p></div>;
    if (error) return <div className="chats"><p>{error.message}</p></div>;
    const { chats } = data;
    
    return (
        <div className="chats">
            {chats.map((chat, i) =>
                <div key={chat.id} className="chat">
                    <div className="header">
                        <img src={(chat.users.length > 2 ?
                            '/public/group.png' :
                            chat.users[1].avatar)} />
                        <div>
                            <h2>{shorten(usernamesToString(chat.users))}</h2>
                            <span>{chat?.lastMessage?.text}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Chats;
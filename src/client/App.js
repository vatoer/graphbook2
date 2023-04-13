import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../../assets/css/style.css';
import Feed from './Feed';
import Chats from './Chats';
import './components/fontawesome';
import Bar from './components/bar';
import LoginRegisterForm from './components/loginregister';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('jwt'));
    return (
        <div className="container">
            <Helmet>
                <title>Graphbook - Feed</title>
                <meta name="description" content="Newsfeed of all your friends on Graphbook" />
            </Helmet>

            {loggedIn && (
                <div>
                    <Bar changeLoginState={setLoggedIn} />
                    <Feed />
                    <Chats />
                </div>
            )}
            {!loggedIn && ( <LoginRegisterForm changeLoginState = {setLoggedIn} /> )}

        </div>
    )
}
export default App
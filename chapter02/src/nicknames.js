import React, { Component } from 'react';

class Nicknames extends Component {
    render() {
        const nicknames = ["Sibu", "Khnaya", "Nnandi"];
        const listNicknames = nicknames.map((nickname) =>
            <li key={nickname.toString()}>{nickname}</li>
        );

        return (
            <div>
                <h2>Nicknames:</h2>
                <ul>{listNicknames}</ul>
            </div>
        );
    }
}

export default Nicknames;


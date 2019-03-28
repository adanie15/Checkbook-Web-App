import React from 'react';

const Account = ({ name, balance }) => {
    return (
        <div className='tc bg-light-green dib br3 ba pa3 ma2 grow bw1 shadow-5'>
            <h4>{name}</h4>
            <p>{balance}</p>
            <input type="text" placeholder="money"></input>
            <button>Change</button>
        </div>
    );
}

export default Account;
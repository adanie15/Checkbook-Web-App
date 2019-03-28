import React from 'react';
import Account from './Account.js';
import { accounts } from './PremadeAccounts.js';
const AccountList = ({ account }) => {
    return (
        <div>
            {
                accounts.map(({ account }, i) => {
                    return (
                        <Account 
                            id={accounts[i].id}
                            name={accounts[i].name}
                            balance={accounts[i].balance}
                        />
                    );
                })
            }
        </div>
    );
}

export default AccountList;
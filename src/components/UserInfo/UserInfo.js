import React from 'react';

import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.aboutUser}>
            <div className={css.User}>
                U
            </div>
            <div className={css.fullName}>
                User
            </div>
        </div>
    );
};

export {UserInfo};
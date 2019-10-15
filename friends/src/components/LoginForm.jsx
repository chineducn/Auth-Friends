import React from 'react';

export const LoginForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' value='' />
                <label htmlFor="password">Password</label>
                <input type="text" id='password' value='' />
                <button>Login</button>
            </form>
        </div>
    )
}
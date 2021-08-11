import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function SignIn() {
    return (
        <form method="post">
            <div className="user-signin-container">
                <div className="user-signin-form">
                    <div className="input-item">
                        <TextField fullWidth label="이메일주소" id="input-user-email" />
                    </div>
                    <div className="input-item">
                        <TextField
                            fullWidth
                            type="password"
                            label="패스워드"
                            id="input-user-password"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

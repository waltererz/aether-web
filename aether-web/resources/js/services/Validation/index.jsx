export const validateEmail = (email) => {
    if (
        !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            email,
        )
    ) {
        return false;
    } else {
        return true;
    }
};

export const validatePassword = (password) => {
    if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&\*\(\)])[A-Za-z\d!@#$%^&\*\(\)]{12,}$/g.test(
            password,
        )
    ) {
        return false;
    } else {
        return true;
    }
};

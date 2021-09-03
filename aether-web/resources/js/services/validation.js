export const validateEmail = (email) => {
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/ig.test(email)) {
        return false;
    } else {
        return true;
    }
};

export const validatePassword = (password) => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&\*\(\)])[A-Za-z\d!@#$%^&\*\(\)]{12,}$/ig.test(password)) {
        return false;
    } else {
        return true;
    }
};

export const validatePersonName = (name) => {
    if (!/^((([^가-힣]*)([a-zA-Z]+))|(([^a-zA-Z]*)([가-힣]+)))$/ig.test(name)) {
        return false;
    } else {
        return true;
    }
}
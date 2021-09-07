const ValidatePassword = (password) => {
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

export default ValidatePassword;

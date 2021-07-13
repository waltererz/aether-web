const ValidateEmailAddress = (email) => {
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

export default ValidateEmailAddress;

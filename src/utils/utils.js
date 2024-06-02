export const alreadyAUser = (usersData, userId) => {
    return (usersData.some(obj => obj.userID === userId));
}


export async function getUserName() {
    return await localStorage.getItem("user_name");
}
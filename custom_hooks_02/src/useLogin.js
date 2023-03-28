import { useState } from "react";

export function useLogin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)

    function setUser(e) {
        setUsername(e.target.value)
    }
    function setPass(e) {
        setPassword(e.target.value)
    }
    function setCheck(e) {
        setRemember(e.target.checked)
    }

    return {
        onUsername: setUser,
        onPassword: setPass,
        onRemember: setCheck,
        username: username,
        password: password,
        rememeber: remember
    }
}

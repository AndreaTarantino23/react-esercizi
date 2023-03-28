import { useState } from "react";

export function Login() {

    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target

        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    console.log(data)
    return (
        <form>
            <input name="username" onChange={handleInputChange} value={data.username} ></input>
            <input name="password" onChange={handleInputChange} value={data.password} type="password" ></input>
            <input name="remember" onChange={handleInputChange} checked={data.remember} type="checkbox" ></input>
        </form>
    )

}   

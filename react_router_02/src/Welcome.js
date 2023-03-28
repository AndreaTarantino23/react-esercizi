import { useParams } from "react-router-dom"

export function Welcome() {
    const { name = "Andrea" } = useParams()
    return <h1>Hello {name}!</h1>
}
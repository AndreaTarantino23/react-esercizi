export function Sum({ arr }) {
    console.log(arr);
    return (
        <h1>{arr.reduce((a, b) => a + b, 0)}</h1>
    )
}
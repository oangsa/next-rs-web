import React from 'react'


export default function test() {
    
    const click = async () => {
        const res = await fetch("/api/testApi/58528?isUserUpdate=false")

        console.log(res.status)
    }

    return (
        <button onClick={click}> ClickMe! </button>
    )
}

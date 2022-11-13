import {useEffect, useState} from 'react'

export default () => {
    const [user, setUser] = useState({name:null})
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
            .then(type=>type.json())
            .then(result=>{
                setUser(result)
            })
    })
    return <>
        <h1>/pages/sub/about.js</h1>
        <p>{user.name}</p>
        <a href="/">/pages/index/js</a>
    </>
}
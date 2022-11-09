import {useRouter} from 'next/router'
export default () => {
    const router = useRouter();
    return <>
        <h1>/pages/sub/about.js</h1>
        <a href="/">/pages/index/js</a>
        <div>
            {router.query.id}
        </div>
    </>
}
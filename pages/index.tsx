import Link from 'next/link'
import React from 'react'

const Home = () => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw'
        }}>
            <h1>Exemplo de como utilizar o react-query</h1>
            <ul style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                listStyle: 'none',
                border: '1px solid black',
                borderRadius: '5px',
                padding: '10px',
                width: '500px',
                fontSize: '1.8rem'
            }}>
                <li style={{ marginBottom: '10px' }}>
                    <Link href="/react-query">
                        <a>React Query</a>
                    </Link>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <Link href="/fetch">
                        <a>Fetch</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Home

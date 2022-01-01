import Link from 'next/link'
import React from 'react'


export const Template: React.FC = ({ children }) => {
    return (
        <div 
            style={{ 
                maxWidth: '800px', 
                margin: '0 auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center'
            }}
        >
            <>
                <Link href="/">
                    <a>Voltar</a>
                </Link>
                {children}            
            </>
        </div>
    )
}

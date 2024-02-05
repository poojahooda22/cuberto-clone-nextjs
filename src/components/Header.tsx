import React from 'react';
import  IonIcon  from '@reacticons/ionicons'
import  Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <div 
            className='flex flex-row items-center justify-between
            mx-8 my-2 sticky'
        >
            <div>
                <Link href='' >
                    </Link>
            
            </div>
            <div className='flex flex-row 
                items-center gap-4'
            >
                menu
                <IonIcon 
                    name="reorder-two-outline" 
                    size="large"
                >
                </IonIcon> {/* Re */}
            </div>
        </div>
    )
}

export default Header

import React from 'react';
import  IonIcon  from '@reacticons/ionicons'
import  Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <div 
            className='flex items-center justify-between 
            mx-4  sticky'
        >
            <div>
                <Link href='/' >
                    <Image  
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAAclBMVEX///8AAABZWVktLS06Ojpqamr19fWFhYX6+vrW1tYwMDBmZmbQ0NDv7++RkZHc3Nx7e3uLi4urq6tKSkoRERHl5eW9vb11dXWXl5coKCh+fn7i4uJQUFCnp6fExMSysrJDQ0NeXl4hISGdnZ0ZGRkUFBTp373UAAAE3UlEQVR4nO2aa3erKhCGNc3NXMz9amPSpPv//8VThQEUPM3u0ayetZ7nk2FwGF4QBtooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeD3ZomDYiq/S1aIVV6/nFBfMWvG1LX214ur19FsU4g0hFAihQQgNQmgQQoMQml8nxLzgybpWiPl+fV3vxg0u14XxG1//KsQ8ecJDmySHexnP6WjSxeVpMpmcDrbOcDspStJIhEiiy2esGOSey+FRuYy3Z6cng8LrthAuSY+TYyRCHFPBcbFWiVv8Z/oiLRab2LKSkMtfU1trqOyjSIQ4O2/Fb1nV58o1fpgp01Pjny1NW29xFeNh75a+RIq0GsldfSDfC1Hj6ric32tG6YcSYuCI3iDE8KNWvu9ch1VcZ/YjIRwlZr4xc4UQmoUYf8Z11i/XIY6HPxLCKDEMGbO/EmIS8NDOLtXEPtBifPuZEPIB3EK2SUCIUZMQo6D7ds79YcbSyCop9kKJavGsEIfFMMpyWWw3ZcW1/rUtP+tcZLnUhEjzZGeEyBKhqDV3o9pdt9JYh0IcVRM3WczKD+W9WC6fEWIriUeuC8rZq+PuRa5PPdZGiIdYQ3nEQXsQ9w/9Uodbh9bBFqxkVXpCiE87V3Pbeb1SflR8ikoihN0DAkLMa0qaD3gVdYWO380oB/rHE0IkzmupGXU9nG62qRKjc2SEOFpbQIi1H9VH7FdrEzVWy5DpeyEGlfrK+rW4bKpTv0DpfY+MEI4tIMSqLpaZJA25/H/nYOasx/dCVNNq5Wod3jtN93vGhxAQ4haIatIcaRtMvDlo+F6IalQyjM8I4WaJASE2fpF2n0QdEbctxOMpIdwGnxTi+CuFCM3TvxHC/dR/hxCDnwmx9Ca41P+pEJUeKiGqx9m+X61NVPTB7VmZnL1cJ6HFhcGxLlLk7RrXKIgvxM3IWysK7RqdLZbX0v3dDUyeB2YUNbmNRedM7pjpFPXr7XP9xa8s2Tz5QqR+de3LPVqM/FqtslP+nSR+JmOp8yI7sjqLKjdN9fjuOepHRiXHZ2q9+EIsPF/iwc8s3Uot816LemaaU5Ml/iMLiBylyh9LHZj0SPdGLRsn+w2VFAP8rt34QojATre1zjYqOSJ3eCUhVyincpqPR3b6m3NpYnpToBYGczwsj5RzOTVvK2H3S1lmqu9blX4FhJAQtmU3E7cx5SE7SGvd6eAcBye9nj0jFxa5T4vvrkUvV/Y6Z9N7qxv7jtE8uvcR1Ux5aur0eieVm9+dIntH07AAt0NwtyvHZhyymPNF/T6l4KxtWejNeaMQ45NXMXDX1+11ROTMcos+MCWBYOx7/mWa3U4DSuikIySErLRufy++h1NnJy6Np8RFLP41nrNhjutz4uz4XNRvsSX5CgoRjSvVyw9sXXMQb7rWITI7vxuHojYnNtXXjhVj7QOu3DpOTUoQFqL2J4WyJKvefKbeK10ws2HXdqiHDeXmpXWZCf+Uen3bGePUSYw3DUJE85XMiqkc72dWitULpoMmfyyXh2sgl5+tl8vCFL4vzC9ftn3D/4It8muaB7Lihl4t8sdhX7nkGOdF25f/67+aAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/FL+AV/RMro15Pj6AAAAAElFTkSuQmCC" 
                    alt="" data-cursor-text="Cuberto"
                    width={120} height={120}
                    />
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

import React from 'react'
import "./Appdownload.css"

const Appdownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For better experience download <br />QuickDrive app</p>
            <div className="store-image">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img className="storeimage" id="appstore" src="/appstore.png" alt="" /></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img className="storeimage" id="playstore" src="/playstore.png" alt="" /></a>
            </div>

        </div>
    )
}

export default Appdownload

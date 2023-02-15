import React, { useState } from 'react'
import siteContext from './SiteContext'

const SiteState = (props) => {
    const [statusAndType, setUserType] = useState({})
    const value = {
        userType : [userType, setUserType]
    }

    return (
        <siteContext.Provider value={value} >
            {props.children}
        </siteContext.Provider>
    )
}

export default SiteState
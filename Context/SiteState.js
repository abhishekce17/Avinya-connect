import React, { useState } from 'react'
import SiteContext from './SiteContext'

const SiteState = (props) => {
    const [statusAndType, setUserType] = useState({})
    const value = {
        userType : [statusAndType, setUserType]
    }

    return (
        <SiteContext.Provider value={value} >
            {props.children}
        </SiteContext.Provider>
    )
}

export default SiteState
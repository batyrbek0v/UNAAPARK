import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { toBase } from "../configs/api";
import { auth } from "../firebase/firebase";
import { useAuth } from "./useAuth";





export const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {

    const [users, setUsers] = React.useState(null)
    const [loading, setLoading] = React.useState(true)


    React.useEffect(() => {
        const Listen = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers({
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                })

                setLoading(false)
            } else {
                setLoading(false)
            }
        })
        return () => Listen()
    }, [])


    const value = React.useMemo(() => ({
        users, 
        loading
    }), [users, loading] )

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}
















// import React from 'react'
// import { useEffect } from 'react'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../../firebase/firebase'
// import { useState } from 'react'


// const UseLogin = () => {

//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const Listen = onAuthStateChanged(auth, user => {

//       if (user) {
//         setLoading(false)
//         setUser({
//           id: user.uid,
//           name: user.displayName,
//           email: user.email,
//           photo: user.photoURL,
//         })
//       } else {
//         setLoading(false)
//       }
//     })

//     return () => Listen()

//   }, [])

//   return {
//     user, loading
//   }
// }

// export default UseLogin




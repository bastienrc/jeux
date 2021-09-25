// import { useContext } from 'react'

// function Auth () {
//   return useContext({
//     isAuthenticated: false,
//     setIsAuthenticated: value => {}
//   })
// }

// export default Auth

import React from 'react'

export default React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: value => {}
})

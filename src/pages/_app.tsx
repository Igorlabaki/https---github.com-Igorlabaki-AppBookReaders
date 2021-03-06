import '../../src/styles/globals.css'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import {AuthProvider} from '../data/context/AuthContext'

function MyApp({ Component, pageProps }) {
  return  (
    <AuthProvider>
         <Component {...pageProps} />
    </AuthProvider>

  )
}

export default MyApp

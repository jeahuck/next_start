import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' themes={['pink', 'red', 'blue', 'light', 'dark']}>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default MyApp
import react from 'react'
import { ScrollViewStyleReset } from 'expo-router/html'

const Root = ({ children }: react.PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <ScrollViewStyleReset />

        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
      </head>
      <body
        style={{
          background: '#030013',
        }}
      >
        {children}
      </body>
    </html>
  )
}

export default Root

const responsiveBackground = `
body {
  background-color: #030013;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #030013;
  }
}`

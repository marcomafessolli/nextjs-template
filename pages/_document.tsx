import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

async function getInitialProps(context: DocumentContext) {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = context.renderPage

  try {
    context.renderPage = () => {
      return originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })
    }

    const initialProps = await Document.getInitialProps(context)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}

export default class extends Document {
  getInitialProps = getInitialProps
}

import { Component } from 'react'
import App, { Container } from 'next/app';
import ErrorComponent from '@/components/error'

// react app.js (handle error with boundary)
export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const props = {
      ...pageProps,
      router
    }
    return (
      <ErrorBoundary>
        <Container>
          <Component {...props} />
        </Container>
      </ErrorBoundary>
    );
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
    console.log({ error, errorInfo })
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return <ErrorComponent />
    }
    // Normally, just render children
    return this.props.children;
  }
}
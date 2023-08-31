import { Component, ReactNode } from 'react'

type ErrorBoundaryProps = {
  children?: ReactNode
  fallback?: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <p>
          문제가 발생했습니다!!! <span>{this.state.error?.message}</span>
        </p>
      )
    }

    return this.props.children
  }
}

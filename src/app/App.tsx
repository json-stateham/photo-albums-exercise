import { lazy, Suspense } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ErrorBoundary } from 'react-error-boundary'

import CssBaseline from '@mui/material/CssBaseline'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'

const MainPage = lazy(() => import('pages/main'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
})

const App = () => (
  <>
    <CssBaseline />

    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                There was an error!{' '}
                <Button variant="outlined" onClick={() => resetErrorBoundary()}>
                  Try again
                </Button>
                <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
              </div>
            )}
            onReset={reset}
          >
            <Suspense fallback={<CircularProgress color="inherit" />}>
              <MainPage />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
)

export { App }

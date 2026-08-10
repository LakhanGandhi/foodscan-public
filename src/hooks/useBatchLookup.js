import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchPublicBatch } from '../api/batches.js'

/**
 * Reads `id` from the URL query string (?id=BAT_xxx) and fetches the
 * corresponding public batch bundle.
 *
 * Returns:
 *   - status: 'missing_id' | 'loading' | 'not_found' | 'error' | 'success'
 *   - data: the batch bundle (only set when status === 'success')
 *   - errorMessage: human-readable message (only set when status === 'error')
 */
export function useBatchLookup() {
  const [searchParams] = useSearchParams()
  const batchId = searchParams.get('id')

  const [status, setStatus] = useState(batchId ? 'loading' : 'missing_id')
  const [data, setData] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if (!batchId) {
      setStatus('missing_id')
      setData(null)
      return
    }

    let cancelled = false
    setStatus('loading')
    setData(null)
    setErrorMessage(null)

    fetchPublicBatch(batchId)
      .then((result) => {
        if (cancelled) return
        setData(result)
        setStatus('success')
      })
      .catch((err) => {
        if (cancelled) return
        if (err.status === 404) {
          setStatus('not_found')
        } else {
          setStatus('error')
          setErrorMessage(err.message)
        }
      })

    return () => {
      cancelled = true
    }
  }, [batchId])

  return { batchId, status, data, errorMessage }
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

/**
 * Fetches the public-facing batch/product/plant/company bundle for a given batch ID.
 * No auth required — this hits the already-live public endpoint.
 *
 * Returns the parsed `data` object on success.
 * Throws an Error with a `status` property attached on failure, so callers
 * can distinguish "not found" (404) from other errors (network/5xx).
 */
export async function fetchPublicBatch(batchId) {
  const response = await fetch(`${API_BASE_URL}/public/batches/${batchId}`)

  let body
  try {
    body = await response.json()
  } catch {
    body = null
  }

  if (!response.ok) {
    const message = body?.error || `Request failed with status ${response.status}`
    const error = new Error(message)
    error.status = response.status
    throw error
  }

  if (!body?.success) {
    const error = new Error(body?.error || 'Unexpected response shape')
    error.status = response.status
    throw error
  }

  return body.data
}

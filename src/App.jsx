import { useBatchLookup } from './hooks/useBatchLookup.js'

function App() {
  const { batchId, status, data, errorMessage } = useBatchLookup()

  if (status === 'missing_id') {
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>FoodCheck</h1>
        <p>No product code found in this link. Please rescan the QR code on the package.</p>
      </div>
    )
  }

  if (status === 'loading') {
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <p>Loading product info…</p>
      </div>
    )
  }

  if (status === 'not_found') {
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>FoodCheck</h1>
        <p>We couldn't find a product for code "{batchId}". It may be invalid or removed.</p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>FoodCheck</h1>
        <p>Something went wrong loading this product{errorMessage ? `: ${errorMessage}` : '.'}</p>
      </div>
    )
  }

  // status === 'success'
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>FoodCheck</h1>
      <p>Data loaded for {batchId} — full display layout comes next.</p>
      <pre style={{ background: '#f4f4f4', padding: '1rem', overflowX: 'auto' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default App

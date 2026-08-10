import { useBatchLookup } from './hooks/useBatchLookup.js'
import StatusBanner from './components/StatusBanner.jsx'
import ProductInfo from './components/ProductInfo.jsx'
import BatchInfo from './components/BatchInfo.jsx'
import PlantInfo from './components/PlantInfo.jsx'
import CompanyInfo from './components/CompanyInfo.jsx'

const PAGE_STYLE = {
  padding: '1.5rem',
  fontFamily: 'sans-serif',
  maxWidth: '640px',
  margin: '0 auto',
}

function App() {
  const { batchId, status, data, errorMessage } = useBatchLookup()

  if (status === 'missing_id') {
    return (
      <div style={PAGE_STYLE}>
        <h1>FoodCheck</h1>
        <p>No product code found in this link. Please rescan the QR code on the package.</p>
      </div>
    )
  }

  if (status === 'loading') {
    return (
      <div style={PAGE_STYLE}>
        <p>Loading product info…</p>
      </div>
    )
  }

  if (status === 'not_found') {
    return (
      <div style={PAGE_STYLE}>
        <h1>FoodCheck</h1>
        <p>We couldn't find a product for code "{batchId}". It may be invalid or removed.</p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div style={PAGE_STYLE}>
        <h1>FoodCheck</h1>
        <p>Something went wrong loading this product{errorMessage ? `: ${errorMessage}` : '.'}</p>
      </div>
    )
  }

  // status === 'success'
  return (
    <div style={PAGE_STYLE}>
      <StatusBanner recalled={data.batch?.recalled} expiryStatus={data.batch?.expiryStatus} />
      <ProductInfo product={data} />
      <BatchInfo batch={data.batch} />
      <PlantInfo plant={data.plant} />
      <CompanyInfo company={data.company} />
    </div>
  )
}

export default App

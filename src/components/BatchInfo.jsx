function formatDate(isoString) {
  if (!isoString) return '—'
  const d = new Date(isoString)
  if (isNaN(d)) return isoString
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}

function BatchInfo({ batch }) {
  if (!batch) return null

  return (
    <section className="section">
      <p className="field-label">Batch</p>
      {batch.batchNumber && <p className="mrz-strip">{batch.batchNumber}</p>}
      <dl className="field-grid">
        <dt>Manufactured</dt>
        <dd>{formatDate(batch.mfgDate)}</dd>
        <dt>Expires</dt>
        <dd>{formatDate(batch.expDate)}</dd>
      </dl>
    </section>
  )
}

export default BatchInfo

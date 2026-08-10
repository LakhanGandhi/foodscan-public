function formatDate(isoString) {
  if (!isoString) return '—'
  const d = new Date(isoString)
  if (isNaN(d)) return isoString
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}

/**
 * Batch-level info: batch number, mfg date, exp date.
 * Recall flag and expiry status badge are handled separately by StatusBanner.
 */
function BatchInfo({ batch }) {
  if (!batch) return null

  return (
    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Batch Info</h3>
      <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '0.75rem', rowGap: '0.35rem', margin: 0 }}>
        <dt style={{ fontWeight: 600 }}>Batch Number</dt>
        <dd style={{ margin: 0 }}>{batch.batchNumber || '—'}</dd>

        <dt style={{ fontWeight: 600 }}>Manufactured On</dt>
        <dd style={{ margin: 0 }}>{formatDate(batch.mfgDate)}</dd>

        <dt style={{ fontWeight: 600 }}>Expires On</dt>
        <dd style={{ margin: 0 }}>{formatDate(batch.expDate)}</dd>
      </dl>
    </section>
  )
}

export default BatchInfo

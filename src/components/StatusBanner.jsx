const EXPIRY_STYLES = {
  safe: { background: '#e6f4ea', color: '#1e7e34', border: '#1e7e34' },
  near_expiry: { background: '#fff8e1', color: '#9a6b00', border: '#9a6b00' },
  expired: { background: '#fdecea', color: '#c62828', border: '#c62828' },
}

/**
 * Shows the recall warning (if recalled) and the expiry status badge.
 * Recall takes visual priority — it's rendered first and styled most aggressively,
 * since it's a safety-critical flag.
 */
function StatusBanner({ recalled, expiryStatus }) {
  const expiryStyle = EXPIRY_STYLES[expiryStatus?.key] || EXPIRY_STYLES.safe

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {recalled && (
        <div
          role="alert"
          style={{
            background: '#c62828',
            color: '#fff',
            padding: '1rem 1.25rem',
            borderRadius: '6px',
            marginBottom: '0.75rem',
            fontWeight: 700,
            fontSize: '1.05rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span aria-hidden="true">⚠️</span>
          <span>This batch has been RECALLED. Do not consume this product.</span>
        </div>
      )}

      {expiryStatus && (
        <div
          style={{
            display: 'inline-block',
            background: expiryStyle.background,
            color: expiryStyle.color,
            border: `1px solid ${expiryStyle.border}`,
            padding: '0.4rem 0.9rem',
            borderRadius: '999px',
            fontWeight: 600,
            fontSize: '0.9rem',
          }}
        >
          {expiryStatus.label}
        </div>
      )}
    </div>
  )
}

export default StatusBanner

function CompanyInfo({ company }) {
  if (!company) return null

  const addr = company.address || {}
  const addressParts = [addr.line1, addr.line2, addr.city, addr.state, addr.country, addr.pinCode].filter(Boolean)

  return (
    <section className="section">
      <p className="field-label">Brand Owner</p>
      <p style={{ margin: '0 0 0.3rem', fontWeight: 600 }}>{company.name}</p>
      {addressParts.length > 0 && (
        <p style={{ margin: '0 0 0.6rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
          {addressParts.join(', ')}
        </p>
      )}
      <dl className="field-grid">
        {company.website && (
          <>
            <dt>Website</dt>
            <dd><a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></dd>
          </>
        )}
        {company.email && (
          <>
            <dt>Email</dt>
            <dd>{company.email}</dd>
          </>
        )}
        {company.phoneNumber && (
          <>
            <dt>Phone</dt>
            <dd>{company.phoneNumber}</dd>
          </>
        )}
      </dl>
    </section>
  )
}

export default CompanyInfo

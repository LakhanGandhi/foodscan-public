/**
 * Brand owner / company info: name, address, contact details.
 */
function CompanyInfo({ company }) {
  if (!company) return null

  const addr = company.address || {}
  const addressParts = [addr.line1, addr.line2, addr.city, addr.state, addr.country, addr.pinCode].filter(Boolean)

  return (
    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Brand Owner</h3>
      <p style={{ margin: '0 0 0.35rem', fontWeight: 600 }}>{company.name}</p>
      {addressParts.length > 0 && <p style={{ margin: '0 0 0.35rem', color: '#555' }}>{addressParts.join(', ')}</p>}
      <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '0.75rem', rowGap: '0.25rem', margin: 0 }}>
        {company.website && (
          <>
            <dt style={{ fontWeight: 600 }}>Website</dt>
            <dd style={{ margin: 0 }}>
              <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a>
            </dd>
          </>
        )}
        {company.email && (
          <>
            <dt style={{ fontWeight: 600 }}>Email</dt>
            <dd style={{ margin: 0 }}>{company.email}</dd>
          </>
        )}
        {company.phoneNumber && (
          <>
            <dt style={{ fontWeight: 600 }}>Phone</dt>
            <dd style={{ margin: 0 }}>{company.phoneNumber}</dd>
          </>
        )}
      </dl>
    </section>
  )
}

export default CompanyInfo

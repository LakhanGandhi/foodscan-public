function PlantInfo({ plant }) {
  if (!plant) return null

  const addressParts = [plant.address, plant.city, plant.state, plant.country, plant.pinCode].filter(Boolean)

  return (
    <section className="section">
      <p className="field-label">Manufactured At</p>
      <p style={{ margin: '0 0 0.3rem', fontWeight: 600 }}>{plant.name}</p>
      {addressParts.length > 0 && (
        <p style={{ margin: '0 0 0.5rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
          {addressParts.join(', ')}
        </p>
      )}
      {plant.fssaiLicense && (
        <dl className="field-grid">
          <dt>FSSAI License</dt>
          <dd>{plant.fssaiLicense}</dd>
        </dl>
      )}
    </section>
  )
}

export default PlantInfo

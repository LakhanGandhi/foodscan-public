/**
 * Manufacturing plant info: address + FSSAI license.
 */
function PlantInfo({ plant }) {
  if (!plant) return null

  const addressParts = [plant.address, plant.city, plant.state, plant.country, plant.pinCode].filter(Boolean)

  return (
    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Manufactured At</h3>
      <p style={{ margin: '0 0 0.35rem', fontWeight: 600 }}>{plant.name}</p>
      {addressParts.length > 0 && <p style={{ margin: '0 0 0.35rem', color: '#555' }}>{addressParts.join(', ')}</p>}
      {plant.fssaiLicense && (
        <p style={{ margin: 0 }}>
          <span style={{ fontWeight: 600 }}>FSSAI License:</span> {plant.fssaiLicense}
        </p>
      )}
    </section>
  )
}

export default PlantInfo

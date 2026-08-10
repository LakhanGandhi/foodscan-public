/**
 * Product catalog info: name, brand, images, ingredients, allergens,
 * certifications, and nutrition-per-100g table.
 * `product` is the top-level response object (name/sku/brand/images/etc. live at the root).
 */
function ProductInfo({ product }) {
  const {
    name,
    brand,
    category,
    description,
    countryOfOrigin,
    storageCondition,
    images,
    ingredients = [],
    nutritionPer100g,
    allergens = [],
    certifications = [],
  } = product

  const imageList = Object.values(images || {}).filter(Boolean)

  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2 style={{ marginBottom: '0.25rem' }}>{name}</h2>
      {brand && <p style={{ color: '#555', marginTop: 0 }}>{brand}{category ? ` · ${category}` : ''}</p>}

      {description && <p>{description}</p>}

      {imageList.length > 0 && (
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1rem 0' }}>
          {imageList.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${name} ${i + 1}`}
              style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #ddd' }}
            />
          ))}
        </div>
      )}

      <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '0.75rem', rowGap: '0.25rem', margin: '1rem 0' }}>
        {countryOfOrigin && (
          <>
            <dt style={{ fontWeight: 600 }}>Country of Origin</dt>
            <dd style={{ margin: 0 }}>{countryOfOrigin}</dd>
          </>
        )}
        {storageCondition && (
          <>
            <dt style={{ fontWeight: 600 }}>Storage</dt>
            <dd style={{ margin: 0 }}>{storageCondition}</dd>
          </>
        )}
      </dl>

      {ingredients.length > 0 && (
        <div style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ marginBottom: '0.25rem' }}>Ingredients</h3>
          <p style={{ margin: 0 }}>{ingredients.join(', ')}</p>
        </div>
      )}

      {allergens.length > 0 && (
        <div style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ marginBottom: '0.25rem' }}>Allergens</h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {allergens.map((a) => (
              <span
                key={a}
                style={{
                  background: '#fdecea',
                  color: '#c62828',
                  border: '1px solid #c62828',
                  borderRadius: '999px',
                  padding: '0.2rem 0.7rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      )}

      {certifications.length > 0 && (
        <div style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ marginBottom: '0.25rem' }}>Certifications</h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {certifications.map((c) => (
              <span
                key={c}
                style={{
                  background: '#e6f4ea',
                  color: '#1e7e34',
                  border: '1px solid #1e7e34',
                  borderRadius: '999px',
                  padding: '0.2rem 0.7rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      )}

      {nutritionPer100g && Object.keys(nutritionPer100g).length > 0 && (
        <div>
          <h3 style={{ marginBottom: '0.25rem' }}>Nutrition (per 100g)</h3>
          <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '360px' }}>
            <tbody>
              {Object.entries(nutritionPer100g).map(([key, value]) => (
                <tr key={key} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '0.35rem 0.5rem 0.35rem 0', textTransform: 'capitalize', color: '#555' }}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </td>
                  <td style={{ padding: '0.35rem 0', fontWeight: 600, textAlign: 'right' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ProductInfo

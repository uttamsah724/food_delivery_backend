const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
});

async function calculatePrice(total_distance, item_type) {
  const settingsResult = await pool.query('SELECT * FROM pricing_settings LIMIT 1');
  const settings = settingsResult.rows[0];

  if (!settings) {
    throw new Error('Pricing settings not found');
  }
  let total_price = parseFloat(settings.base_price_euro); 
  const distanceBeyondBase = Math.max(0, total_distance - settings.base_distance_km);

  if (item_type === 'perishable') {
    total_price += distanceBeyondBase * parseFloat(settings.per_km_rate_perishable);
  } else {
    total_price += distanceBeyondBase * parseFloat(settings.per_km_rate_nonperishable);
  }
  return total_price; 
}

module.exports = { calculatePrice };

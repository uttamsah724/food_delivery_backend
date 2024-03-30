const { calculatePrice } = require('../services/pricingService');

exports.calculatePriceHandler  = async (req, res) => {
    const { total_distance, item_type } = req.body;
    try {
      const total_price = await calculatePrice(total_distance, item_type);
      res.json({ total_price: total_price.toFixed(1) }); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};



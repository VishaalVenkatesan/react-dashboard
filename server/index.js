const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4001;

// Apply CORS middleware
app.use(cors());

app.get('/api/drivers', async (req, res) => {
  const { country } = req.query;

  // Validate country parameter
  if (!country || !['USA', 'IND'].includes(country)) {
    return res.status(400).send({ error: 'Invalid country code' });
  }

  try {
    // Fetch data from external API based on country
    const response = await axios.get(`${process.env.API_URL}?countryName=${country}`);
    res.send(response.data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data from API:', error.message);
    res.status(500).send({ error: 'Error fetching data from API' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
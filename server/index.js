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
    const response = await axios.get(`https://us-central1-projectexperiment-420611.cloudfunctions.net/assignApi?countryName=${country}`);
    res.send(response.data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data from API:', error.message);
    res.status(500).send({ error: 'Error fetching data from API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

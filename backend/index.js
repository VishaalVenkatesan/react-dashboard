// backend/index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// CORS Middleware
app.use(cors({
  origin: "https://react-dashboard-vishaal-venkatesan.vercel.app/",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/api/drivers', async (req, res) => {
  const { country } = req.query;

  if (!country || !['USA', 'IND'].includes(country)) {
    return res.status(400).send({ error: 'Invalid country code' });
  }

  try {
    const response = await axios.get(`https://us-central1-projectexperiment-420611.cloudfunctions.net/assignApi?countryName=${country}`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching data from API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on https://react-dashboard-vishaal-venkatesan.vercel.app/`);
});

const axios = require('axios');

const fetchURL = async () => {
  try {
    const response = await axios.get('https://www.zohoapis.eu/crm/v2/functions/sdf/actions/execute?auth_type=apikey&zapikey=1003.9552b5269995cad6fca271a0f47923f5.66a0c058aea1351a19552c3ee8c67813'); // Replace with your desired URL
    console.log('Response:', response.data);
    // Handle the data or perform operations here
  } catch (error) {
    console.error('Error fetching the URL:', error.message);
    // Handle errors here
  }
};

fetchURL();
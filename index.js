const axios = require('axios');

const fetchURL = async () => {
  try {
    const response = await axios.get('https://www.zohoapis.eu/crm/v2/functions/googleChromeCallBack/actions/execute?auth_type=apikey&zapikey=1003.29b5ebdbd0b1861c3c9fd73133b60dd7.a27648e944bcc78c7ba4076a51dc91e8&id=553068000009882122'); // Replace with your desired URL
    console.log('Response:', response.data);
    // Handle the data or perform operations here
  } catch (error) {
    console.error('Error fetching the URL:', error.message);
    // Handle errors here
  }
};

fetchURL();
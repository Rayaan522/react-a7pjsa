const fetchGoogleSheet = async (sheetId, apiKey) => {
  const range = 'Sheet1!A1:E'; // Update the range to match your sheet structure
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return data.values; // Assuming the data is in the first sheet
  } catch (error) {
    console.error('Error fetching Google Sheet data:', error);
    return null;
  }
};

export default fetchGoogleSheet;

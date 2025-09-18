const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const COHORT = "506-ftb-ct-web-pt";
const API = BASE_URL + COHORT;

// Get all the guests
export async function getAllGuests() {
  try {
    const response = await fetch(`${API}/guests`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error with /GET getAllGuests function: ", error);
    throw error;
  }
}


// Get a single guest with ID
export async function getGuestById(Id) {
  try {
    const response = await fetch(`${API}/guests/${Id}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error with /GET getGuestById function: ", error);
    throw error;
  }
}

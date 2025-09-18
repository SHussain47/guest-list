import { useEffect, useState } from "react"
import { getAllGuests, getGuestById } from "./api/guests"
import GuestListSection from "./components/GuestListSection"


export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  // Fetch the guests
  useEffect(() => {
    async function loadGuests() {
      try {
        const data = await getAllGuests();
        setGuests(data);
      } catch (error) {
        console.error("Error loading all the guests: ", error);
      }
    }
    loadGuests();
  }, [])

  // Fetch a single guest with id




  return (
    <main>
      <h1 className="title">Guest List</h1>
      <GuestListSection 
        guests={guests} 
        setSelectedGuestId={setSelectedGuestId} 
      />
    </main>
  );
}

import { useEffect, useState } from "react";
import { getAllGuests, getGuestById } from "./api/guests";
import GuestListSection from "./components/GuestListSection";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const [loading, setLoading] = useState(false);



  // Fetch all the guests
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
  }, []);

  // Fetch a single guest with id
  useEffect(() => {
    if (!selectedGuestId) return;

    async function loadSingleGuest() {
      setLoading(true)
      try {
        const data = await getGuestById(selectedGuestId);
        setSelectedGuest(data);
      } catch (error) {
        console.error("Error loading single guest: ", error);
      } finally {
        setLoading(false);
      }
    }
    loadSingleGuest();
  }, [selectedGuestId]);



  return (
    <main>
      {selectedGuestId ? (
        <GuestDetails 
          guest={selectedGuest}
          loading={loading}
          onBack={() => {
            setSelectedGuestId(null);
            setSelectedGuest(null);
          }}
        />
      ) : (
        <>
          <h1 className="title">Guest List</h1>
          <GuestListSection 
            guests={guests} 
            setSelectedGuestId={setSelectedGuestId} 
          />
        </>
      )}
    </main>
  );
}

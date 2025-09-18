import SingleGuest from "./SingleGuest";


export default function GuestListSection({ guests, setSelectedGuestId }) {
  return (
    <>
      {guests.length === 0 ? (
        <p>No guests</p>
      ) : (
        <table className="guest-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <SingleGuest 
                key={guest.id} 
                guest={guest} 
                setSelectedGuestId={setSelectedGuestId} 
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}



/**
 * <ul className="guest-list">
          {guests.map((guest) => {
            return (
              <SingleGuest 
                key={guest.id} 
                guest={guest} 
                setSelectedGuestId={setSelectedGuestId} 
              />
            );
          })}
        </ul>
 */
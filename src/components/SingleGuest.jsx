export default function SingleGuest({ guest, setSelectedGuestId }) {
  return (
    <tr
      className="single-guest" 
      onClick={() => setSelectedGuestId(guest.id)}
    >
      <td>{guest.name}</td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
    </tr>
  );
}

/**
 * <li  
      className="single-guest" 
      onClick={() => setSelectedGuestId(guest.id)}
    >
      <span>{guest.name}</span>
      <span>{guest.email}</span>
      <span>{guest.phone}</span>
    </li>
 */

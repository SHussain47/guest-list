export default function GuestDetails({ guest, loading, onBack }) {
  if (loading) {
    return <p>Loading guest details...</p>;
  }
  
  if (!guest) {
    return <p>Unable to find guest</p>
  }

  return (
    <article className="guest">
      <h2>{guest.name}</h2>
      <div className="guest-details">
        <p className="detail">{guest.email}</p>
        <p className="detail">{guest.phone}</p>
        <p className="detail">{guest.job}</p>
        <p className="detail">{guest.bio}</p>
      </div>
      <button className="back-btn" onClick={onBack}>Back</button>
    </article>
  );
}

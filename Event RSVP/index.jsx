const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(1);
  const [preferences, setPreferences] = useState('');
  const [guests, setGuests] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name*
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Email*
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Number of attendees*
          <input
            type="number"
            required
            min={1}
            value={number}
            onChange={e => setNumber(Number(e.target.value))}
          />
        </label>
        <label>
          Dietary preferences
          <input
            type="text"
            value={preferences}
            onChange={e => setPreferences(e.target.value)}
          />
        </label>
        <label>
          Bringing additional guests?
          <input
            type="checkbox"
            checked={guests}
            onChange={e => setGuests(e.target.checked)}
          />
        </label>
        <button type="submit">Submit RSVP</button>
      </form>
      {submitted && (
        <div>
          <h2>RSVP Submitted!</h2>
          <p>Name: <span>{name}</span></p>
          <p>
            Email: <span><a href={`mailto:${email}`}>{email}</a></span>
          </p>
          <p>Number of attendees: <span>{number}</span></p>
          <p>Dietary preferences: <span>{preferences ? preferences : "None"}</span></p>
          <p>Bringing additional guests: <span>{guests ? "Yes" : "No"}</span></p>
        </div>
      )}
    </div>
  );
}
                                 

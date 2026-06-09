export function EventBanner() {
  const items = [
    "AI event",
    "team meeting",
    "workshop",
    "product sync",
    "founder breakfast",
    "launch session",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="event-banner">
      <div className="event-banner__track">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className="event-banner__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

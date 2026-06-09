export function EventBanner() {
  const announcement =
    "Join us this Thursday evening for the AI Founders Workshop & Community Meetup — live demos, practical sessions, and plenty of polished networking energy.";
  const repeated = [announcement, announcement];

  return (
    <div className="event-banner">
      <div className="event-banner__track">
        {repeated.map((item, index) => (
          <span key={`${index}-${item}`} className="event-banner__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

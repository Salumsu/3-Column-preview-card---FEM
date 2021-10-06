const Card = ({ icon, BG, title, description }) => {
  const mouseOver = (e) => {
    const btn = e.target;
    btn.style.color = "hsl(0, 0%, 95%)";
    btn.style.background = BG;
  };

  const mouseOut = (e) => {
    const btn = e.target;
    btn.style.color = BG;
    btn.style.background = "hsl(0, 0%, 95%)";
  };

  return (
    <div className="card" style={{ backgroundColor: BG }}>
      <img src={icon} alt="icon" />
      <h1>{title}</h1>
      <p>{description}</p>

      <button
        type="button"
        style={{ color: BG }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;

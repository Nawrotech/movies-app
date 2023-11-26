export const RatingComponent = () => {
  return (
    <div onClick={(e) => e.stopPropagation()} className="rating">
      <input min={0} max={10} type="number" />
      <button>Submit rating</button>
    </div>
  );
};

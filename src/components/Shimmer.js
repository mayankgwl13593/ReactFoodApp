const ShimmerComponent = () => {
  let i = 0;
  let el = [];
  do {
    el.push(i);
    i++;
  } while (i < 20);

  return (
    <div className="shimmer-container">
      {el.map((e) => (
        <div key={e} className="shimmer-card"></div>
      ))}
    </div>
  );
};
export default ShimmerComponent;

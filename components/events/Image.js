export default ({ eventName }) => {
  const subUrl = `/static/backgrounds/${eventName}_edited`;
  return (
    <picture style={{ width: "100%" }}>
      <source media="(max-width: 700px)" srcSet={`${subUrl}_m.jpg`} />
      <source media="(min-width: 701px)" srcSet={`${subUrl}.jpg`} />
      <img
        src={`${subUrl}.jpg`}
        alt={`${eventName}'s background image`}
        width="100%"
      />
      <style jsx>
        {`
          source {
            width: 100%;
          }
        `}
      </style>
    </picture>
  );
};

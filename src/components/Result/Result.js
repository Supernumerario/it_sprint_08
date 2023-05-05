export default function ({ data }) {
  return (
    <ul key={data.name}>
      <p>{data.name}</p>
      <p>{data.model}</p>
    </ul>
  );
}
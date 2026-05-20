import { strategiesMock } from "../mocks/strategies";

export default function StrategiesPage() {
  return (
    <div>
      <h1>Strategies</h1>

      {strategiesMock.map((strategy) => (
        <div key={strategy.id}>
          <h2>{strategy.title}</h2>
          <p>{strategy.community}</p>
          <p>{strategy.period}</p>
          <p>{strategy.status}</p>
        </div>
      ))}
    </div>
  );
}

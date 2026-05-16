import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../components/layout/Container.jsx'
import { getCities, getStrategiesByCity } from '../../lib/strategies.js'
import './SearchPage.css'

export function SearchPage() {
  const cities = useMemo(() => getCities(), [])
  const [city, setCity] = useState('')

  const strategies = useMemo(() => getStrategiesByCity(city), [city])

  return (
    <main className="search-page">
      <Container>
        <h1 className="search-page__title">Пошук стратегій</h1>
        <p className="muted search-page__lead">
          Оберіть місто — покажемо стратегії, які є в базі для цього населеного пункту.
        </p>

        <label className="search-page__field">
          <span className="search-page__label">Місто</span>
          <select
            className="search-page__select"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">— оберіть місто —</option>
            {cities.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>

        {!city && (
          <p className="search-page__hint" role="status">
            Спочатку оберіть місто зі списку.
          </p>
        )}

        {city && strategies.length === 0 && (
          <p className="search-page__hint" role="status">
            Для міста «{city}» стратегій поки немає.
          </p>
        )}

        {strategies.length > 0 && (
          <ul className="strategy-list">
            {strategies.map((item) => (
              <li key={item.id}>
                <article className="strategy-card">
                  <h2 className="strategy-card__title">{item.title}</h2>
                  <p className="strategy-card__meta">
                    {item.city} · {item.period}
                  </p>
                  <p className="strategy-card__summary">{item.summary}</p>
                  <Link className="btn btn--tonal" to={`/strategies/${item.id}`}>
                    Відкрити стратегію
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </main>
  )
}

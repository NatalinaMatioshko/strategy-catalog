import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CollapsibleBlock from '../../components/CollapsibleBlock/CollapsibleBlock.jsx'
import { Container } from '../../components/layout/Container.jsx'
import {
  getCatalogEntryById,
  loadStrategyBody,
} from '../../lib/strategies.js'
import './StrategyPage.css'

function StrategyContent({ strategyData }) {
  return (
    <>
      {strategyData.strategicGoals.map((strategicGoal) => (
        <CollapsibleBlock
          key={strategicGoal.code}
          title={`Стратегічна ціль ${strategicGoal.code}. ${strategicGoal.title}`}
          defaultOpen={false}
        >
          <p className="strategy-page__description">{strategicGoal.description}</p>

          {strategicGoal.operationalGoals.map((operationalGoal) => (
            <div
              key={operationalGoal.code}
              className="strategy-page__operational-goal"
            >
              <CollapsibleBlock
                title={`Оперативна ціль ${operationalGoal.code}. ${operationalGoal.title}`}
              >
                {operationalGoal.tasks.map((task) => (
                  <div key={task.code} className="strategy-page__task">
                    <CollapsibleBlock
                      title={`Завдання ${task.code}. ${task.title}`}
                    >
                      <div className="strategy-page__task-body">
                        <p>
                          <strong>Опис:</strong> {task.description}
                        </p>
                        <div className="strategy-page__task-meta">
                          <p>
                            <strong>Термін:</strong> {task.implementationPeriod}
                          </p>
                          <p>
                            <strong>Статус:</strong>{' '}
                            <span className="strategy-page__status">{task.status}</span>
                          </p>
                        </div>
                        <p>
                          <strong>Джерела фінансування:</strong> {task.financingSource}
                        </p>
                        <p>
                          <strong>Відповідальні:</strong>{' '}
                          {task.responsibleUnits.join(', ')}
                        </p>
                        {task.activities?.length > 0 && (
                          <div className="strategy-page__activities">
                            <strong>Заходи:</strong>
                            <ul className="strategy-page__activities-list">
                              {task.activities.map((activity) => (
                                <li key={activity}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CollapsibleBlock>
                  </div>
                ))}
              </CollapsibleBlock>
            </div>
          ))}
        </CollapsibleBlock>
      ))}
    </>
  )
}

export function StrategyPage() {
  const { id } = useParams()
  const catalogEntry = getCatalogEntryById(id ?? '')

  const [strategyData, setStrategyData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!catalogEntry) {
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)
    setError(null)

    loadStrategyBody(catalogEntry.dataFile)
      .then((data) => {
        if (!cancelled) setStrategyData(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [catalogEntry])

  if (!catalogEntry) {
    return (
      <main className="strategy-page strategy-page--centered">
        <Container>
          <h1>Стратегію не знайдено</h1>
          <p className="muted">Перевірте посилання або поверніться до пошуку.</p>
          <Link className="btn btn--tonal" to="/search">
            До пошуку
          </Link>
        </Container>
      </main>
    )
  }

  const fileLink = catalogEntry.fileUrl
  const sourceLink = catalogEntry.officialSourceUrl
  const fileDisabled = !fileLink || fileLink === '#'
  const sourceDisabled = !sourceLink || sourceLink === '#'

  return (
    <main className="strategy-page">
      <Container>
        <Link className="strategy-page__back" to="/search">
          ← Назад до пошуку
        </Link>

        <header className="strategy-page__header">
          <p className="strategy-page__city">{catalogEntry.city}</p>
          <h1 className="strategy-page__title">
            {strategyData?.strategy?.name ?? catalogEntry.title}
          </h1>
          {strategyData?.strategy?.vision && (
            <p className="strategy-page__vision">{strategyData.strategy.vision}</p>
          )}
        </header>

        <div className="strategy-page__docs">
          <h2 className="strategy-page__docs-title">Документи</h2>
          <div className="strategy-page__docs-actions">
            {fileDisabled ? (
              <span className="btn btn--disabled" title="Файл ще не додано">
                Завантажити PDF (скоро)
              </span>
            ) : (
              <a
                className="btn btn--primary"
                href={fileLink}
                target="_blank"
                rel="noreferrer"
              >
                Завантажити PDF
              </a>
            )}
            {sourceDisabled ? (
              <span className="btn btn--disabled" title="Посилання ще не додано">
                Офіційне джерело (скоро)
              </span>
            ) : (
              <a
                className="btn btn--tonal"
                href={sourceLink}
                target="_blank"
                rel="noreferrer"
              >
                Офіційне джерело
              </a>
            )}
          </div>
        </div>

        {loading && <p className="muted">Завантаження стратегії…</p>}
        {error && <p className="strategy-page__error">{error}</p>}
        {strategyData && <StrategyContent strategyData={strategyData} />}
      </Container>
    </main>
  )
}

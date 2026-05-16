import catalog from '../data/strategiesCatalog.json'

const strategyModules = import.meta.glob('../data/strategies/*.json')

export function getCities() {
  const cities = [...new Set(catalog.map((item) => item.city))]
  return cities.sort((a, b) => a.localeCompare(b, 'uk'))
}

export function getCatalogEntryById(id) {
  return catalog.find((item) => item.id === id) ?? null
}

export function getStrategiesByCity(city) {
  if (!city) return []
  return catalog.filter((item) => item.city === city)
}

export async function loadStrategyBody(dataFile) {
  const loader = strategyModules[`../data/strategies/${dataFile}.json`]
  if (!loader) {
    throw new Error(`Strategy file not found: ${dataFile}`)
  }
  const module = await loader()
  return module.default
}

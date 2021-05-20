export type Assets = {
  id: number,
  sensors: string,
  model: string,
  status: string,
  healthscore: number,
  name: string,
  image: string,
  specifications: Specifications
  metrics: Metrics,
  unitId: number,
  companyId: number
}

type Specifications = {
  power: number,
  maxTemp: number,
  rpm: number
}

type Metrics = {
  totalCollectsUptime: number,
  totalUptime: number,
  lastUptimeAt: Date
}
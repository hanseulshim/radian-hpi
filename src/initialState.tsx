export const initialState = {
  hero: null,
  learningCenter: null,
  media: null,
  compare: null
}

export interface DataInterface {
  hero: {
    title: string | null
    subtitle: string | null
    description: string | null
    cta: string | null
  } | null
  learningCenter: {
    title: string | null
    subtitle: string | null
    description: string | null
    icons: Array<{
      icon: string | null
      title: string | null
      description: string | null
    }> | null
  } | null
  media: {
    downloadSectionTitle: string | null
    downloadImage: string | null
    downloadTitle: string | null
    downloadLink: string | null
  } | null
  compare: {
    titleIcon: string | null
    title: string | null
    subtitle: string | null
    instructions: string | null
    competitors: Array<{
      name: string | null
      indexType: string | null
      observations: string | null
      dataFrequency: string | null
      monthlyObservations: string | null
      propertyTransactionExclusions: Array<string> | null
      indexDeliveryDelay: string | null
      propertyCondition: string | null
      imposedModelAdjustments: string | null
      propertyType: Array<string> | null
      statesInNationalIndex: string | null
    }> | null
    radianHpi: {
      name: string | null
      indexType: string | null
      observations: string | null
      dataFrequency: string | null
      monthlyObservations: string | null
      propertyTransactionExclusions: Array<string> | null
      indexDeliveryDelay: string | null
      propertyCondition: string | null
      imposedModelAdjustments: string | null
      propertyType: Array<string> | null
      statesInNationalIndex: string | null
    } | null
    backgroundImage: string | null
  } | null
}

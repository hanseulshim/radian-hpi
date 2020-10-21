export const initialState = {
  hero: null,
  learningCenter:null,
  media:null
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
}
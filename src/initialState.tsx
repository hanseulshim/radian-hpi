export const initialState = {
  hero: null,
  learningCenter:null
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
      description: string | null
    }> | null
  } | null
}
export interface Quote {
  id: number,
  quote: string,
  author: string
}

export interface Quotes {
  quotes: Quote[],
  limit?: number,
  skip?: number,
  total?: number
}

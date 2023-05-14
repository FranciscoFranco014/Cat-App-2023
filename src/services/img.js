// const CAT_PREFIX_ENDPOINT = 'https://cataas.com'

// export const getImg = async () => {
//   const { fact } = async () => {
//   if (!fact) return

//   const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')

//   const res = await fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
//   const response = await res.json()
//   const { url, fact } = response
//   return url
// }}

export async function getImageUrlFromFact (fact) {
  const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
  const res = await fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
  const response = await res.json()
  return response.url
}

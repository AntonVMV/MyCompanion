export const weatherRequest = async (options) => {
  const URL = `https://api.openweathermap.org/data/2.5/${options}?q=Donetsk&units=metric&appid=3669431c76176bf20739da0043215c14`
  const response = await fetch(URL)
  const result = await response.json()
  return result
}

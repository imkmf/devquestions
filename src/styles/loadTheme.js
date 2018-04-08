import hashCode from './hashCode'
import themes from './themes'

const loadTheme = string => {
  const hash = hashCode(string)
  return themes[hash % themes.length]
}

export default loadTheme

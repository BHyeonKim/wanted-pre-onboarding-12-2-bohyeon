export const generateDateString = (date?: string) => {
  if (!date) return ''
  const dateObj = new Date(date)
  return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`
}

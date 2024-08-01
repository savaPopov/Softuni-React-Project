export function convertTime(timestamp) {
  const date = new Date(timestamp)

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const formattedDate = date.toLocaleDateString('en-US', options)

  return formattedDate
}

export const getAccessToken = () => {
  const authJSON = localStorage.getItem('auth')

  if (!authJSON) {
    return ''
  }

  const authData = JSON.parse(authJSON)

  return authData?.accessToken;

}

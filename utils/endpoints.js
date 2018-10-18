export const fetchEndpoints = async () => {
  const response = await fetch('https://open.epic.com/MyApps/EndpointsJson')
  const endpoints = await response.json()

  return endpoints.Entries
}

export default 'fetchEndpoints'

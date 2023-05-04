/**
 * @description Route to send GET request via fetch API
 * @route GET /api/endpoint?options
 * @access Public
 */
async function GET(endpoint, options) {
  const response = await fetch(`${endpoint}?${options}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  if (response.ok) {
    return await response.json()
  } else {
    console.log('GET promise succeeded, but not with response.ok', response.status)
    throw new Error(response.status)
  }
}



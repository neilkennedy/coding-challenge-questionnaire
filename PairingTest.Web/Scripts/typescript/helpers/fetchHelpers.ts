
// A helper function to throw an error if the fetch request was not successful
export function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error: any = new Error(response.statusText)
    error.response = response
    throw error
  }
}

// A helper function to parse the fetch response into JSON
export function parseJSON(response: any) {
  return response.json()
}

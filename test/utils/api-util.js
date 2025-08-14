

/**
 * Makes a GET request
 * @param {string} endpoint - The API endpoint (e.g. "/posts/1")
 * @param {object} [headers={}] - Optional request headers
 * @returns {Promise<Response>}
 */
export async function apiGet(endpoint, headers = {}) {
  console.log(`${API_BASE_URL}${endpoint}`)
  return await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}

/**
 * Makes a POST request
 * @param {string} endpoint - The API endpoint
 * @param {object} body - The JSON body to send
 * @param {object} [headers={}] - Optional request headers
 * @returns {Promise<Response>}
 */
export async function apiPost(endpoint, body, headers = {}) {
  return await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

/**
 * Makes a PUT request
 * @param {string} endpoint - The API endpoint
 * @param {object} body - The JSON body to send
 * @param {object} [headers={}] - Optional request headers
 * @returns {Promise<Response>}
 */
export async function apiPut(endpoint, body, headers = {}) {
  return await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

/**
 * Makes a DELETE request
 * @param {string} endpoint - The API endpoint
 * @param {object} [headers={}] - Optional request headers
 * @returns {Promise<Response>}
 */
export async function apiDelete(endpoint, headers = {}) {
  return await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}

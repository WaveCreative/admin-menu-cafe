/**
 * API adapter placeholder.
 * Keep HTTP calls here when the client's backend contract is available.
 * Never place private API secrets in VITE_* variables.
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function apiRequest<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error('VITE_API_BASE_URL belum dikonfigurasi.')
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...init.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Request gagal (${response.status})`)
  }

  return response.json() as Promise<T>
}
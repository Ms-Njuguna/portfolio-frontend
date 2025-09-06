const BASE = import.meta.env.VITE_API_BASE

export async function apiGet(path) {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(`GET ${path} failed`)
  return res.json()
}

export async function apiPost(path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body)
  })
  const data = await res.json()
  if (!res.ok || data?.success === false) {
    throw new Error(data?.error || `POST ${path} failed`)
  }
  return data
}

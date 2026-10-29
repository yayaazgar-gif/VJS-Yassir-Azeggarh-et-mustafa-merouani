// Petites fonctions fetch pour json-server (http://localhost:3000)
const URL = 'http://localhost:3000/jobs'

const json = (r) => {
  if (!r.ok) throw new Error(`Erreur HTTP ${r.status}`)
  return r.json()
}

export const getJobs = () => fetch(URL).then(json)
export const getJob = (id) => fetch(`${URL}/${id}`).then(json)

export const addJob = (job) =>
  fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job)
  }).then(json)

export const updateJob = (id, job) =>
  fetch(`${URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job)
  }).then(json)

export const deleteJob = (id) => fetch(`${URL}/${id}`, { method: 'DELETE' }).then(json)

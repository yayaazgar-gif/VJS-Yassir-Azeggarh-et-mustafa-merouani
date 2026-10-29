# TP 4 – Application de gestion des emplois

Vue 3 + Vue Router + json-server (API REST simulée).

```bash
npm install
npm run server   # terminal 1 : API sur http://localhost:3000
npm run dev      # terminal 2 : application Vite
```

| Route | Vue |
|---|---|
| `/` | `Home.vue` – liste + bouton d'ajout |
| `/jobs/:id` | `JobDetails.vue` – détails, modifier, supprimer (avec confirmation) |
| `/jobs/add` | `JobForm.vue` – ajout |
| `/jobs/:id/edit` | `JobForm.vue` – édition pré-remplie |

Champs d'un emploi : titre, description, salaire, date de création, années d'expérience.

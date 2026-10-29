<template>
  <p v-if="loading" class="muted">Chargement...</p>
  <p v-else-if="!job" class="error">Emploi introuvable.</p>

  <div v-else>
    <h1>{{ job.title }}</h1>
    <p class="meta">
      Salaire : {{ job.salary }} MAD · Expérience : {{ job.experience }} an(s) ·
      Publié le {{ job.createdAt }}
    </p>
    <p>{{ job.description }}</p>

    <div class="actions">
      <router-link class="btn" :to="{ name: 'job-edit', params: { id: job.id } }">Modifier</router-link>
      <button class="btn danger" @click="supprimer">Supprimer</button>
    </div>
  </div>

  <button class="btn secondary" @click="$router.back()">Retour</button>
</template>

<script>
import { getJob, deleteJob } from '../api.js'

export default {
  name: 'JobDetails',
  data() {
    return { job: null, loading: true }
  },
  mounted() {
    getJob(this.$route.params.id)
      .then(data => { this.job = data })
      .catch(() => { this.job = null })
      .finally(() => { this.loading = false })
  },
  methods: {
    supprimer() {
      // Confirmation avant suppression
      if (!window.confirm(`Supprimer l'emploi « ${this.job.title} » ?`)) return
      deleteJob(this.job.id)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>

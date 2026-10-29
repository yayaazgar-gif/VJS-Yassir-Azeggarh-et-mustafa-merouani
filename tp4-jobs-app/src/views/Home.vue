<template>
  <div class="header">
    <h1>Offres d'emploi</h1>
    <router-link class="btn" to="/jobs/add">Ajouter un emploi</router-link>
  </div>

  <p v-if="loading" class="muted">Chargement...</p>
  <p v-else-if="error" class="error">{{ error }}</p>
  <p v-else-if="jobs.length === 0" class="muted">Aucun emploi disponible.</p>

  <JobCard v-for="job in jobs" :key="job.id" :job="job" />
</template>

<script>
import JobCard from '../components/JobCard.vue'
import { getJobs } from '../api.js'

export default {
  name: 'Home',
  components: { JobCard },
  data() {
    return { jobs: [], loading: true, error: '' }
  },
  mounted() {
    getJobs()
      .then(data => { this.jobs = data })
      .catch(() => { this.error = "Impossible de joindre json-server (npm run server)." })
      .finally(() => { this.loading = false })
  }
}
</script>

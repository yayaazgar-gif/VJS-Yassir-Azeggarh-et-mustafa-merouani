<template>
  <div class="job">
    <h3>{{ job.title }}</h3>
    <p class="meta">{{ job.salary }} MAD · {{ job.experience }} an(s) d'expérience</p>
    <p>{{ job.description }}</p>
    <router-link :to="{ name: 'job-details', params: { id: job.id } }">Voir détails</router-link>
  </div>
</template>

<script>
export default {
  name: 'JobCard',
  props: { job: { type: Object, required: true } }
}
</script>

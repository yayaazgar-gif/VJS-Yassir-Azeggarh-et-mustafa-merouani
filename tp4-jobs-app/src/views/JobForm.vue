<template>
  <h1>{{ isEdit ? "Modifier l'emploi" : 'Ajouter un emploi' }}</h1>

  <form @submit.prevent="soumettre">
    <label>Titre
      <input v-model.trim="job.title" required />
    </label>
    <label>Description
      <textarea v-model.trim="job.description" rows="4" required></textarea>
    </label>
    <label>Salaire (MAD)
      <input v-model.number="job.salary" type="number" min="0" required />
    </label>
    <label>Date de création
      <input v-model="job.createdAt" type="date" required />
    </label>
    <label>Années d'expérience
      <input v-model.number="job.experience" type="number" min="0" required />
    </label>

    <div class="actions">
      <button class="btn" type="submit" :disabled="!valide">
        {{ isEdit ? 'Enregistrer' : 'Ajouter' }}
      </button>
      <button class="btn secondary" type="button" @click="$router.back()">Annuler</button>
    </div>
  </form>
</template>

<script>
import { getJob, addJob, updateJob } from '../api.js'

export default {
  name: 'JobForm',
  data() {
    return {
      job: {
        title: '',
        description: '',
        salary: null,
        createdAt: new Date().toISOString().slice(0, 10),
        experience: 0
      }
    }
  },
  computed: {
    isEdit() {
      return !!this.$route.params.id
    },
    valide() {
      return this.job.title !== '' && this.job.description !== '' && this.job.salary !== null
    }
  },
  mounted() {
    // Mode édition : pré-remplissage des champs
    if (this.isEdit) {
      getJob(this.$route.params.id)
        .then(data => { this.job = data })
        .catch(() => this.$router.replace('/'))
    }
  },
  methods: {
    soumettre() {
      const requete = this.isEdit
        ? updateJob(this.$route.params.id, this.job)
        : addJob(this.job)
      requete
        .then(saved => this.$router.push({ name: 'job-details', params: { id: saved.id } }))
        .catch(err => console.log(err))
    }
  }
}
</script>

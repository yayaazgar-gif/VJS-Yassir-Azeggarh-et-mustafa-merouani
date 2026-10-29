<template>
  <div v-if="book">
    <h1>{{ book.title }}</h1>
    <p>{{ book.author }} -- {{ book.year }}</p>
    <p>{{ book.genre }}</p>
    <span class="badge-favori" v-if="book.isFav">Favori</span>
  </div>
  <div v-else>
    <p>Livre introuvable (id {{ $route.params.id }}).</p>
  </div>

  <button @click="retour">Retour</button>
</template>

<script>
import { store } from '../store/books.js'

export default {
  name: 'BookDetailsView',
  data() {
    return { store }
  },
  computed: {
    // $route.params.id est une chaîne : on la convertit avec Number() avant de comparer
    book() {
      return this.store.books.find(b => b.id === Number(this.$route.params.id))
    }
  },
  methods: {
    retour() {
      this.$router.back()
    }
  }
}
</script>

<template>
  <h1>Catalogue de livres</h1>

  <!-- 5. v-show : l'élément change souvent d'état -->
  <p class="loading" v-show="loading">Chargement du catalogue...</p>

  <AddBookForm @add-book="addBook" />

  <!-- 1. Le parent possède l'état et le passe en props -->
  <BookList :books="books" @toggle-fav="toggleFavori" @delete-book="deleteBook" />
</template>

<script>
import AddBookForm from './components/AddBookForm.vue'
import BookList from './components/BookList.vue'

const initialBooks = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, genre: 'Génie logiciel', isFav: true },
  { id: 2, title: 'Introduction to Algorithms', author: 'Cormen, Leiserson, Rivest, Stein', year: 2009, genre: 'Algorithmique', isFav: false },
  { id: 3, title: 'Design Patterns', author: 'Gamma, Helm, Johnson, Vlissides', year: 1994, genre: 'Génie logiciel', isFav: true },
  { id: 4, title: 'Computer Networks', author: 'Andrew S. Tanenbaum', year: 2010, genre: 'Réseaux', isFav: false }
]

export default {
  name: 'App',
  components: { AddBookForm, BookList },
  data() {
    return { books: [], loading: true }
  },
  methods: {
    addBook(bookData) {
      const id = this.books.length ? Math.max(...this.books.map(b => b.id)) + 1 : 1
      this.books.push({ ...bookData, id })
    },
    // Le parent est le seul à modifier ses données
    toggleFavori(book) {
      book.isFav = !book.isFav
    },
    deleteBook(book) {
      this.books = this.books.filter(b => b.id !== book.id)
    }
  },
  // 5. Simule un chargement réseau
  mounted() {
    setTimeout(() => {
      this.books = initialBooks
      this.loading = false
    }, 600)
  }
}
</script>

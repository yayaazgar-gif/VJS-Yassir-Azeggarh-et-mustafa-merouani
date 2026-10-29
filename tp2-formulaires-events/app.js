const { createApp } = Vue

const livreVide = () => ({
  title: '',
  author: '',
  year: null,
  genre: '',
  isFav: false,
  keywords: []
})

createApp({
  data() {
    return {
      books: [],
      newBook: livreVide(),
      nouveauMotCle: ''
    }
  },

  computed: {
    // 2. Valide seulement si title et author ne sont pas vides
    formulaireValide() {
      return this.newBook.title.trim() !== '' && this.newBook.author.trim() !== ''
    }
  },

  methods: {
    // 1. Ajouter un livre (copie de newBook + nouvel id), puis réinitialiser
    ajouterLivre() {
      if (!this.formulaireValide) return
      const id = this.books.length ? Math.max(...this.books.map(b => b.id)) + 1 : 1
      this.books.push({ ...this.newBook, keywords: [...this.newBook.keywords], id })
      this.newBook = livreVide()
      this.nouveauMotCle = ''
    },

    // 3. Supprimer : on compare les id, pas les objets
    supprimerLivre(book) {
      this.books = this.books.filter(b => b.id !== book.id)
    },

    // 4. Inverser le favori
    toggleFavori(book) {
      book.isFav = !book.isFav
    },

    // 5. Mots-clés
    ajouterMotCle() {
      const mot = this.nouveauMotCle.trim()
      if (mot && !this.newBook.keywords.includes(mot)) {
        this.newBook.keywords.push(mot)
      }
      this.nouveauMotCle = ''
    },
    retirerMotCle(mot) {
      this.newBook.keywords = this.newBook.keywords.filter(k => k !== mot)
    }
  },

  mounted() {
    fetch('books.json')
      .then(r => r.json())
      .then(data => { this.books = data })
      .catch(err => console.error('Impossible de charger books.json', err))
  }
}).mount('#app')

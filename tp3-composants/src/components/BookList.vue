<template>
  <div>
    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      @toggle-fav="$emit('toggle-fav', $event)"
      @delete-book="$emit('delete-book', $event)"
    >
      <!-- 4. Contenu injecté dans le slot nommé "actions" -->
      <template #actions>
        <small class="slot-demo">Contenu du parent dans le slot « actions » (id {{ book.id }})</small>
      </template>
    </BookCard>
  </div>
</template>

<script>
import BookCard from './BookCard.vue'

export default {
  name: 'BookList',
  components: { BookCard },
  props: {
    books: { type: Array, required: true }
  },
  emits: ['toggle-fav', 'delete-book']
}
</script>

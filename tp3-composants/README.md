# TP 3 – Composants & cycle de vie

```bash
npm install
npm run dev
```

- `App.vue` possède `books` ; `BookList` reçoit `books` en props ; `BookCard` valide sa props `book` (type, required, validator).
- Aucune mutation de props : `BookCard` fait `$emit('toggle-fav', book)` / `$emit('delete-book', book)` et `App.vue` modifie l'état.
- Slot nommé `actions` dans `BookCard`, alimenté depuis `BookList`.
- `mounted()` dans `App.vue` : `setTimeout` de 600 ms + `v-show="loading"`.
- Bonus : `ref="titreInput"` + `focus()` dans `AddBookForm.vue`.

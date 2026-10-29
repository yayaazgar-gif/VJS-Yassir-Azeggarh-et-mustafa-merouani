# TP 4 – Router & Composition API

```bash
npm install
npm run dev
```

- `router/index.js` : `/`, `/livre/:id`, 404 (`/:pathMatch(.*)*`)
- `HomeView.vue` : `@add-book`, props `store.books`, `@toggle-fav`, `@delete-book`
- `BookDetailsView.vue` : `book` retrouvé avec `Number($route.params.id)`, bouton Retour avec `$router.back()`
- Bonus : `BookCardSetup.vue` en `<script setup>` avec `libelleFavori`. (Pour l'utiliser, importez-le à la place de `BookCard` dans `BookList.vue`.)

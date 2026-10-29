# TP 2 – Formulaires & événements

Catalogue de livres (Vue 3 via CDN, API Options).

## Lancer

`fetch('books.json')` nécessite un petit serveur local (pas `file://`) :

```bash
python3 -m http.server 8000     # puis ouvrir http://localhost:8000
# ou : npx serve .
```

## Ce qui est couvert
1. `v-model` (texte, nombre, select, checkbox) + `@submit.prevent`
2. `formulaireValide` (computed) + `:disabled`
3. Suppression par comparaison des `id`
4. Favori au clic sur la carte, `@click.stop` sur « Supprimer »
5. Mots-clés : `@keyup.enter`, chips, bouton ×
- Bonus : `v-model.trim` (title), `v-model.lazy` (author)

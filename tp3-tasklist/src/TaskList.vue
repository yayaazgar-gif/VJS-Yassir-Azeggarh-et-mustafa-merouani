<template>
  <main>
    <h1>Gestion de tâches</h1>

    <!-- computed : nombre total de tâches -->
    <p class="total">Total : <strong>{{ totalTasks }}</strong> tâche(s)</p>

    <!-- Filtres : classes CSS liées dynamiquement avec v-bind -->
    <div class="filters">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'">Toutes</button>
      <button :class="{ active: filter === 'todo' }" @click="filter = 'todo'">À faire</button>
      <button :class="{ active: filter === 'done' }" @click="filter = 'done'">Terminées</button>
    </div>

    <p v-if="filteredTasks.length === 0" class="empty">Aucune tâche à afficher.</p>

    <ul>
      <li v-for="task in filteredTasks" :key="task.id" :class="{ done: task.completed }">
        <div>
          <h3>{{ task.title }}</h3>
          <p>{{ task.description }}</p>
          <span class="status">{{ task.completed ? 'Terminée' : 'À faire' }}</span>
        </div>
        <!-- v-show : visible uniquement si la tâche n'est pas terminée -->
        <button v-show="!task.completed" class="complete" @click="markAsDone(task.id)">
          Marquer comme terminée
        </button>
      </li>
    </ul>
  </main>
</template>

<script>
import tasksData from './taskList.json'

export default {
  name: 'TaskList',
  data() {
    return {
      tasks: tasksData.map(t => ({ ...t })),
      filter: 'all'
    }
  },
  computed: {
    totalTasks() {
      return this.tasks.length
    },
    filteredTasks() {
      if (this.filter === 'todo') return this.tasks.filter(t => !t.completed)
      if (this.filter === 'done') return this.tasks.filter(t => t.completed)
      return this.tasks
    }
  },
  methods: {
    markAsDone(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.completed = true
    }
  }
}
</script>

<style>
body { font-family: system-ui, sans-serif; background: #f5f6f4; color: #1b2430; }
main { max-width: 640px; margin: 40px auto; }
.total { color: #5b6572; }
.filters { display: flex; gap: 8px; margin-bottom: 16px; }
.filters button { padding: 6px 14px; border: 1px solid #ccd; background: #fff; border-radius: 6px; cursor: pointer; }
.filters button.active { background: #2f8f66; border-color: #2f8f66; color: #fff; }
ul { list-style: none; padding: 0; }
li { display: flex; justify-content: space-between; align-items: center; gap: 12px; background: #fff; border: 1px solid #dde1d9; border-radius: 8px; padding: 12px 16px; margin-bottom: 10px; }
li.done { opacity: .65; }
li.done h3 { text-decoration: line-through; }
li h3 { margin: 0 0 4px; }
li p { margin: 0 0 6px; }
.status { font-size: 12px; background: #e6f2ec; color: #2f8f66; padding: 2px 8px; border-radius: 999px; }
.complete { cursor: pointer; padding: 6px 10px; }
.empty { color: #5b6572; font-style: italic; }
</style>

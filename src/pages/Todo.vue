<template>
  <SideBar>
    <div class="page">
      <div class="todo-container">
        <h1>Todo App</h1>
        <input
          class="todo-input"
          v-model="todoText"
          @keyup.enter="handleKeyupEnter"
          placeholder="Add a new todo..."
        />
        <div v-if="listTodos" class="todo-list">
          <div class="todo-item" v-for="item in listTodos" :key="item.id">
            <input
              type="checkbox"
              class="todo-checkbox"
              @change="() => handleToggeTodo(item.id)"
              :value="item.id"
              :checked="item.isChecked"
            />
            <span
              :class="!item.isChecked ? 'todo-title' : 'completed'"
              @click="() => handleDelete(item.id)"
            >
              {{ item.text }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </SideBar>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "TodoApp",
  data: () => {
    return {
      todoText: "",
      listTodos: [
        { id: Math.random().toString(), text: "20001005", isChecked: true },
      ],
    };
  },
  methods: {
    handleKeyupEnter() {
      if (this.todoText) {
        this.listTodos = [
          ...this.listTodos,
          {
            id: Math.random().toString(),
            text: this.todoText,
            isChecked: false,
          },
        ];
      }
      this.todoText = "";
    },
    handleDelete(id) {
      this.listTodos = this.listTodos.filter((item) => item.id !== id);
    },
    handleToggeTodo(id) {
      this.listTodos = this.listTodos.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      );
    },
  },
  components: { SideBar },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  background: #eee;
}
.todo-container {
  background-color: #fff;
  position: relative;
  padding: 15px;
  width: 45%;
  margin: 0 auto;
  border-radius: 8px;
}

.todo-input {
  padding: 6px 10px;
  width: 100%;
  font-size: 13px;
}

.todo-list {
  margin-top: 16px;
}

.todo-item {
  display: flex;
  align-items: center;
  padding-bottom: 8px;
}

.todo-checkbox {
  font-size: 12px;
  margin: 0;
  margin-right: 8px;
}

.todo-title {
  font-size: 12px;
  margin-bottom: 2px;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  cursor: pointer;
}
</style>
  
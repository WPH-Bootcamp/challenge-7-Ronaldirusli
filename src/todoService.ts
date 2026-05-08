// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts

// TODO: Import fungsi storage untuk baca/tulis file

// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active

// TODO: Buat fungsi untuk menandai To-Do sebagai selesai
// - Cari To-Do berdasarkan id
// - Ubah statusnya menjadi completed
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menghapus To-Do
// - Filter To-Do berdasarkan id
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do
// - Berikan nomor urut untuk memudahkan user memilih

// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword

import { Todo } from './types';
import { loadTodos, saveTodos } from './storage';
import { generateId } from './utils';

const todos: Todo[] = loadTodos();

export const todoService = {
  getAllTodos(): Todo[] {
    return todos;
  },
  addTodo(task: string): void {
    const newTodo: Todo = {
      id: generateId(),
      task,
      completed: false,
      createdAt: new Date(),
    };
    todos.push(newTodo);
    saveTodos(todos);
  },
  markTodoAsComplete(id: string): boolean {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      console.log('Todo tidak ditemukan');
      return false;
    }
    todo.completed = true;
    saveTodos(todos);
    return true;
  },
  getFilteredTodos(list: Todo[] = todos): string[] {
    if (list.length === 0) {
      return ['Daftar kosong'];
    }
    return list.map((todo, index) => {
      const status = todo.completed ? '[DONE]' : '[ACTIVE]';
      return `${index}. ${status} ${todo.task} (ID: ${todo.id})`;
    });
  },

  searchTodos(keyword: string): Todo[] {
    const term = keyword.toLowerCase();
    return todos.filter((todo: Todo) => todo.task.toLowerCase().includes(term));
  },
  getIdbyNumber(index: number): string | null {
    const target = todos[index];
    return target ? target.id : null;
  },
  deleteTodo(index: number): boolean {
    if (index >= 0 && index < todos.length) {
      todos.splice(index, 1);
      saveTodos(todos);
      return true;
    }
    return false;
  },
};

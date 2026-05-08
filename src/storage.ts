import * as fs from 'fs';
import * as path from 'node:path';
import { Todo } from './types';
// TODO: Definisikan path file untuk menyimpan data To-Do

// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file

// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan

// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)

const DATA_FILE = path.join(__dirname, 'todos.json');

export const saveTodos = (todos: Todo[]): void => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
};

export const loadTodos = (): Todo[] => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf-8');

    return JSON.parse(data) as Todo[];
  } catch (error) {
    console.error('Error loading todos:', error);
    return [];
  }
};

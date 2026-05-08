// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid

// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid
import { Todo } from './types';

export const isValidTodo = (obj: any): obj is Todo => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'number' &&
    typeof obj.task === 'string' &&
    typeof obj.completed === 'boolean'
  );
};
export const generateId = (): string => Math.random().toString(36).substr(2, 9);

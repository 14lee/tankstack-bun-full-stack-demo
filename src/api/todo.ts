import { createServerFn } from "@tanstack/react-start";
import { db } from "@/db";

export const getTodos = createServerFn({ method: 'GET' }).handler(() => {
  return db.query.todos.findMany();
})

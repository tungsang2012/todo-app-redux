import { Model, createServer } from 'miragejs';

export const setupServer = () => {
    createServer({
        models: {
            todos: Model
        },
        routes() {
            this.get("/api/todos", (schema) => {
                return schema.todos.all();
            });

            this.post('api/todo', (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                return schema.todos.create(payload);
            });

            this.put('api/todo', (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                var item = schema.todos.find(payload.id);
                return item.update(payload);
            });
        }
    });
}
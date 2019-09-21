import { Application } from "stimulus"
import HelloController from "./controllers/hello_controller"
import TodoController from "./controllers/todo_controller"
import TodoListController from "./controllers/todo_list_controller"
import config from './config';
const application = Application.start()
application.register("hello", HelloController)
application.register("todo", TodoController)
application.register("todo-list", TodoListController)


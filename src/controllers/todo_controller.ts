import { Controller } from "stimulus"
import TodoistApiREST from "todoist-api-ts";
import config from "../config";


export default class extends Controller {

    api;
    projects;
    tasks;
    lists;

    connect() {
        console.log("Accessing todoist", this.element)
        this.lists = config.task_lists;
        this.api = new TodoistApiREST(config.apiKey);
        var lists = "";
    }

    listHandler(list) {
        this.api.getTasksFiltered(list)
            .then(res => {
                list['tasks'] = res;
            })
            .catch(err => console.error(err));
    }
}

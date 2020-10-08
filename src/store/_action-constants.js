/* 
    saving actions in a single, common place for readability. 
    * avoiding the completed, error paradigm for readability
    * using "@@" to indicate saga actions
    * note that '@@' is also a reserved word indicating reducers take no action,
      this will , err, reduce the number of needed passes through the reducer
*/

export const ACT = { 
    spinner: "@@spinner", //payload will have on/off
    todo: {
        create: "todo.create",
        retrieve: "todo.retrieve",
        update: "todo.update",
        delete: "todo.delete", 
        listSaga: "@@todo.list",
        list: "todo.list",
        clearSelected: "todo.clearSelected"
    },
    options: {
        list: "options.list"
    }
}

export default ACT;

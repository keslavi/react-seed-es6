/* 
    saving actions in a single, common place for readability. 
    * avoiding the completed, error paradigm for readability
    * using "@@" to indicate saga actions
    * note that '@@' is also a reserved word indicating reducers take no action,
      this will , err, reduce the number of needed passes through the reducer
*/

export const ACT = { 
    spinner: "@@spinner", //payload will have on/off
    task: {
        create: "task.create",
        retrieve: "task.retrieve",
        update: "task.update",
        delete: "task.delete", 
        listSaga: "@@task.list",
        list: "task.list",
        clearSelected: "task.clearSelected"
    },
    options: {
        list: "options.list"
    }
}

export default ACT;

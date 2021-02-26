const Controller = require('../Controller/employeeController')
let controller = new Controller()
module.exports = (app) => {
    app.get("/employee/get", controller.getData)

    app.post("/employee/getById/:id", controller.findById)

    app.post("/employee/create", controller.create)

    app.put("/employee/update/:id", controller.updateData)

    app.delete("/employee/delete/:id", controller.deleteData)
} 
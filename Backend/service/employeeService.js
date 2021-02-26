const empModel = require('../model/employeeModel');

const objempModel = new empModel();

module.exports = class EmployeeService {
    insert(data) {
            return objempModel.create(data)
                .then((result) => {
                    return ({ message: "Employee Record insert Successfully", data: result });
                })
                .catch((error) => {
                    return ({ message: "Failed to inset Employee record", error: error });
                })
    }

    findAll() {
            return objempModel.findAll()
                .then((result) => {
                    return ({ message: "Employee Record", data: result });
                })
                .catch((error) => {
                    return ({ message: "Thier is No Employee record", error: error });
                })
    }

    findRecordById(id) {
            return objempModel.findById(id)
                .then((result) => {
                    return ({ message: "Employee Record Find Successfully", data: result });
                })
                .catch((error) => {
                    return ({ message: "Employee Record is Not found", error: error });
                })
    }

    updateData(id, newData) {
            return objempModel.updateData(id, newData)
                .then((result) => {
                    return ({ message: "Employee Record Update Successfully", data: result });
                })
                .catch((error) => {
                    return ({ message: "Employee Record is Not found", error: error });
                })
    }

    deleteData(id) {
            return objempModel.deleteData(id)
                .then((result) => {
                    return ({ message: "Employee Record Deleted Successfully", data: result });
                })
                .catch((error) => {
                    return ({ message: "Employee Record is Not found", error: error });
                })
    }
}
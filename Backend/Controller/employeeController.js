const sampleService = require('../service/employeeService');

const objService = new sampleService();
const response = {};
module.exports = class Controller {
    getData(req, res) {
        try {
            objService.findAll()
                .then((result) => {
                    response.data = result.data;
                    response.success = true;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });
        } catch (error) {
            console.log(error);

        }
    }

    create(req, res) {
        console.log(req.body, "getData..............");
        try {
            objService.insert(req.body)
                .then((result) => {
                    response.success = true;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });
        } catch (error) {
            console.log(error);
        }
    }
    findById(req, res) {
        try {
            let empid = req.params.id;
            objService.findRecordById(empid)
                .then((result) => {
                    response.success = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });
        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }

    updateData(req, res) {
        try {
            let newData = req.body;
            let empid = req.params.id;
            console.log("update id and data", empid, newData);
            objService.updateData(empid, newData)
                .then((result) => {
                    response.success = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });

        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }

    deleteData(req, res) {
        try {
            let empid = req.params.id;
            console.log("empid",empid);
            objService.deleteData(empid)
                .then((result) => {
                    response.success = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });
        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }
}
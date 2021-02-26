const mongoose = require('mongoose');

const employeeManagment = new mongoose.Schema({
    empFirstName: {
        type: String,
        required: [true, 'Fisrt Name is Required']
    },
    empLastName: {
        type: String,
        required: [true, 'Last Name is Required']
    },
    empEmail: {
        type: String,
        required: [true, 'email is Required'],
        unique: true
    },
    empDepartment: {
        type: String,
        required: [true, 'email is Required'],
    },
    empMobile: {
        type: Number,
        required: [true, 'mobile number is required'],
        minlength: 10,
        maxlength: 10
    },
    empPassword: {
        type: String,
        required: [true, 'password is required']
    }
});

let empModel = mongoose.model('empMangment', employeeManagment);

module.exports = class EmployeeModel {
    create = (data) => {
            return empModel.create(data)
                .then((result) => {
                    return result;
                })
                .catch((error) => {
                    return error;
                })
    }
    findAll() {
            return empModel.find({})
                .then((result) => {
                    return result;
                })
                .catch((error) => {
                    return ({ message: "Something Went Wrong Please Check", error: error });
                })
    }

    findById(id) {
            return empModel.findById(id)
                .then(result => {
                    return result;
                })
                .catch(error => {
                    return ({ message: "Something Went Wrong Please Check", error: error });
                });
    }

    updateData(id, newData) {
            return empModel.findByIdAndUpdate(id, newData)
                .then(result => {
                    return result;
                })
                .catch(error => {
                    return ({ message: "Something Went Wrong Please Check", error: error });
                })
    }

    deleteData(id) {
            return empModel.findByIdAndRemove(id)
                .then(result => {
                    return result;
                })
                .catch(error => {
                    return ({ message: "Something Went Wrong Please Check", error: error });
                })
    }

}
const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {

    this.before('CREATE', 'Employess', (req) => {

        console.log("Before CREATE triggered");

        if (req.data.salary < 10000) {
            req.error(400, 'Salary should be greater than 10000');
        }

    });

    this.after('READ', 'Employess', (data) => {

        if (!Array.isArray(data)) data = [data];

        data.forEach(emp => {
            emp.message = "Welcome " + emp.employeeName;
        });

    });

    this.on('approveEmployee', async () => {
        return "Employee Approved Successfully";
    });

    this.on('calculateBonus', (req) => {
        return req.data.salary * 0.10;
    });

});
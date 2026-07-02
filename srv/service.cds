using { employee.management as db } from '../db/schema';

service EmployeeService {

    entity Employess as projection on db.Employye;

    action approveEmployee(ID: UUID) returns String;

    function calculateBonus(salary: Decimal(10,2))
        returns Decimal(10,2);
    

}
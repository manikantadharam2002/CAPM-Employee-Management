using { cuid, managed } from '@sap/cds/common';

namespace employee.management;

entity Employye : cuid, managed {
   
   employeeName : String(100);
   email : String(100);
   salary : Decimal(10,2);
}

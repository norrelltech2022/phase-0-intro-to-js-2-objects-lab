const employee = {
    name: "Daryl",
    streetAddress: "117 colorad st",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   const newObj = {...employee };
   
   newObj[key] = value;

   return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
    
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};

    delete newEmployee["name"];
    
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee["name"];
    return employee;
}


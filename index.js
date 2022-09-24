// const employee = {
//     name: 'Jon',
//     streetAddress: 'My Street',
// }

// function updateEmployeeWithKeyAndValue(obj, key, value) {
//     const newObj = {...obj};

//     newObj[key] = value;

//     return newObj;
// }

// const newEmployee = updateEmployeeWithKeyAndValue(
//     employee,
//     'streetAddress',
//     'Not My Street'
// );

// function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
//     obj[key] = value;

//     return obj;
// }

// destructivelyUpdateEmployeeWithKeyAndValue(
//     employee,
//     'streetAddress',
//     'Not My Street'
// )

// function deleteFromEmployeeByKey(obj, key, value) {
//     const newerObj = {...obj}

//     newerObj[key] = value

//     return newerObj;
// }

// const newerEmployee = deleteFromEmployeeByKey(
//     employee,
//     'streetAddress',
//     'Not My Street'
// )

// delete newerEmployee.streetAddress

// function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
//     obj[key] = value;

//     return obj;
// }

// const newestEmployee = destructivelyDeleteFromEmployeeByKey(
//     employee,
//     'streetAddress',
//     'Not My Street'
// )

// delete newestEmployee.key

const employee = {
    name: 'Jon',
    streetAddress: 'My Street'
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj}

    newObj[key] = value

    return newObj
}

// const newEmployee = updateEmployeeWithKeyAndValue(
//     employee,
//     'name',
//     'Sam'
// )

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value

    return obj;
}

// const deadEmployee = destructivelyUpdateEmployeeWithKeyAndValue (
//     employee,
//     'name',
//     'Sam'
// )

function deleteFromEmployeeByKey(obj, key, value) {
    const newerObJ = {...obj};

    newerObJ[key] = value

    return newerObJ;
}

// const newerEmployee = deleteFromEmployeeByKey(
//     employee,
//     'name',
//     'Sam'
// )

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value

    return obj
}


// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const employeesTable = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;
const countOutput = document.getElementById('empCount');

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const newRow = employeesTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const cellID = newRow.insertCell();
    const cellName = newRow.insertCell();
    const cellExtension = newRow.insertCell();
    const cellEmail = newRow.insertCell();
    const cellDepartment = newRow.insertCell();
    const cellDelete = newRow.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.addEventListener('click', deleteEmployee);
    cellDelete.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    updateEmployeeCount();
});

// DELETE EMPLOYEE
function deleteEmployee(e) {
    // CONFIRM THE DELETION TO THE USER
    if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE ROW INDEX OF THE DELETE BUTTON
        const rowIndex = e.target.parentElement.parentElement.rowIndex;

        // DELETE THE SELECTED ROW FROM THE TABLE
        employeesTable.deleteRow(rowIndex - 1);

        // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
        employeeCount--;
        updateEmployeeCount();
    }
}

// UPDATE EMPLOYEE COUNT DISPLAY
function updateEmployeeCount() {
    countOutput.textContent = `(${employeeCount} Employees)`;
}

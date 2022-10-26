//Define User class
class User {
    //constuctor 
    constructor(username, password, contactNumber, email, address) {
        this._username = username;
        this._password = password;
        this._contactNumber = contactNumber;
        this._email = email;
        this._address = address;
    }
    //getter and setter methods
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get contactNumber() {
        return this._contactNumber;
    }
    set contactNumber(value) {
        this._contactNumber = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
}
let data = [];
//Fetch form values using Object.fromentries()
const submitUser = (formData) => {
    formData.preventDefault();
    const data = new FormData(formData.target);
    const value = Object.fromEntries(data.entries());
    const user = new User(`${value.username}`, `${value.password}`, Number(value.contact), `${value.email}`, `${value.address}`);
    //call registerUser method with the constructed User object
    registerUser(user);
};
//POST data using fetch() api
function registerUser(user) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }).then((response) => response.json()).then((data) => {
        alert('Welcome to the Website'); //Dispay welcome message after successful registration 
    }).catch((error) => {
        console.log("Failed to save" + error);
    });
}

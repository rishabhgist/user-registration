//Define User class
class User {
//Field declartions
    private _username: string;
    private _password: string;
    private _contactNumber: number;
    private _email: string;
    private _address: string;
//constuctor 
    constructor(username: string, password: string, contactNumber: number, email: string, address: string) {
        this._username = username;
        this._password = password;
        this._contactNumber = contactNumber;
        this._email = email;
        this._address = address;
    }
//getter and setter methods
    get username(): string {
        return this._username;
    }
    set username(value: string) {
        this._username = value;
    }
    get password(): string {
        return this._password;
    }
    set password(value: string) {
        this._password = value;
    }
    get contactNumber(): number {
        return this._contactNumber;
    }
    set contactNumber(value: number) {
        this._contactNumber = value;
    }
    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }
    get address(): string {
        return this._address;
    }
    set address(value: string) {
        this._address = value;
    }

}
let data = [];
//Fetch form values using Object.fromentries()
const submitUser = (formData: any) => {
    formData.preventDefault();
    const data = new FormData(formData.target);
    const value = Object.fromEntries(data.entries());
    const user = new User(`${value.username}`, `${value.password}`, Number(value.contactNumber), `${value.email}`, `${value.address}`);
    //call registerUser method with the constructed User object
}

//POST data using fetch() api
function registerUser(user: User) {

    //Dispay welcome message after successful registration
}

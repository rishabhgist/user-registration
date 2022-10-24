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
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get contactNumber(): number {
        return this._contactNumber;
    }
    public set contactNumber(value: number) {
        this._contactNumber = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }

}

//Fetch form values using Object.fromentries()
const submitUser = (formData: any) => {

    //call registerUser method with the constructed User object
}

//POST data using fetch() api
function registerUser(user: User) {

    //Dispay welcome message after successful registration
}
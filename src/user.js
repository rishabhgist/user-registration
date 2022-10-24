//Define User class
var User = /** @class */ (function () {
    //constuctor 
    function User(username, password, contactNumber, email, address) {
        this._username = username;
        this._password = password;
        this._contactNumber = contactNumber;
        this._email = email;
        this._address = address;
    }
    Object.defineProperty(User.prototype, "username", {
        //getter and setter methods
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "contactNumber", {
        get: function () {
            return this._contactNumber;
        },
        set: function (value) {
            this._contactNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
//Fetch form values using Object.fromentries()
var submitUser = function (formData) {
    //call registerUser method with the constructed User object
};
//POST data using fetch() api
function registerUser(user) {
    //Dispay welcome message after successful registration
}

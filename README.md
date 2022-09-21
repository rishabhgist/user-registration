## User Registration

### Context

User registration systems are screens, forms, or profile pages that request information from a user to create a web-based account or profile. A user registration system generally asks a user to create a username, password, contact and other information.​

Most of the web applications have user registration form to record enough user information to facilitate user authentication.​ The user can change his profile information later at any time when it is required.​

As a developer, create a simple user registration form using TypeScript where the users can fill and submit their personal information. These details are stored in a database so that it can be later used for authentication.

### Problem Statement

Write a TypeScript program to create an interactive user registration page that captures user details and stores them in a database. The user details like username, password, contact, email, and address should be captured from the form.

### Tasks

The solution for this practice can be completed in 3 steps:
   - Step 1: Create the model class User inside `user.ts`
   - Step 2: Modify `index.html` to handle form submission
   - Step 3: Modify `user.ts` to save the user data

#### Step 1

   - ​Model the class User inside `user.ts` file provided in the boilerplate code.​
   - Declare variables for the attributes identified in the class​
   - Declare getter and setter property methods in the user class

Note: Model the user object with all attributes and behaviors which can be reused later for profile change functionality also.​

#### Step 2:​

   - Add onsubmit event with the form element available in the `index.html` to capture form field values.​
   - Give the path as `public/js/user.js` inside the script tag of the `index.html`.​​
     
#### Step 3:
 
   - Edit `user.ts` to capture the user form field values using FormData object and construct the User object.​
   - Edit `user.ts` file to save the user data in `users.json` file using fetch API.​
   - Display a welcome message to the user with username and contact number details after successful registration using an alert() method.​​

### Instructions

- Open the terminal in the root directory.
- Give the command `tsc` in the terminal to compile `.ts` files. (No need to specify the path with file name(s) while giving `tsc` command).
- Verify the converted files are located inside `public/js` folder.
- Start the json-server by giving the command `json-server users.json`
- Run the `index.html` with live server, fill the user details and submit the form.

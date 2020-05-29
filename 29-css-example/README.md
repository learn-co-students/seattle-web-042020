## SWBATs
- Understand, theoretically how authentication works
- Understand theoretically how authorization work
- Implement Sign in vs sign up
- Review sessions, cookies
- Implement log in, and log out

## Authentication && Authorization
1. What is authentication?
    - checking that you are who you say you are
    - two pieces to match ( username && password)
    - what you are
2. What is authorization?
    - type of person, student vs teacher
    - user vs coder (dev vs user for site)
    - user sees certain things but not everything
    - admin access
## User Stories
1. As a registered teacher, I should be able to sign up by providing my username.
    - Authentication
    - Model
        - class
            - `teacher.rb`
        - migration
            - `create_teachers`
    - Routes
        - sign-up
        - new form
        - create a new teacher
    - Controller
        - new and create
    - View
        - new
        - students index

2. As a registered teacher, I should be able to log in by providing my username.
    - compare what the user entered to what's in the database
    - verify the data
    - if it's correct take them to the index
    - else render the form again.
    - Model
        - No new models. 
    - Routes
        - get `form` for details
        - verify against username
        - some sort of post to handle the form data
    - Controller
        - teacher controller?
        - auth_controller
    - View
        - login page
        - redirect to students_index

3. As an un-authenticated teacher, I should not be able to see a list of students and information about an individual student.
    - `session[:teacher_id]`
    - show, index
    - students_controller
    - if it exists

4. As an authenticated teacher I should be able see a list of students and information about an individual student plus create a new student.

5. If an un-authenticated teacher tries to see the new student form, they should be redirected to the login page.

6. As an authenticated user, I should be able to logout


## Resources
##### Password Authentication Guidelines

- install gem `bcrpyt`
- you don't store passwords as plain text
  - add a password_digest column.
  - add `has_secure_password` to the model with the password.
- at signin use the bcrypt authenticate method to confirm that the password matches
- password hashing is one-way encryption (we never decrypt it)

- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
"README.md" 41L, 1628C

# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: Don't worry! Your life isn't over, you can just generate a migration! Inside your migration you'll want to use the keyword add_column that takes in a few parameters. The name of your foreign key should be the name of the parent model with _id appended along with the datatype being an integer. The foreign key will be on the Student model, as you want to link students to a cohort.

  Researched answer: First you need to generate a migration file, inside this file you will have to use the add_column key word to add a new column to your students table. This new column will be cohort_id in this case, it is the parent models name with _id appended to the end. This new column for your foreign id must be an integer. The foreign key will be in your student model, as you will be using the foreign key to link the student to the cohort. 



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that must always be passes params are Show, Edit, Update and Destroy. If you don't pass it params then it won't know which data entry you want! We pass params to our routes often to show us specific data, change parts of data, or delete data.

  Researched answer: Only a few of the RESTful routes must always be passed params. These routes include Show, Edit, Update, and Destroy and must be passed params so that you can show the specific data entry you want, get the info to edit that entry, update the entry based on your edit, and destroy a specific data entry. 



3. Name three rails generator commands. What is created by each?

  Your answer: The three rails generate commands are rails g model, rails g controller, and rails g migration. As kind of implied they create a model file, controller file, or a migration file respectively.

  Researched answer: There are three rails generator commands, first you have rails generate model. This generates a new table for your data with columns that have specific data types. Second, you have rails generate controller. This generates a controller that allows you to use the RESTful routes as controller methods. Third, you have rails generate migration. This creates a migration file that allows you to change data about your model such as adding columns, deleting columns, renaming columns, etc. Remember to run rails db:migrate after your changes!



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

This controller method will be Index, it will show all students
action: "GET"    location: /students          

This controller method is Create, it will create a new student
action: "POST"   location: /students       

This controller method is New, it will give the user a form to input data to Create^ a new student
action: "GET"    location: /students/new

This controller method is Show, it will show you a specific student based on the param you pass
action: "GET"    location: /students/2  

This controller method is Edit, it will give the user a form to update data on a existing student based on the param you pass
action: "GET"    location: /students/2/edit    

This controller method is Update, it will update the data on an existing student that is selected based on the param you pass
action: "PATCH"  location: /students/2      

This controller method is Destroy, it will delete the entire data entry of a student based on the param you pass
action: "DELETE" location: /students/2      



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user I can see a landing page with some info on the app with a sign up / sign in button  

As a user I can sign in to see my to-do list

As a user I can create a new to-do list

As a user I can rename my to-do list

As a user I can delete my to-do list

As a user I can create new items on my to-do list

As a user I can edit items on my to-do list 

As a user I can delete items on my to-do list

As a user I can organize my tasks in sub-lists

As a user I can sign out and I will not see my to-do list 

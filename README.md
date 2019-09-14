# Sources

* https://angular.io/
* https://angular.io/guide/setup-local
* https://angular.io/guide/displaying-data
* https://angular.io/guide/architecture
* https://angular.io/guide/observables
* https://angular.io/guide/http
* https://www.youtube.com/watch?v=Fdf5aTYRW0E&t=924s

# Code

Inside this directory you will find the Djbzf5Exploration1.zip folder with the source code and the built project in the dist/demo/ folder

# Recap

I decided to research Angular in preparation for the upcoming material in class. I read the documentation and watched a video demoing a Todo List which I toyed around with. I think Angular is an interesting framework, but I struggled with StackBlitz and syntax with Angular. I got a couple of errors in StackBlitz varying between unkown types (even though I imported the class correctly) and the server being unable to reach the jsonplaceholder that I used for the preloaded data. It turned out that StackBlitz just has that bug sometimes and a refresh usually fixed it. I began the demo by creating a Todo component that is used as a wrapper for the Todo-Items components. It's job is basically to manage the todo-items inside of it with the deleteTodo() and addTodo() methods. It's job is also to subscribe to the todoService to retrieve/filter the items. From there, I toyed with the todo-item component which is just a checkbox wrapped in a div with a button at the end and some text. It was somewhat difficult to get the todoService to retrieve the jsonplaceholder correctly and display in the todo-item, though. Then I added a header and a form with an input and a submit button. Further improvements could be made to include the ability to drag and reorder the todo-items. Could also add the options to customize the colors and adding due dates to the todo-items. Another thing that can be improved upon would be the addition of a calendar to organize the todos by days. After I finised this demo I downloaded the zip for the files, imported the project into the npm on my server, then built/published it. Now there is access to it at the link
* http://www.balnaroz.xyz/explorations/i/todo-demo/

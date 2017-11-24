# Getting started with `Node.js`

---

# The big difference between Node.js and PHP
## the story of asynchronous servers

+++

# In PHP
The server is setup via a tool (usually Apache) and incoming requests are "mapped" to a file via the `.htaccess`, (usually mapping directly the request URL to a `.php` file).
The server handles requests without break from A to Z. Meaning: when a request arrive it's greeted by a thread that will stay busy on the request until the answer if fully ready to be sent back.

+++

# In `Node.js`
We run a JS file which create the server(s) we need. Each incoming request is greeted by a:
##CALLBACK

+++

# If PHP was a restaurant
It would be a franchise: things are already setup and defined. You would have 3/4 personnels inside.

 - each time a customer enters, one member of the personnel will greet him
 - take the order
 - go to the kitchen, prepare the pizza and put it in the oven
 - wait until the pizza is crusty
 - take it to the customer

+++

# What if Node was a restaurant
It could be anything: from a milkshake join to a franchise, everything is possible and customizable at ease. With the same amount of personnel it would work like this:

 - each would have a role: waiter, cook, bartender
 - when a customer enter our waiter will greet him and ask questions to know where to send him.
 - depending of his needs we'll send him to the bartender or get their order to the cook who will prepare the pizza.
 - until the pizza is ready, the waiter can take care of other people.


---

# How to install node?
- install nvm
- pick a version
- run your file with `node file.js`

---

# `Hello world!`

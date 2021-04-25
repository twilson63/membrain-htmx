# README

Architect + htm + htmx example

This is an example project using Architect, htm and htmx to create a crud
application.

Architect is a serverless framework built on top of aws lambda, it makes
aws lambda approachable and managable without introducing complexity.

htm is a way to create react style components using template literals,
this gives you react without the compile step. 

htmx is a library that gives you a declarative approach to client side
functionality. It is a 10k js module that gives you the ability to declare
event oriented actions via the html attributes. You can think tailwind for
dom side javascript.

While, we are using react style components, it is important to note that 
these components are rendered server side and can not run on the client. 
This may appear like a limitation, but results in a natural separation
of functionality.

> WARNING: this approach may not be suitable for every type of application, 
I think it is suitable for CRUD based applications. 

## Why

Scale, with serverless functions you get the natural scalability to handle 
many concurrent request without blocking. You do need to consider you backend
services approach with serverless.

Reduction in complexity, YAGNI, every problem is not a nail and you don't always
need the React hammer to solve a problem, this approach gives you the component 
pattern that works well for applications, but also the server rendered pattern 
for a cleaner architecture approach.

## Install

> aws cli should be installed

``` sh
yarn add global aws-sdk
yarn add global @architect/architect
yarn 
yarn start
```



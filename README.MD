## Pre-requisites
- nodejs installed (prefereably version 16, eg.: v16.13.2)
- npm installed (should be come with nodejs installation)
- postman installed
- port 3000 available on localhost

## How to run the API
- Clone the repo
    - 'git clone git@github.com:afranca/api-pol-ts.git'
- Navigate into the api-pol-ts dir
    - 'cd api-pol-ts'
- Download project dependencies
    - 'npm install'
- Compile typescript code
    - 'tsc' 
    - use 'tsc -w' if you want to make changes to the code
- Start the server
    - 'npm start'
- Execute a GET request on postman
    - 'http://localhost:3000/api/users'    

## API Description
#### POST /api/user
- Request Body:
    {
        "name": "user 3",
        "age": 100,
        "occupation": "lifter",
        "role": "head"
    }
- Responses: 
    - Success:
        - status: 200 
        - body:  
            {   
                "message": "Successfully created.",
                "entry": {
                    "id": "0.09783725362257334",
                    "type": "poweruser",
                    "name": "user 3",
                    "age": 100,
                    "role": "head",
                    "occupation": "lifter"
                }
            }
    - Failure:
        - status: 500 
        - body:  
            {
                "message": [ERROR MESSAGE]
            }


#### GET /api/user/:id
- example: http://localhost:3000/api/users/0.09783725362257334
- Response: 
    - Success: 
        - status: 200 
        - body:  
                {
                    "message": "Successfully created.",
                    "entry": {
                        "id": "0.09783725362257334",
                        "type": "poweruser",
                        "name": "user 3",
                        "age": 100,
                        "role": "head",
                        "occupation": "lifter"
                    }
                }
    - Failure: 
        - status: 500 
        - body:  
            {
                "message": [ERROR MESSAGE]
            }

## New Blank Project (only if you are creating project from scratch)

#### init npm & typescript project
npm init
tsc --init

#### Production dependencies
npm install --save express body-parser

#### Dev dependencies
- npm install --save-dev nodemon
- npm install --save-dev @types/node
- npm install --save-dev @types/express
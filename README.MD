## How to run the API
- clone the repo:: git clone git@github.com:afranca/api-pol-ts.git
- navigate into the api-pol-ts dir::  cd api-pol-ts
- download dependencies:: npm install
- 'compile' typescript code:: tsc
- start the server:: npm start

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

## Creating New Blank Project

### init npm & typescript project
npm init
tsc --init

### Production dependencies
npm install --save express body-parser

### Dev dependencies
- npm install --save-dev nodemon
- npm install --save-dev @types/node
- npm install --save-dev @types/express
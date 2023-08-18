# event-emitters

Event emitters is an inbuilt Node module that allows us to get events registerd in our server/app.

## Installation

use the package manager [npm](https://www.npmjs.com/) to install all the required dependencies

```bash
npm install
```
## Usage
``` 
const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');
const {v4: uuid} = require('uuid');
const {format} = require('date-fns');
const { EventEmitter } = require('events');
```

## Dependencies
* v4 UUID - to create an id dynamically for each log registered
* date fns - to give the time the event was registerd.

## Modules
* Event modules
* FS modules
* Path modules
# huti26.github.io

Website to test out Bootstrap, JavaScript & Webdevelopment basics. Filled with a bit of statistics regarding Teamfight Tactics.

# To Do
- update dependencies
- test if using svg instead of png is better
- update numbers to latest tft patch

# Building

Clone the repo

```git clone https://github.com/huti26/huti26.github.io```

Cd into the directory

```cd huti26.github.io```

Install npm packages

```npm install```

Bootstrap source files are required to use sass. Download them [here](https://getbootstrap.com/docs/4.4/getting-started/download/).

Create source files folder

```mkdir 'source files'```

Extract Bootstrap source files & move them into the folder 'source files'

Rename the Bootstrap folder from 'bootstrap-4.4.1' to 'bootstrap'

Now you can build the projects css using

```gulp css```


---
The following structure should have been added to the project.
```
huti26.github.io
│
└───source files
│   │
│   └───bootstrap
│       │   build
│       │   scss
│       │   ...
│   
└───node_modules
```


# Social network with Mongoose

In this project we wil uses express and mongoose to acreat an API for a social network.


## How to start
First of all we have to set up a mongoose account config to make it work. 

[Getting started width mongoDB](https://www.mongodb.com/docs/manual/tutorial/getting-started/)

After creating **mongoDB** cluster and accout we have to clone te repo and set up this in *'.config'* file

```bash
git clone https://github.com/dondifer/mongoosee-init.git
 ```

```bash
module.exports = {
MONGO_URI: 'mongodb+srv://<name>:<password>@cluster0-tuqrv.mongodb.net/test?retryWrites=true&w=majority'
}
```
Where name and password are personal data of **mongoDB** cluster

After that we should import project collection in **postman** to be able to fill the database, after that we will proceed to instalation.

## Installation

Install mongoosee-init with npm, run next commands to install dependencies:

```bash
  cd mongoosee-init   
  npm install
```
If installations end as expected we only just have to run next command:
```bash
  npm start
```
When local server is compiled it shoud appear next log in console:
```bash
> mongoosee-init@1.0.0 start
> nodemon index.js

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Server started at port 3000
Base de datos conectada con éxito
```
    
## Authors

- [@dondifer](https://www.github.com/dondifer)


## Badges

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)

![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)


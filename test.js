const credents = {
    username: '99fa8097-672e-4b34-a9c6-4ff5dad4fc72',
    password: '9fd91a9e51224f81813403f04da12e87'
};

let encoded = credents.username + ":" + credents.password;
encoded = Buffer.from(encoded).toString('base64');

console.log(encoded)
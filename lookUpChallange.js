var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza","Coding", "Browine Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Laine",
        "number": "0102871705",
        "likes": ["movies", "music", "memes"]
    },
    {
        "firstName": "Mohamed",
        "lastName": "Ahmed",
        "number": "01028170185",
        "likes": ["programming", "Javascript", "Node.js"]
    },
    {
        "firstName": "Eslam",
        "lastName": "Moataz",
        "number": "0102548020",
        "likes": ["technology","gaming", "web programming"]
    }
];


const lookUpChallange = (name,prop) => {
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop]
        }
    }
}

let data = lookUpChallange;


console.log(data("Eslam", "likes"))
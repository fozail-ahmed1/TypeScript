interface Person{
    username:string;
    password:string;
    email?:string;
}

function save ( person:Person){
    console.log(person.username+' '+'was registered!')
}

save({username:'john',email:'john1232@gmail.com',password:'123456'})
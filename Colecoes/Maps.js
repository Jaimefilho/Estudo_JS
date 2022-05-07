function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin' ){
            admins.push(key);
        }
    }
    return admins;
};
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Jaime', 'Admin');
usuarios.set('Jorge','User');
usuarios.set('Liciana','User');
usuarios.set('Clei','User');
usuarios.set('Cleide','Admin');

console.log(getAdmins(usuarios));

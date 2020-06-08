import { User } from '../models/user';
import { Injectable } from '@angular/core';
import {USERS} from '../data/usersData'

@Injectable()
export class UserService{
    
    /**
     * cette fonction permet de récuperer la liste des utilisateurs
     */
    findAll(): User[] {
        return USERS;
    }


    /**
     * fonction d'ajout d'une utilisateur
     * @param user 
     */
    saveUser(user:User):void {
        if (user.id == null){
            user.id = USERS.length + 1 ;
            USERS.push(user); 
        }
    }

    deleteUser(user:User):void {
        console.log ("service suppression ");
        let idx;
        idx = USERS.indexOf(user);
        console.log ("position user = " + idx);
        if (idx >= 0)
        {
            USERS.splice(idx,1);
        }
        this.findAll();
    }

    updateUser(user:User):void {
        var OldUser = this.findUserById(user.id);
        console.log ("Updating ")
        let idx;
        idx = USERS.indexOf(OldUser);
        if (idx >= 0)
        {
            USERS.splice(idx,1,user);
        }

    }

    findUserById(id:number):User {
        console.log("service user start" );
        var curentUser:User;
        for (var i=0 ; i < USERS.length; i++ ){
           curentUser = USERS[i];
           console.log("service user start"+ curentUser);
        
           if (curentUser.id == id ){
                console.log("service user trouvéé" + curentUser);
                return curentUser;
            }
        }
        console.log("service user non trouvé " );
        return undefined;
    }


}
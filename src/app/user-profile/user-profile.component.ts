import { Component } from '@angular/core';
import { Users } from '../models/user-profiles';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: Users = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    afficher : true,
    getAge(){
      this.afficher === true ? this.afficher = false : this.afficher = true;
    }
  };
}

  // const User2 = new Users2("Doe", "John", 25,"",'https://randomuser.me/api/portraits/lego/2.jpg', true)
 
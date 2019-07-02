import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  users = [];
  index() {
    return this.users;
  }
  create(user) {
    let newUser = {...user, id: new Date().valueOf()}
    this.users.push(newUser)
    return newUser
  }
}

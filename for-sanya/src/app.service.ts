import { Injectable } from '@nestjs/common';

interface User {
  password: string;
  email: string;
  name: string;
  id: number;
}

@Injectable()
export class AppService {
  users: Array<User> = [];
  index() {
    return this.users;
  }
  create(user) {
    let newUser = {...user, id: new Date().valueOf()}
    this.users.push(newUser)
    return newUser
  }
  login({email, password}) {
    let user = this.users.filter(user => user.email === email)[0]
    if (!user) return 'User not found'
    if (user.password !== password) return 'Password invalid'
    return user;
  }
}

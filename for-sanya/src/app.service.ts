import { Injectable } from '@nestjs/common';

interface Hero {
  id?: number;
  name: string;
  description: string;
  super_power: string;
  age: number;
  image: string;
}

@Injectable()
export class AppService {
  heroes: Array<Hero> = [];
  index() {
    return this.heroes;
  }
  create(hero: Hero) {
    let newHero = {...hero, id: new Date().valueOf()}
    this.heroes.push(newHero)
    return newHero
  }
  update(id: number, hero: Hero) {
    let currentHero = this.heroes.filter(maphero => maphero.id === Number(id))[0]
    if (!currentHero) return 'Hero not found'
    let arrId = this.heroes.indexOf(currentHero)
    this.heroes[arrId] = {...hero, id: Number(id)}
    return this.heroes[arrId]
  }
  delete(id: number) {
    let currentHero = this.heroes.filter(maphero => maphero.id === Number(id))[0]
    if (!currentHero) return 'Hero not found'
    this.heroes.splice(this.heroes.indexOf(currentHero), 1);
    return 'Deleted successed'
  }
}

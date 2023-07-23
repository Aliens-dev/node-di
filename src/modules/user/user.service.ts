import { Injectable } from "../../container/decorators/injectable";

@Injectable()
export class UserService {
    constructor() {
        this.get = this.get.bind(this);
        this.getOne = this.getOne.bind(this);
    }

    get() {
        return "users";
    }

    getOne(id) {
        return `user-${id}`;
    }
}

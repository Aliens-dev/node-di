import { Injectable } from "../../container/decorators/injectable";
import { UserService } from "./user.service";

@Injectable()
export class UserController {
    constructor(private userService: UserService) {
        this.all = this.all.bind(this);
        this.getOne = this.getOne.bind(this);
    }

    all(req, res, next) {
        return this.userService.get();
    }

    getOne(req) {
        const id = req.params.id;
        return this.userService.getOne(id);
    }
}

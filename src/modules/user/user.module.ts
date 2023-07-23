import { DIContainer } from "../../container/container";
import { RouteHandler } from "../../handler/routeHandler";
import { UserController } from "./user.controller";
import express, { Router } from "express";
import { UserService } from "./user.service";

export class UserModule {
    private router: Router;
    private controller: UserController;
    constructor(container: DIContainer) {
        this.router = express.Router();
        this.controller = container.resolve<UserController>(UserController);
        this.setRoutes();
    }

    setRoutes() {
        this.router.get("/users", RouteHandler(this.controller.all));
        this.router.get("/users/:id", RouteHandler(this.controller.getOne));
    }

    getRoutes() {
        return this.router;
    }
}

const container = DIContainer.getInstance();

export const userModule = new UserModule(container);

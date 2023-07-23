import "reflect-metadata";
import express from "express";
import { userModule } from "./modules/user/user.module";

const bootstrap = () => {
    const app = express();
    app.use(userModule.getRoutes());
    return app;
};
export default bootstrap;

import { DIContainer } from "../container";
const container = DIContainer.getInstance();

export const Injectable = (): ClassDecorator => {
    return target => {
        type: "injectable";
    };
};

export const RouteHandler = method => {
    return async (req, res) => {
        const response = await method(req, res);
        res.send(response);
    };
};

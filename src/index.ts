import "reflect-metadata";
import bootstrap from "./bootstrap";

const port = process.env.PORT || 3000;
const app = bootstrap();

app.listen(port, () => {
    console.log("Server started on port " + port);
});

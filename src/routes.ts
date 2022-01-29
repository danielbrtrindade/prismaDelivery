import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClient = new AuthenticateClientController();

routes.post("/authenticate", authenticateClient.handle);
routes.post("/client/", createClientController.handle);

export { routes };
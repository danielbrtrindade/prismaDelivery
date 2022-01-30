import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClient = new AuthenticateClientController();
const authenticateDeliveryman = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliverymanController();

routes.post("/client/authenticate", authenticateClient.handle);
routes.post("/deliveryman/authenticate", authenticateDeliveryman.handle);
routes.post("/client", createClientController.handle);
routes.post("/deliveryman", createDeliveryController.handle);

export { routes };
import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClient = new AuthenticateClientController();
const authenticateDeliveryman = new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

routes.post("/client/authenticate", authenticateClient.handle);
routes.post("/deliveryman/authenticate", authenticateDeliveryman.handle);
routes.post("/client", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/delivery", createDeliveryController.handle);




export { routes };
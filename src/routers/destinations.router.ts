import express from "express";
import {
  getAllArticles,
  getAllCountries,
  getAllWhereToDestinations,
  getDestination,
  getAllDestinations,
} from "../controllers/destinations.controller";

const destinationsRouter = express.Router();

destinationsRouter.get("/", getAllDestinations);
destinationsRouter.get("/articles", getAllArticles);
destinationsRouter.get("/where-to-next", getAllWhereToDestinations);
destinationsRouter.get("/countries", getAllCountries);
destinationsRouter.get("/:destination", getDestination);

export default destinationsRouter;

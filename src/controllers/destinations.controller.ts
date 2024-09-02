import { NextFunction } from "express";
import destinationsService from "../services/destinations.service";
import {
  ok,
  exisitingKey,
  badRequest,
  created,
} from "../utils/responses.utils";

const getAllWhereToDestinations = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  try {
    const data = await destinationsService.getAllWhereToDestinations();
    ok(res, "Where to: ", data);
  } catch (err) {
    next(err);
  }
};

const getAllArticles = async (req: any, res: any, next: NextFunction) => {
  try {
    const data = await destinationsService.getAllArticles();
    // console.log(data);

    ok(res, "Articles: ", data);
  } catch (err) {
    next(err);
  }
};

const getAllCountries = async (req: any, res: any, next: NextFunction) => {
  try {
    const data = await destinationsService.getAllCountries();
    ok(res, "Countries: ", data);
  } catch (err) {
    next(err);
  }
};

const getAllDestinations = async (req: any, res: any, next: NextFunction) => {
  try {
    const data = await destinationsService.getAllDestinations();
    ok(res, "Destinations: ", data);
  } catch (err) {
    next(err);
  }
};

const getDestination = async (req: any, res: any, next: NextFunction) => {
  const destination = req.params.destination;
  // console.log("destination", destination);

  try {
    const data = await destinationsService.getDestination(destination);
    ok(res, "Destination: ", data);
  } catch (err) {
    next(err);
  }
};

export {
  getAllWhereToDestinations,
  getAllArticles,
  getAllCountries,
  getDestination,
  getAllDestinations,
};

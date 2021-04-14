import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";

export class PlanetsController extends BaseController {
  constructor() {
    super("/planets");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create);

  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      let allPlanets = await planetsService.find(req.query)
      return res.send(allPlanets);
    } catch (error) {
      next(error);
    }
  }



  /**
 * Creates a value from request body and returns it
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
async getById(req, res, next) {
  try {
    let onePlanet = await planetsService.findOne({_id: req.params.id})
    res.send(onePlanet);
  } catch (error) {
    next(error);
  }
}


  /**
   * Creates a value from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const makePlanet = planetsService.create(req.body)
      res.send(makePlanet);
    } catch (error) {
      next(error);
    }
  }



}

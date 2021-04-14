import BaseController from "../utils/BaseController";
import { speciesService } from "../services/SpeciesService";

export class SpeciesController extends BaseController {
  constructor() {
    super("/species");
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
      let allPeople = await speciesService.find(req.query)
      return res.send(allPeople);
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
    let onePeople = await speciesService.findOne({_id: req.params.id})
    res.send(onePeople);
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
      const makePeople = speciesService.create(req.body)
      res.send(makePeople);
    } catch (error) {
      next(error);
    }
  }



}

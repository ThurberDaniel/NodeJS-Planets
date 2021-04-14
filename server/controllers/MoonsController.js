import BaseController from "../utils/BaseController";
import { moonsService } from "../services/MoonsService";

export class MoonsController extends BaseController {
  constructor() {
    super("/moons");
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
      let allMoons = await moonsService.find(req.query)
      return res.send(allMoons);
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
    let oneMoon = await moonsService.findOne({_id: req.params.id})
    res.send(oneMoon);
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
      const makeMoon = moonsService.create(req.body)
      res.send(makeMoon);
    } catch (error) {
      next(error);
    }
  }



}

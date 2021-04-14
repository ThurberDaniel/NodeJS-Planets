import BaseController from "../utils/BaseController";
import { galaxiesService } from "../services/GalaxiesService";

export class GalaxiesController extends BaseController {
  constructor() {
    super("/galaxies");
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
      let allGalaxies = await galaxiesService.find(req.query)
      return res.send(allGalaxies);
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
    let oneGalaxy = await galaxiesService.findOne({_id: req.params.id})
    res.send(oneGalaxy);
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
      const makeGalaxy = galaxiesService.create(req.body)
      res.send(makeGalaxy);
    } catch (error) {
      next(error);
    }
  }





}
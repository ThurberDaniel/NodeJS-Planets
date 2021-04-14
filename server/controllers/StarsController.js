import BaseController from "../utils/BaseController";
import { starsService } from "../services/StarsService";

export class StarsController extends BaseController {
  constructor() {
    super("/stars");
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
      let allStars = await starsService.find(req.query)
      return res.send(allStars);
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
    let oneStar = await starsService.findOne({_id: req.params.id})
    res.send(oneStar);
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
      const makeStar = starsService.create(req.body)
      res.send(makeStar);
    } catch (error) {
      next(error);
    }
  }



}

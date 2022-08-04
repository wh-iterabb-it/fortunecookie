import * as express from "express";
import { DefaultController } from "./";
import { getFortune } from "../models/fortunes";

class MainController extends DefaultController {
  constructor() {
    super("/");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getFortuneRandom);
  }

  private getFortuneRandom = (
    request: express.Request,
    response: express.Response
  ) => {
    response.status(200).send({
      data: {
        message: `${getFortune()}`,
      },
      meta: {
        status: 200,
      },
    });
  };
}

export default MainController;

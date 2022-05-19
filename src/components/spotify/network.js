import { Router } from "express";
import * as Controller from "./controller";

const spotifyRouter = Router();

spotifyRouter.route("/playlists").get(Controller.getPlaylists);

export default spotifyRouter;

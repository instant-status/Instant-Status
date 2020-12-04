import Koa from "koa";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import bearerToken from "koa-bearer-token";
import cors from "@koa/cors";

import db from "diskdb";
import dotenv from "dotenv";

import appRoutes from "./routes/routes";
import { isRequestAllowed } from "./controllers/auth";
import { APP_CONFIG } from "../appConfig.ts";

const app = new Koa();

dotenv.config();

app.use(cors());
app.use(json());
app.use(bodyParser());
app.use(bearerToken());

app.use((ctx, next) => {
  if (isRequestAllowed(ctx.request)) {
    return next();
  } else {
    ctx.status = 401;
    ctx.body = [];
  }
});

db.connect("../data/", ["instances"]);

app.use(appRoutes.routes()).use(appRoutes.allowedMethods());

const port = APP_CONFIG.PORT || 3000;
app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);

import "./style.css";

import app from "@/app";
import { DomDriver } from "@/core/drivers/dom.ts";
import { HistoryDriver } from "@/core/drivers/history.ts";
import { LoggerDriver } from "@/core/drivers/logger.ts";
import { TimeDriver } from "@/core/drivers/time.ts";
import { NiCat } from "@/core/nicat.ts";

const drivers = [
  new DomDriver("#app"),
  new HistoryDriver(),
  new LoggerDriver(),
  new TimeDriver(),
];

const niCat = new NiCat(app, drivers);

niCat.run();

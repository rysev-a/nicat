import "./style.css";

import app from "@/app";
import { NiCat } from "@/core/nicat.ts";
import { showStart } from "@/start.ts";

showStart();

const nicat = new NiCat(app);
nicat.run();

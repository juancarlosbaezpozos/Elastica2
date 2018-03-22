import * as express from "express";
import { NorthwindServer } from "./server";

//NorthwindServer.create(3000);
NorthwindServer.create("/odata", 3000);
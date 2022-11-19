import { EventEmitter } from "events";

class RelabsEmitter extends EventEmitter {}

export const relabsEmitter = new RelabsEmitter();

import { writable } from "svelte/store";

export const screen = writable("start");
export const mapTemplate = writable("");
export const mapArray = writable([]);
export const hoveredTile = writable(null);
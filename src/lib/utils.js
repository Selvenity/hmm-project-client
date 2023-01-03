import { screen } from "./stores.js";

/**
 * **loadForm(form):**
 * Gets an HTML form and returns it as JSON data.
 */
export function loadForm(form) {
    const formData = new FormData(form.target);
    const data = {};

    for (let field of formData) {
        const [key, value] = field;
        data[key] = value;
    }
    return data;
}

export class tools {
    setScreen(newScreen) {
        screen.set(newScreen);
        console.log(`screen set to ${newScreen}`);
    }
}
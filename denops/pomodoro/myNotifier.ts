import { Notifier } from "./notifiers.ts";
import type { Vim } from "./vim.ts";

export class MyNotifier implements Notifier {
    #vim : Vim;
    
    constructor(vim: Vim) {
        this.#vim = vim;
    }

    async notify(_title: string, message: string): Promise<void> {
        console.log(message);
        return await this.#vim.execute(`SplashSay ${message}`)
    }
}

export function createMyNotifier(vim:Vim): MyNotifier {
    return new MyNotifier(vim);
}

declare module "text!*" {
    const text: string;
    export = text;
}

declare module "text!*!strip" {
    const text: string;
    export = text;
}

declare module "highlight-js" {
    import * as hljs from "highlight.js";
    export = hljs;
}

declare module "vue/types/vue" {
    interface Vue {
        $notify: {
            (options: { title?: string; message?: string; duration?: number }): void;
            error(options: { title?: string; message?: string; duration?: number }): void;
            warning(options: { title?: string; message?: string; duration?: number }): void;
            info(options: { title?: string; message?: string; duration?: number }): void;
            success(options: { title?: string; message?: string; duration?: number }): void;
        }
    }
}

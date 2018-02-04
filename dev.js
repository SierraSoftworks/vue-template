#!/usr/bin/env node

const historyFallback = require("connect-history-api-fallback")
const browserSync = require("browser-sync").create();

browserSync.init({
    files: ["src/**/*", "!src/**/*.ts"],
    server: {
        baseDir: "src",
        middleware: [historyFallback()]
    }
})
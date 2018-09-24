#!/usr/bin/env node

const historyFallback = require('connect-history-api-fallback');
const browserSync = require('browser-sync').create();
const ts = require('typescript');

const configPath = ts.findConfigFile("./", ts.sys.fileExists, "tsconfig.json");
if (!configPath) throw new Error("Could not find a valid 'tsconfig.json' file");

browserSync.init({
    files: ['src/**/*', '!src/**/*.ts'],
    server: {
        baseDir: 'src',
        middleware: [historyFallback()],
    },
});

const tscHost = ts.createWatchCompilerHost(
    configPath,
    {},
    ts.sys,
    ts.createEmitAndSemanticDiagnosticsBuilderProgram,
    reportDiagnostic,
    reportWatchStatusChanged
);

const tsc = ts.createWatchProgram(tscHost);

/**
 * @param {ts.Diagnostic} diagnostic 
 */
function reportDiagnostic(diagnostic) {
    console.error(
        "Error",
        diagnostic.code,
        ":",
        ts.flattenDiagnosticMessageText(
            diagnostic.messageText,
            () => ts.sys.newLine
        )
    );
}

/**
 * Prints a diagnostic every time the watch status changes.
 * This is mainly for messages like "Starting compilation" or "Compilation completed".
 * @param {ts.Diagnostic} diagnostic
 */
function reportWatchStatusChanged(diagnostic) {
    console.info(ts.formatDiagnostic(diagnostic, {
        getCanonicalFileName: path => path,
        getCurrentDirectory: ts.sys.getCurrentDirectory,
        getNewLine: () => ts.sys.newLine
    }));
}

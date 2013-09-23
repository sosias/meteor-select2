Package.describe({
    summary: "Select2 is a jQuery based replacement for select boxes."
});

Package.on_use(function (api) {
    api.use("jquery", "client");

    api.add_files([
        "select2/lib/select2.js",
        "select2/lib/select2.css",
        "select2/lib/select2.png",
        "select2/lib/select2x2.png",
        "select2/lib/select2-spinner.gif",
        "path-override.css"
    ], "client");
});

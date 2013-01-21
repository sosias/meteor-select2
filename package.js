Package.describe({
    summary: "Select2 is a jQuery based replacement for select boxes."
});

Package.on_use(function (api) {
    api.use("jquery", "client");
    api.add_files([
        "select2/select2.js",
        "select2/select2.css",
        "select2/select2.png",
        "select2/select2x2.png",
        "select2/select2-spinner.gif",
    ], "client");

    api.add_files('path-override.css', 'client');
});

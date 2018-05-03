Package.describe({
  name: "local:select2",
  summary: "Fork of natestrauser-Select2. Select2 is a jQuery based replacement for select boxes",
  version: "4.0.6-rc.1",
  git: "https://github.com/sosias/meteor-select2.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use("jquery", "client");

  api.add_files([
    "lib/select2/dist/js/select2.js"
  ], "client", { bare: true });

  api.add_files([
    "lib/select2/dist/css/select2.css"
  ], "client");
});

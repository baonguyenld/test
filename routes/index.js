const accountRouter = require("./accounts");
function route(app) {
    app.use("/api/account",accountRouter);
}

module.exports = route;
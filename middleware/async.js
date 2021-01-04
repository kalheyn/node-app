// npm module express-async-errors automatically "monkeypatches" this into the routes

module.exports = function (handler) { 
    // handler is a reference to an async function: async (req, res) => {}    

    return async (req, res, next) => {
        try{
            await handler(req, res); 
        }
        catch(ex) {
            next(ex);
        }
    };
}

module.exports = function (handler) { // handler is a reference to an async function 
    return async (req, res, next) => {
        try{
            await handler(req, res); 
        }
        catch(ex) {
            next(ex);
        }
    };
}
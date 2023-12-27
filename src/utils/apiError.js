
class ApiError extends Error{
    //my own constructor
    constructor(statusCode, message="Somethin went wrong!!",errors=[],stack=""){
        super(message);
        this.statusCode = statusCode;//overwritten
        this.message = message;
        this.data=null;
        this.success=false;
        this.errors=errors;

        if(stack)
            this.stack=stack
        else
            Error.captureStackTrace(this,this.constructor)
    }
}

export {ApiError}
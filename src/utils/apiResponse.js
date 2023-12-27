
class ApiResponse{
    constructor(statusCode, message="Success", data){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success=statusCode<400
        //overwritten
    }

    send(res){
        res.status(this.statusCode).json(this);
    }
}
//(ERR,REQ,RES,NEXT)->middleware elements,flag->next
//to write a utility wrapper function

const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}//prod grade code std
//promises async handler,higher order func
export {asyncHandler}
 
// const asyncHandler=()=>{}
// const asyncHandler=(fn)=>()=>{}//2nd
// const asyncHandler=(fn)=>async ()=>{}

// const asyncHandler=(fn)=>async (req,res,next)=>{
//     try
//     {
//         await fn(req,res,next)//fn execute
//     }
//     catch(error)
//     {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
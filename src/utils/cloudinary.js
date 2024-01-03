import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';//filehandle
//unlink
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

//if localfile path is available
const uploadOnCloud=async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        //upload the file on cloudinary
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //uploaded succesfully
        console.log("file is uploaded on cloudinary",response.url);
        return response;
    }
    catch(error)
    {
        fs.unlinkSync(localFilePath)//remove the locally saved temp file as the upload fails
        return null;
        //throw new Error(error);
    }
}

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

export{uploadOnCloud};

//HTTP
//URL,URI,URN
//Headers->req->frm client,res->frm server,rep-encoding,payload->data

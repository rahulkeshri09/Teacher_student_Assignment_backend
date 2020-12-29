const Teacher=require('../models/teacher');
const { use } = require('../routes');
module.exports.create=async function(req,res){
    try{
        let user=await Teacher.findOne({email:req.body.email});
        console.log("user=",req.body);
        if(!user){
            console.log("inside !user");
            Teacher.create(req.body);
            return res.json(200,{
                message:"teacher id successfully created",
                name:req.body.name,
                email:req.body.email,
                subject:req.body.subject
            });
        }
        return res.json(409,{
            message:"user alreday exists",
            name:req.body.email,
            subject:req.body.subject
        })
    }catch(err){
        return res.json(500,{
            message:"something error"
        })
    }
}
module.exports.login=async function(req,res){
    try{
        let user=await Teacher.findOne({email:req.body.email});
        if(!user){
            return res.json(404,{
                message:"user not found"
            })
        }else{
            if(req.body.password===user.password){
                return res.json(200,{
                    message:"Teacher logged In",
                    data:{
                        name:user.name,
                        email:user.email,
                        subject:user.subject
                    }
                })
            }
        }
        return res.json(404,{
            message:"incorrect id or password"
        })

    }catch(err){
        return res.json(409,{
            message:"inteval server"
        })
    }
}
module.exports.update=async function(req,res){
    try{
        let user=await Teacher.findOne({email:req.body.email});
        if(!user){
            return res.json(404,{
                message:"user not found"
            })
        }
        if(user.password!==req.body.password){
            return res.json(404,{
                message:"incorrecr password"
            })
        }else{
            user.name=req.body.name;
            user.password=req.body.newPassword;
            user.save();
            return res.json(200,{
                        message:"successfully updated",
                        data:{
                            email:req.body.email,
                            name:req.body.name,
                            subject:user.subject,
                        }
                    })

        }
    }catch(err){
        return res.json(500,{
            message:"internal server error"
        })
    }
}
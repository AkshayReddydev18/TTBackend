const educational = require('../modals/educational')

exports.educational = async(req,res)=>{
    const data = req.body;

    req.body.img = {
        data:req.file.buffer,
        contentType:req.file.mimetype
    }
    const educationalData = new educationalModal(req.body)
    await educationalData.save()
    res.send(data)
}
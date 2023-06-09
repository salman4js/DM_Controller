const Content = require("../../models/cs");


// Add data server!
const addCs = (req,res,next) => {
  const cs = new Content({
    cs: req.params.id
  }) 
  
  // If the cs object got created, then save the cs object reference!
  cs.save()
    .then(data => {
      res.status(200).json({
        success: true,
        message: "Content Server got created successfully!"
      })
    })
    .catch(err => {
        res.status(400).json({
            success : false,
            message : "Some Internal Error Occured!"
        })
    })
}

// All data server!
function allDataServer(req,res,next){
  Content.find({})
    .then(data => {
      res.status(200).json({
        success: true,
        message: data
      })
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: "Some internal error occured!"
      })
    })
}

// Update data server address!
function updateDataServer(req,res,next){
  Content.findByIdAndUpdate(req.params.id, {
    cs: req.body.cs
  })
  .then(data => {
    res.status(200).json({
      success: true,
      message: "Data server updated!"
    })
  })
  .catch(err => {
    res.status(404).json({
      success: false,
      message: "Some internal error occured!"
    })
  })
}

module.exports = {
  addCs, allDataServer, updateDataServer
}
import User from '../models/User.js'


  const getAllDoc = async (req, res) => {
    try {
      const result = await User.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }


export  {getAllDoc}
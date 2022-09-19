import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from './models/userModel';

const userRouter = express.Router();

userRouter.get('/createadmin',expressAsyncHandler (async (req, res) => {
  try {
    const user = new User({
      name: 'admin',
      email: 'admin@example.com',
      password: 'jsamazona',
      isAdmin: true,
    });
    const createdUser = await user.save();
    res.send(createdUser);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
})
);

userRouter.post('/signin', expressAsyncHandler (async (req, res) => {
  const signinUser = await User.findOne({ 
    email: 'admin@example.com',
    password: req.body.password,
  
  });
  if(!signinUser){
    res.status(401).send({
      message: 'Invalid username or password',
    });
  }
})
);
export default userRouter;
import express from 'express';
import User from './models/userModel';

const userRouter = express.Router();

userRouter.get('/createadmin', async (req, res) => {
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
});
userRouter.post('/signin', async (req, res) => {
  const signinUser = await User.findOne({ 
    email: 'admin@example.com',
    password: ret.body.password,
  
  });
})
export default userRouter;
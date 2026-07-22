import mongoose from 'mongoose'

export const connectDB = async () => {
   await mongoose.connect('mongodb+srv://aman21:FHEI549FJK@cluster0.bcb58t8.mongodb.net/swiftbite').then(()=> console.log('DB connected'));
}
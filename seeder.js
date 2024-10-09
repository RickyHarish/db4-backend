import connectDB from "./config/db.js";
import mongoose from "mongoose";
import colors from 'colors'
import dotenv from 'dotenv'
import Employee from "./models/employeeModel.js";
import employees from "./data/employees.js";

dotenv.config()
connectDB()

const importData=async()=>{
    try{
        Employee.deleteMany()
        const createdEmployees = await Employee.insertMany(employees)
        console.log('Data Imported'.green.inverse)
        process.exit(0)
    }catch (error)
    {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData= async()=>{
        try{
            await Employee.deleteMany()
            console.log('Data Destroyed!'.red.inverse)
            process.exit(1)
        }catch(error){
            console.log(`${error}`.red.inverse)
            process.exit(1)
        }
}

if(process.argv[2]==="-d"){
    destroyData()
}else{
    importData()
}
import { Schema, model } from 'mongoose'

const newSchema = Schema({
    data:{
        type:String,
        required:true
    }
})

const DataModel= model('SampleData',newSchema)
export default DataModel
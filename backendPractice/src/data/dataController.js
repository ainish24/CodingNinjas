import DataModel from './dataSchema.js'

export const dataController = async (req,res)=>{
    try {
        const data = req.body.data
        const strings=data.map(d=>({data:d}))
        await DataModel.deleteMany()
        await DataModel.insertMany(strings)
        const allStrings= await DataModel.find()
        const sorted= allStrings.map((item)=>item.data).sort((a,b)=>{
            if(b.length !== a.length) return b.length - a.length
            return b.localeCompare(a);
        })
        res.json({
            status:200,
            message:"Success",
            data:sorted
        })
    } catch (error) {
        res.status(500).send('Error on our end!')
        console.log(error)
    }
}


import sqlQuery from '../../lib/db'

const handler = async (req,res)=>{
   try{

    if(req.method === 'GET'){
        const property = "SELECT * FROM table_name"
        const result = await sqlQuery(property)
        res.send(result)
    }

   }catch(e){
       throw Error(e.messeage)
   }
}

export default handler;
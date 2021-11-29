const mySql = require('serverless-mysql')({
    config:{}
})

export async function sqlQuery (queryStrings,values=[]){
    try{
        let results = await mySql.query(queryStrings,values)
        await mySql.end();
        return results;
    }catch(e){
        throw Error(e.message)
    }
}
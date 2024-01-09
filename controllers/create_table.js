const db = require('../util/database')

exports.getcreateTable = async(req,res,next) => {
    try{
        res.sendFile('index.html',{
            root:'views'
    })
    }
    catch(err){
        console.log(err)
    }
}

exports.postCreatetable = async(req,res,next) => {
    try{
        res.redirect('/create_table')
    }catch(err){
        console.log(err)
    }
}


exports.getcreate_Table = async(req,res,next) => {
    try{
        res.sendFile('create-table.html',{
            root:'views'
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.postcreate_table = async(req,res,next) => {
    try {
        const {table_create,field_create,field_data_type} = req.body
        await db.execute(`
          CREATE TABLE IF NOT EXISTS \`${table_create}\` (
            \`${field_create}\` ${field_data_type}
          )
        `);
        res.redirect('/');
      } catch (err) {
        console.log(err);
        // Handle the error appropriately, e.g., send an error response to the client
        res.status(500).send('Internal Server Error');
      }
      
}
let crypto = require('crypto')
let localData = {}
const resolver = {
    Query:{
        getMessage: () => {
            return "Hi How are you Huzaifa"
        },
        getName: ()=> {
            return "Huzaifa Ahmed"
        },
        getAllMessags: ()=>{
            return [{message:"test",id:"2343"},{message:"test",id:"2343"}]
        }
    },
    Mutation: {
        createMessage: (_,{input})=>{
            // console.log("args",ags)
            let id = crypto.randomBytes(10).toString("hex")
            console.log('id', id)
            localData[id] = {id,...input.message}
            return {id,...input}
        }
    }
}

module.exports = resolver
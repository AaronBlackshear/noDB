//arr variable === is my start my to-do list
//?Can I name my (server controller ) as uppercase? What would that influence if I did?

var todoList = [
                {id: 0, text: "brush teeth" , list: "Morning"}, 
                {id: 1, text: "walk dog" , list: "Night"},
                {id: 2, text: "Eat" , list: "Anytime"}
];
let newId = 3



module.exports = {
    //this exports to the (index.js)  server? or front end?
    //from todocontrol to the server/index and then to the front end
    getList: (req,res) => {
        res.status(200).json(todoList)
    },
    

    newItem(req, res){
        const { text, list } = req.body;
        let id = newId
        todoList.push({ id, text, list });
        newId++;
        res.status(200).json({ id, text, list });
      },


    editItem(req,res) {

        console.log(req.body)
        console.log(req.params)
        const id = req.params.id;
        const { text } = req.body
        for(let i=0; i<todoList.length;i++){
            if(+id === todoList[i].id){
                todoList[i].text = req.body.text;
            }
        }
        return res.status(200).json( todoList )
    },


    deleteItem(req,res) {
        // console.log("delete")
        const id = req.params.id;

        //go through to do list
        //find the index of the todo in TODOLIST with the same id as the param ( where the ids match )
        //use the index found to splice out a specific todo
        //send back the entire to do list

        //Higher order function that will do the same thing as the vanilla JS version found below...
        // todoList = todoList.filter(currentElement => currentElement.id !== +req.params.id)
        // res.status(200).json( todoList)
        for(let i= todoList.length -1; i>=0 ; i--){
            // console.log(id, todoList[i].id)
            if(+id === todoList[i].id){
                // console.log("todo found")
                todoList.splice(i,1);
                return res.status(200).json( todoList );
            }

        }
        res.status(200).json( todoList )
    },

}

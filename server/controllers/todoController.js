//arr variable === is my start my to-do list
//?Can I name my (server controller ) as uppercase? What would that influence if I did?

var todoList = [
                {text: "" , list:""}, 
                {text: "" , list:""},
                {text: "" , list:""}
];

module.exports = {
    //this exports to the (index.js)  server? or front end?
    //from todocontrol to the server/index and then to the front end
    getList: (req,res) => {
        res.status(200).json(todoList)
    },
    
    newItem: (req, res) => {
        const { text, list } = req.body;
            let url = `https://api/newItem${newId}/`;
console.log(req.body)
        todoList.push({ url, text, list });
        newId++;
        res.status(200).json(item);
      },





    editItem: (req,res) => {
        
    },


    deleteItem: (req,res) => {

    },

}
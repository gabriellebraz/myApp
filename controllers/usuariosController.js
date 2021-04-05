const usuarioController ={
    index:(req, res)=>{
        return res.send('estou exibindo essa mensagem atraves do controller')
    }
}
module.exports = usuarioController;
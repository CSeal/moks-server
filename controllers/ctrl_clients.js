const BaseController = require('../core/baseController')
const ClientsCtrl = new BaseController();

ClientsCtrl.get('/clients/', (req, res, next) => {
  const clients = ClientsCtrl.clients_tb;
  const resp = [];
  for( let key in clients){
    resp.push(clients[key]);
  }
  res.send(resp)
});

ClientsCtrl.get('/clients/:email', (req, res, next) => {
  const clients = ClientsCtrl.clients_tb;
  const { email }  = req.params;
  if(!clients[email]) {
    const {client_not_found} = ClientCtrl.errors_msg_obj;
    return res.send(client_not_found);
  }
  res.send(clients[email]);
});

ClientsCtrl.post('/clients/', (req, res, next) => {
  const {client_doesnt_have_an_id} = ClientsCtrl.errors_msg_obj;
  res.send(client_doesnt_have_an_id);
});

ClientsCtrl.post('/clients/:email', (req, res, next) => {
  const clients = ClientsCtrl.clients_tb;
  const { email }  = req.params;
  const { body } = req;
  const {
    client_id_allready_exists,
  } = ClientCtrl.errors_msg_obj;

  if(clients[email]) {
    return res.send(client_id_allready_exists);
  }
  const newClient = Object.assign({}, body, {email});
  const errors = ClientsCtrl.getTestValidation(newClient);

  if(errors){
    return res.send(errors);
  };

  clients[email] = newClient;
  res.send(clients[email]);
});

ClientsCtrl.put('/clients/', (req, res, next) => {
  const {client_doesnt_have_an_id} = ClientsCtrl.errors_msg_obj;
  res.send(client_doesnt_have_an_id);
});

ClientsCtrl.put('/clients/:email', (req, res, next) => {
  const clients = ClientsCtrl.clients_tb;
  const { email }  = req.params;
  const { client_id_doesnt_exists } = ClientsCtrl.errors_msg_obj;
  const { body } = req;

  if(!clients[email]) {
    return res.send(client_id_doesnt_exists);
  }
  const updateClient = Object.assign({}, clients[email], body, {email})
  const errors = ClientsCtrl.getTestValidation(updateClient);

  if(errors){
    return res.send(errors);
  };

  clients[email] = updateClient;
  res.send(clients[email]);
})

ClientsCtrl.delete('/clients/', (req, res, next) => {
  const {client_doesnt_have_an_id} = ClientsCtrl.errors_msg_obj;
  res.send(client_doesnt_have_an_id);
});

ClientsCtrl.delete('/clients/:email', (req, res, next) => {
  const clients = ClientsCtrl.clients_tb;
  const { email}  = req.params;
  const { client_id_doesnt_exists } = ClientsCtrl.errors_msg_obj;

  if(!clients [email]) {
    return res.send(client_id_doesnt_exists);
  }

  delete clients[email];
  res.send({delete_client: email});
});

module.exports = ClientsCtrl;
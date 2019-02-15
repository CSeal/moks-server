const BaseController = require('../core/baseController')
const MonufacturesCtrl = new BaseController();

MonufacturesCtrl.get('/monufactures/', (req, res, next) => {
  const monufactures = MonufacturesCtrl.monufactures_tb;
  const resp = [];
  for( let key in monufactures){
    resp.push(monufactures[key]);
  }
  res.send(resp)
});

MonufacturesCtrl.get('/monufactures/:id', (req, res, next) => {
  const monufactures = MonufacturesCtrl.monufactures_tb;
  const{id} = req.params;
  const currentMonufactureData = monufactures[id];
  if(!currentMonufactureData){
    const {manufacture_id_is_not_exist} = MonufacturesCtrl.errors_msg_obj;
    return res.send(manufacture_id_is_not_exist);
  }
  res.send(currentMonufactureData);
});

MonufacturesCtrl.post('/monufactures/', (req, res, next) => {
  const {manufacture_id_dont_send} = MonufacturesCtrl.errors_msg_obj;
  res.send(manufacture_id_dont_send);
});

MonufacturesCtrl.post('/monufactures/:id', (req, res, next) => {
  const monufactures = MonufacturesCtrl.monufactures_tb;
  const{id} = req.params;
  if(monufactures[id]){
    const {manufacture_id_allready_exists} = MonufacturesCtrl.errors_msg_obj;
    return res.send(manufacture_id_allready_exists);
  }
  const { body } = req;
  const newBody = Object.assign({}, body, {id});
  const err = MonufacturesCtrl.getTestValidation(newBody);
  if(err){
    return res.send(err);
  }
  monufactures[id] = newBody;
  res.send(monufactures[id]);

})
MonufacturesCtrl.put('/monufactures/', (req, res, next) => {
  const {manufacture_id_dont_send} = MonufacturesCtrl.errors_msg_obj;
  res.send(manufacture_id_dont_send);
});

MonufacturesCtrl.put('/monufactures/:id', (req, res, next) => {
  const monufactures = MonufacturesCtrl.monufactures_tb;
  const {id} = req.params;
  const currentMonufactureData = monufactures[id];
  if(!currentMonufactureData){
    const {manufacture_id_is_not_exist} = MonufacturesCtrl.errors_msg_obj;
    return res.send(manufacture_id_is_not_exist);
  }
  const { body } = req;
  const newBody = Object.assign({}, body, {id});
  const err = MonufacturesCtrl.getTestValidation(newBody);
  if(err){
    return res.send(err);
  }
  monufactures[id] = Object.assign({}, currentMonufactureData, newBody);
  res.send(monufactures[id]);
});

MonufacturesCtrl.delete('/monufactures/', (req, res, next) => {
  const {manufacture_id_dont_send} = MonufacturesCtrl.errors_msg_obj;
  res.send(manufacture_id_dont_send);
})

MonufacturesCtrl.delete('/monufactures/:id', (req, res, next) => {
  const monufactures = MonufacturesCtrl.monufactures_tb;
  const {id} = req.params;
  if (!monufactures[id]) {
    const {manufacture_id_is_not_exist} = MonufacturesCtrl.errors_msg_obj;
    return res.send(manufacture_id_is_not_exist);
  }
  delete monufactures[id];
  res.send({delete_id: id});
})

module.exports = MonufacturesCtrl;
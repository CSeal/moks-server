const BaseController = require('../core/baseController')
const QueryElemenCtrl = new BaseController('/api/query-elements/');

QueryElemenCtrl.get('/order-type/', (req, res, next) => {
  const { order_type } = QueryElemenCtrl.query_elements_tb;
  const resp = [];
  for( let key in order_type){
    resp.push(order_type[key]);
  }
  res.send(resp)
});

QueryElemenCtrl.get('/order-type/:id', (req, res, next) => {
  const { order_type } = QueryElemenCtrl.query_elements_tb;
  const { id } = req.params;
  const currentOrderType = order_type[id];
  if(!currentOrderType) {
    const { order_type_not_found } = QueryElemenCtrl.errors_msg_obj;
    return res.send(order_type_not_found);
  }
  res.send(currentOrderType)
});

QueryElemenCtrl.get('/order-status/', (req, res, next) => {
  const { order_status } = QueryElemenCtrl.query_elements_tb;
  const resp = [];
  for( let key in order_status){
    resp.push(order_status[key]);
  }
  res.send(resp)
});

QueryElemenCtrl.get('/order-status/:id', (req, res, next) => {
  const { order_status } = QueryElemenCtrl.query_elements_tb;
  const { id } = req.params;
  const currentOrderStatus = order_status[id];
  if(!currentOrderStatus) {
    const { order_status_not_found } = QueryElemenCtrl.errors_msg_obj;
    return res.send(order_status_not_found);
  }
  res.send(currentOrderStatus)
});
module.exports = QueryElemenCtrl;
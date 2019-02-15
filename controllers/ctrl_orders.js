const BaseController = require('../core/baseController')
const OrdersCtrl = new BaseController();

OrdersCtrl.get('/orders/', (req, res, next) => {
  const orders = OrdersCtrl.orders_tb;
  const resp = [];
  for( let key in orders){
    resp.push(orders[key]);
  }
  res.send(resp)
});

OrdersCtrl.get('/orders/:id', (req, res, next) => {
  const orders = OrdersCtrl.orders_tb;
  const { id }  = req.params;
  const curr_order = orders[id]
  if(!curr_order) {
    const {order_not_found} = OrdersCtrl.errors_msg_obj;
    return res.send(order_not_found);
  }
  res.send(curr_order);
});

OrdersCtrl.post('/orders/', (req, res, next) => {
  const {
    order_doesnt_have_an_id
  } = OrdersCtrl.errors_msg_obj;
  res.send(order_doesnt_have_an_id);
})

OrdersCtrl.post('/orders/:id', (req, res, next) => {
  const { id }  = req.params;
  const { body } = req;
  const {
    order_id_allready_exists,
  } = OrdersCtrl.errors_msg_obj;
  const orders = OrdersCtrl.orders_tb;

  if(orders[id]) {
    return res.send(order_id_allready_exists);
  }
  const newOrder = Object.assign({}, body, {id});
  const errors = MonufacturesCtrl.getTestValidation(newOrder);

  if(errors){
    return res.send(errors);
  };

  orders[id] = newOrder;
  res.send(orders[id]);
})

OrdersCtrl.put('/orders/', (req, res, next) => {
  const {
    order_doesnt_have_an_id
  } = OrdersCtrl.errors_msg_obj;
  res.send(order_doesnt_have_an_id);
})

OrdersCtrl.put('/orders/:id', (req, res, next) => {
  const { id }  = req.params;
  const { order_id_doesnt_exists } = OrdersCtrl.errors_msg_obj;
  const { body } = req;

  if(!body[id]) {
    return res.send(order_id_doesnt_exists);
  }
  const updateOrder = Object.assign({}, orders[id], body, {id})
  const errors = MonufacturesCtrl.getTestValidation(updateOrder);

  if(errors){
    return res.send(errors);
  };

  orders[id] = updateOrder;
  res.send(orders[id]);
})

OrdersCtrl.delete('/orders/', (req, res, next) => {
  const {
    order_doesnt_have_an_id
  } = OrdersCtrl.errors_msg_obj;
  res.send(order_doesnt_have_an_id);
})

OrdersCtrl.delete('/orders/:id', (req, res, next) => {
  const { id }  = req.params;
  const { order_id_doesnt_exists } = OrdersCtrl.errors_msg_obj;

  if(!orders) {
    return res.send(order_id_doesnt_exists);
  }

  delete orders[id];
  res.send({delete_id: id});
});

module.exports = OrdersCtrl;
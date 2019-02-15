const orders = {
  'io-3456': {
    id: 'io-3456',
    //user_id: 'sales_id@email.com',
    client_id: 'masha@gmail.com',
    products: [{
      title: 'Шариковые ручки'
    }],
    manufacture_id: 1,
    order_type: 1,
    order_date_start: 12334232414,
    order_date_end: 18545387872,
    desc: 'My description for this order',
    status_id: 1
  }
}

const users = {
  'sales_id@email.com': {
    email: 'sales_id@email.com',
    first_name: 'Svetik',
    last_name: 'Shevchenko',
    patronumick: '',
    password: 'hugfhudshgisdfhjgijig',
  }
}

const clients = {
  'masha@gmail.com': {
    email: 'masha@gmail.com',
    first_name: 'Masha',
    last_name: 'Sumkina',
    patronumick: 'Petrovna',
  }
}

const  monufactures = {
  '1': {
    id: '1',
    title: 'Acme Corp.'
  }
}

const query_elements = {
  order_type: {
    '1': {
      id: '1',
      title: 'Опт',
      prefix: 'o'
    },
    '2': {
      id: '2',
      title: 'Розница',
      prefix: 'r'
    }
  },
  order_status: {
    '1': {
      id: '1',
      title: 'Done'
    },
    '2': {
      id: '2',
      title: 'Confirm'
    },
    '3': {
      id: '3',
      title: 'Expired'
    },
    '4': {
      id: '4',
      title: 'Failed'
    },
  }
}

module.exports = {
  orders,
  users,
  clients,
  monufactures,
  query_elements
}
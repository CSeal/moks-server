const { emailRegExp,
        validIdRegExp,
        orderIdRegExp,
        validIdTest,
        validDataTest
      } = require('../helpers/validator_helpers');

function getValidRules(errors_msg_const){
  return {
    id: (val) =>{
      if(!orderIdRegExp.test(val)){
        const { order_id_is_not_valid } = errors_msg_const;
        return order_id_is_not_valid;
      }
    },
    user_id: (val) => {
      if (!emailRegExp.test(val)) {
        const { user_id_is_not_valid } = errors_msg_const;
        return user_id_is_not_valid;
      };
    },
    client_id: (val) => {
      if (!emailRegExp.test(val)) {
        const { client_id_is_not_valid } = errors_msg_const;
        return client_id_is_not_valid;
      };
    },
    products: (val) =>{
      const {
        products_dont_send,
        products_is_not_an_array_of_objects,
        product_doesnt_have_require_field_title,
      } = errors_msg_const;
      if(!val) {
        return products_dont_send;
      }
      if(!Array.isArray(val) || !val.length){
        return products_is_not_an_array_of_objects;
      }
      if(val.some(({title}) => title === '')){
        return product_doesnt_have_require_field_title
      }
    },
    manufacture_id: (val) => {
      const {
        manufacture_id_dont_send,
        manufacture_id_is_not_valid,
      }= errors_msg_const;

      if(val === undefined){
        return manufacture_id_dont_send;
      }
      if(!validIdTest(val, validIdRegExp)){
        return manufacture_id_is_not_valid
      }
    },
    order_type: (val) => {
      const {
        order_type_doesnt_send,
        order_type_is_not_valid,
      }= errors_msg_const;

      if(val === undefined){
        return order_type_doesnt_send;
      }
      if(!validIdTest(val, validIdRegExp)){
        return order_type_is_not_valid
      }
    },
    order_date_start: (val) => {
      const {
        start_data_doesnt_send,
        start_data_is_not_valid,
      }= errors_msg_const;

      if(val === undefined){
        return start_data_doesnt_send;
      }
      if(!validDataTest(val, validIdRegExp)){
        return start_data_is_not_valid;
      }
    },
    order_date_end: (val) => {
      const {
        end_data_doesnt_send,
        end_data_is_not_valid,
      }= errors_msg_const;

      if(val === undefined){
        return end_data_doesnt_send;
      }
      if(!validDataTest(val, validIdRegExp)){
        return end_data_is_not_valid;
      }
    },
    status_id: (val) => {
      const {
        order_status_id_doesnt_send,
        order_status_id_is_not_valid,
      }= errors_msg_const;

      if(val === undefined){
        return order_status_id_doesnt_send;
      }
      if(!validIdTest(val, validIdRegExp)){
        order_status_id_is_not_valid
      }
    }
  }
}

module.exports = getValidRules;
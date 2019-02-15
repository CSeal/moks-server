const { emailRegExp } = require('../helpers/validator_helpers');
function getValidRules(errors_msg_const) {
  return {
    email: (val) => {
      if(!emailRegExp.test(val)){
        const { user_id_is_not_valid } = errors_msg_const;
        return user_id_is_not_valid;
      };
    },
    first_name: (val) => {
      if(!val){
        const { first_name_is_not_defined } = errors_msg_const;
        return first_name_is_not_defined;
      }
    },
    last_name: (val) => {
      if(!val){
        const { last_name_is_not_defined } = errors_msg_const;
        return last_name_is_not_defined;
      }
    },
    password: (val) => {
      if(!val){
        const { password_is_not_defined } = errors_msg_const;
        return password_is_not_defined;
      }
    }
  };
}


module.exports = getValidRules;
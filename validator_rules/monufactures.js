const { validIdRegExp, validIdTest } = require('../helpers/validator_helpers');

function getValidRules(errors_msg_const) {
  return {
    id: (val) => {
      const {
        manufacture_id_dont_send,
        manufacture_id_is_not_valid,
      } = errors_msg_const;
      if(!validIdTest(val, validIdRegExp)){
        return manufacture_id_is_not_valid
      }
    },
    title: (val) => {
      if(!val){
        const { first_name_is_not_defined } = errors_msg_const;
        return first_name_is_not_defined;
      }
    },
  };
}

module.exports = getValidRules;
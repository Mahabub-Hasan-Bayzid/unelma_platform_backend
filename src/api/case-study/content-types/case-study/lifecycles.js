import { v4 as uuidv4 } from "uuid";

export default {
  beforeCreate(event) {
    const { data } = event.params;
    if (!data.case_id) {
      data.case_id = `case_${uuidv4().slice(0, 8)}`; // shorter unique ID
    }
  },
};

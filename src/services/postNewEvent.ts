import axios from "axios";
import { serverAddress } from "../utils/serverAddress";

export const postNewEvent = async (data: string) => {
  await axios({
    method: "post",
    url: `${serverAddress}/add`,
    data: data,
  })
    .then(() => {
      console.log("Event successfully added!");
    })
    .catch((err) => {
      console.log(err);
    });
};

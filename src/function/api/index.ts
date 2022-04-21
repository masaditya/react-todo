import { AxiosResponse } from "axios";
import { HTTPClientNonAuth } from "../../base/http";

export const GetTodo = (): Promise<AxiosResponse> => {
    return HTTPClientNonAuth().get('/hanabyan/todo/1.0.0/to-do-list');
  };
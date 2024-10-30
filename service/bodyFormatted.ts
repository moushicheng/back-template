type body = {
  code: number;
  msg?: string;
  data?: any;
};
export const SUCCESS_CODE = 200;
export const formatBody = ({ code, msg, data }: body) => {
  return {
    code,
    msg,
    data,
    success: code === SUCCESS_CODE ? true : false,
  };
};

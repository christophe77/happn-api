type DislikeResponse = {
  status: number;
  data: {
    message: string;
  };
  success: boolean;
  error_code: number;
};
export default DislikeResponse;

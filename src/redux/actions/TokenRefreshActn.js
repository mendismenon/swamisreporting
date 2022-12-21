export const TOKEN_REFRESH = "TOKEN_REFRESH";
export const TOKEN_REFRESH_SUCCESS = "TOKEN_REFRESH_SUCCESS";
export const TOKEN_REFRESH_FAILURE = "TOKEN_REFRESH_FAILURE";

export const tokenRefreshActn = (pdata) => {
  return {
    type: TOKEN_REFRESH,
    data: {
      token_uri: "https://oauth2.googleapis.com/token",
      refresh_token:
        "1//043HfLLrkQg1sCgYIARAAGAQSNwF-L9IrfaU7F5zClsz2s7gIiTIgDjaxFhaw5i7KeS2RrYghBhDi8b8Nr4aVuuoGsgMg-xfQpas",
    },
  };
};

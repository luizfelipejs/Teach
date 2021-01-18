
export interface request {
  body: any;
}

export interface response {
  json: (body?) => any;
  status: (code?) => any;
}
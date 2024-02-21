import { BaseQueryApi } from "@reduxjs/toolkit/query";
import React from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TError = {
  data: { success: boolean; message: string; stack: string };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: { limit: number; page: number; total: number; totalPage: number };
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParams = {
  name: string;
  value: boolean | React.Key | string;
};

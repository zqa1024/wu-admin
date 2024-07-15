// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/user */
export async function userControllerCreate(options?: { [key: string]: any }) {
  return request<any>('/api/user', {
    method: 'POST',
    ...(options || {}),
  });
}

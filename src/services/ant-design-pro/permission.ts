// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/permission/create */
export async function createRole(body: API.CreatePermissionDto, options?: { [key: string]: any }) {
  return request<any>('/api/permission/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/permission/getList */
export async function getList(options?: { [key: string]: any }) {
  return request<any>('/api/permission/getList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/permission/update */
export async function updateRole(body: API.UpdatePermissionDto, options?: { [key: string]: any }) {
  return request<any>('/api/permission/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

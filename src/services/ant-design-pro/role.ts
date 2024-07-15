// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/role/create */
export async function roleControllerCreateRole(
  body: API.CreateRoleDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/role/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/role/update */
export async function roleControllerUpdateRole(
  body: API.UpdateRoleDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/role/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

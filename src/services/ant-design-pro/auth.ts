// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/auth/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{ code?: number; msg?: string; data?: API.UserDto }>('/api/auth/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/auth/local/sign */
export async function signLocal(body: API.AuthDto, options?: { [key: string]: any }) {
  return request<any>('/api/auth/local/sign', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/auth/local/signup */
export async function signupLocal(body: API.CreateUserDto, options?: { [key: string]: any }) {
  return request<{ code?: number; msg?: string; data?: API.TokensDto }>('/api/auth/local/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/auth/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<API.Promise>('/api/auth/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/auth/refresh */
export async function refreshTokens(options?: { [key: string]: any }) {
  return request<any>('/api/auth/refresh', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/auth/users */
export async function getUsers(options?: { [key: string]: any }) {
  return request<{ code?: number; msg?: string; data?: API.ListUserDto[] }>('/api/auth/users', {
    method: 'GET',
    ...(options || {}),
  });
}

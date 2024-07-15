// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/auth/currentUser */
export async function authControllerCurrentUser(options?: { [key: string]: any }) {
  return request<any>('/api/auth/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/auth/local/signin */
export async function authControllerSinginLocal(
  body: API.AuthDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/auth/local/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/auth/local/signup */
export async function authControllerSignupLocal(
  body: API.AuthDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/auth/local/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/auth/logout */
export async function authControllerLouout(options?: { [key: string]: any }) {
  return request<any>('/api/auth/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/auth/refresh */
export async function authControllerRefreshTokens(options?: { [key: string]: any }) {
  return request<any>('/api/auth/refresh', {
    method: 'POST',
    ...(options || {}),
  });
}

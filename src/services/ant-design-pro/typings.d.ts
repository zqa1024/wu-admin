declare namespace API {
  type AuthDto = {
    email?: string;
    password: string;
    username: string;
  };

  type CreatePermissionDto = {};

  type CreateRoleDto = {};

  type CreateUserDto = {
    email: string;
    password: string;
    username: string;
  };

  type ListUserDto = {
    id: number;
    createdAt?: string;
    updatedAt?: string;
    email: string;
    username: string;
    avatar?: string;
    status: number;
    roles?: RoleDto[];
  };

  type Promise = {};

  type RoleDto = {
    id?: number;
    /** 角色名称 */
    name: string;
    /** 角色状态, 0: 禁用, 1: 启用 */
    status?: number;
    /** 角色别名 */
    label: string;
    /** 排序 */
    order?: number;
    /** 描述 */
    desc?: string;
    /** 权限列表 */
    permissions?: any[][];
    /** 用户列表 */
    user?: any[][];
  };

  type TokensDto = {
    /** 访问令牌 */
    access_token: string;
    /** 刷新令牌 */
    refresh_token: string;
  };

  type UpdatePermissionDto = {};

  type UpdateRoleDto = {};

  type UserDto = {
    id: number;
    createdAt?: string;
    updatedAt?: string;
    email: string;
    password: string;
    hash?: string;
    hashedRt?: string;
    username: string;
    avatar?: string;
    status: number;
    roles?: RoleDto[];
  };
}

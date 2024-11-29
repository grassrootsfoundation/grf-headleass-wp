export interface AppController {
  
}

export interface AppModule {
  
}

export interface AppService {
  
}

export interface AuthController {
  
}

export interface AuthGuard {
  
}

export interface AuthModule {
  
}

export interface AuthResolver {
  
}

export interface AuthService {
  userService: any;
}

export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  emailVerificationToken?: string;
  emailVerificationExpires?: Date;
  isEmailVerified: boolean;
  alternateUsernames?: string[];
  additionalEmails?: string[];
  avatarUrl?: string;
  bio?: string;
  socialLinks?: { [key: string]: string; };
}

export interface UserDocument {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "editor" | "viewer";
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  emailVerificationToken?: string;
  emailVerificationExpires?: Date;
  isEmailVerified: boolean;
  alternateUsernames?: string[];
  additionalEmails?: string[];
  avatarUrl?: string;
  bio?: string;
  socialLinks?: { [key: string]: string; };
  comparePassword: (password: string) => Promise<boolean>;
}

export interface ContentController {
  
}

export interface Content {
  title: string;
  slug: string;
  fields: Record<string, any>;
  published: boolean;
  publishedAt: Date;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ContentGateway {
  server: import("/Users/morgan.segura/Desktop/Personal/__business/framework-core/backend/node_modules/.pnpm/socket.io@4.8.1/node_modules/socket.io/dist/index").Server<import("/Users/morgan.segura/Desktop/Personal/__business/framework-core/backend/node_modules/.pnpm/socket.io@4.8.1/node_modules/socket.io/dist/typed-events").DefaultEventsMap, import("/Users/morgan.segura/Desktop/Personal/__business/framework-core/backend/node_modules/.pnpm/socket.io@4.8.1/node_modules/socket.io/dist/typed-events").DefaultEventsMap, import("/Users/morgan.segura/Desktop/Personal/__business/framework-core/backend/node_modules/.pnpm/socket.io@4.8.1/node_modules/socket.io/dist/typed-events").DefaultEventsMap, any>;
}

export interface ContentModule {
  
}

export interface ContentResolver {
  
}

export interface ContentService {
  
}

export interface MailModule {
  
}

export interface MailService {
  transporter: import("/Users/morgan.segura/Desktop/Personal/__business/framework-core/backend/node_modules/.pnpm/@types+nodemailer@6.4.17/node_modules/@types/nodemailer/index").Transporter<any, import("/Users/morgan.segura/Desktop/Personal/__business/framework-core/backend/node_modules/.pnpm/@types+nodemailer@6.4.17/node_modules/@types/nodemailer/index").TransportOptions>;
}

export interface GlobalExceptionFilter {
  
}

export interface UserController {
  
}

export interface UserService {
  
}

export interface AuthResponse {
  token: string;
  user: Omit<import("/Users/morgan.segura/Desktop/Personal/__business/framework-core/backend/src/auth/user.entity").User, "password">;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterUserDto {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RequestPasswordResetDto {
  email: string;
}

export interface ResetPasswordDto {
  token: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface UpdatePasswordDto {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ValidateResetTokenDto {
  token: string;
}

export interface JwtAuthGuard {
  
}

export interface JwtStrategy {
  
}

export interface RolesGuard {
  
}

export interface MatchPasswordsValidator {
  
}

export interface CategoryModule {
  
}

export interface CategoryResolver {
  
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryDocument {
  _id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryService {
  
}

export interface PostsController {
  
}

export interface PostsModule {
  
}

export interface PostsResolver {
  
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  tags?: string[];
  content: string;
  components: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostDocument {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostsService {
  
}

export interface TagModule {
  
}

export interface TagResolver {
  
}

export interface Tag {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TagDocument {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TagService {
  
}

export interface HttpExceptionFilter {
  
}

export interface CreateContentDto {
  title: string;
  body: string;
}

export interface UpdateContentDto {
  title?: string;
  slug?: string;
  body?: string;
  summary?: string;
}

export interface SharedTypesController {
  
}

export interface SharedModule {
  
}

export interface UpdateProfileDto {
  name?: string;
  alternateUsernames?: string[];
  additionalEmails?: string[];
  bio?: string;
  avatarUrl?: string;
  socialLinks?: { [key: string]: string; };
}

export interface UpdateRoleDto {
  name?: string;
  alternateUsernames?: string[];
  additionalEmails?: string[];
  bio?: string;
  avatarUrl?: string;
  socialLinks?: { [key: string]: string; };
  role: "admin" | "editor" | "viewer";
}

export interface CreateCategoryDto {
  name: string;
  slug: string;
}

export interface UpdateCategoryDto {
  name?: string;
  slug?: string;
}

export interface CreatePostDto {
  title: string;
  content: string;
  author: string;
}

export interface UpdatePostDto {
  title?: string;
  content?: string;
}

export interface CreateTagDto {
  name: string;
}

export interface UpdateTagDto {
  name?: string;
}
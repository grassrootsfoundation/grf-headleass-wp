// Extracted from auth/user.entity.ts
export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
  passwordResetToken?: string;
  passwordResetExpires?: string;
  emailVerificationToken?: string;
  emailVerificationExpires?: string;
  isEmailVerified: boolean;
  alternateUsernames?: string[];
  additionalEmails?: string[];
  avatarUrl?: string;
  bio?: string;
  socialLinks?: { [key: string]: string };
}

// Extracted from auth/user.entity.ts
export interface UserDocument {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'editor' | 'viewer';
  passwordResetToken?: string;
  passwordResetExpires?: string;
  emailVerificationToken?: string;
  emailVerificationExpires?: string;
  isEmailVerified: boolean;
  alternateUsernames?: string[];
  additionalEmails?: string[];
  avatarUrl?: string;
  bio?: string;
  socialLinks?: { [key: string]: string };
}

// Extracted from categories/category.schema.ts
export interface Category {
  _id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

// Extracted from categories/category.schema.ts
export interface CategoryDocument {
  _id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

// Extracted from content/content.schema.ts
export interface Block {
  id: string;
  type: string;
  data?: ContentOutput;
  order: number;
}

// Extracted from content/content.schema.ts
export interface Content {
  _id: string;
  slug: string;
  title: string;
  blocks: Block[];
  author: string;
  associatedType: 'post' | 'page';
  associatedId: string;
  published: boolean;
  publishedAt: string;
  permissions: string[];
  createdAt: string;
  updatedAt: string;
}

// Extracted from pages/pages.schema.ts
export interface Page {
  _id: string;
  title: string;
  slug: string;
  tags?: string[];
  categories?: string[];
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

// Extracted from posts/posts.schema.ts
export interface Post {
  _id: string;
  title: string;
  slug: string;
  tags?: string[];
  categories?: string[];
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

// Extracted from tags/tag.schema.ts
export interface Tag {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// Extracted from tags/tag.schema.ts
export interface TagDocument {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// Extracted from content/dto/content-input-output.dto.ts
export interface ContentInput {
  text?: string;
  level?: number;
  items?: ArrayLike<unknown> | Iterable<unknown>;
}

// Extracted from content/dto/content-input-output.dto.ts
export interface ContentOutput {
  text?: string;
  level?: number;
  items?: ArrayLike<unknown> | Iterable<unknown>;
}

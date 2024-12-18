/* eslint-disable no-unused-vars */
import { User } from '$src/types/api-types';

declare namespace App {
  interface locals {
    user: User | null;
  }

  interface PageData {
    user?: User | null;
  }

  interface Platform {
    env: Record<string, string>;
    context: Record<string, unknown>;
  }
}

import type { Post, UserDocument } from '$src/types/api-types';

export function canEditOrDeletePost(user: UserDocument | null, post: Post | null) {
	if (!user || !post) {
		return false;
	}

	// Admins and editors have full access
	if (['admin', 'editor'].includes(user.role)) {
		return true;
	}

	// Authors can edit or delete only their own posts
	return user._id === post.author;
}

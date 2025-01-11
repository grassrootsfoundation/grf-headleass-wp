export interface NestedListItem {
  content: string; // The text content of the list item
  items?: NestedListItem[]; // Sub-items (optional)
}

export interface ListBlockData {
  items: NestedListItem[]; // Top-level list items
}

export interface Block {
  id: string;
  type: 'header' | 'paragraph' | 'list' | string; // Extend with other block types as needed
  data: {
    text?: string; // For 'header' or 'paragraph' types
    items?: ListBlockData['items']; // For 'list' types
    [key: string]: unknown; // Catch-all for other block data
    level?: string;
    style?: 'ordered' | 'unordered';
  };
}

export interface Content {
  id: string;
  blocks: Block[];
}

export interface Emoji {
  slug: string;
  character: string;
  unicodeName: string;
  codePoint: string;
  group: string;
  subGroup: string;
}
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}

export type LoadingState = "idle" | "loading" | "success" | "error";

import type { FilterCompletedOption, SortByOption } from "./types";

export const FILTER_COMPLETED_OPTIONS: FilterCompletedOption[] = [
  { label: "Completed", value: "completed" },
  { label: "Incompleted", value: "incompleted" },
  { label: "All", value: "all" },
];

export const SORT_BY_OPTIONS: SortByOption[] = [
  {
    value: "createdAtDesc",
    label: "New to old",
  },
  {
    value: "createdAtAsc",
    label: "Old to new",
  },
  { value: "titleAsc", label: "A to Z" },
  { value: "titleDesc", label: "Z to A" },
];

export const SHOW_ON_PAGE_OPTIONS = [5, 10, 20];

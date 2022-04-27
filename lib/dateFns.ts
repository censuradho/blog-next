import { format } from "date-fns";

export function formatPostDate (date: string) {
  return format(new Date(date), "MMM dd', ' yyyy")
}
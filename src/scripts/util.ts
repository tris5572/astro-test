export function href(s: string): string {
  if (s.charAt(0) === "/") {
    s = s.substring(1);
  }
  return `${import.meta.env.BASE_URL}${s}`;
}

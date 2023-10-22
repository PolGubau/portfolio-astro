export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function formatString(str: string): string {
  const result = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return capitalize(result.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").trim());
}

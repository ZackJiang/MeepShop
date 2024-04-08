const regex: RegExp = /^\d+px$/;
const urlRegex: RegExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

export function isValidCssLength(input: string): boolean {
  return regex.test(input);
}

export function isValidUrl(url: string): boolean {
  return urlRegex.test(url);
}

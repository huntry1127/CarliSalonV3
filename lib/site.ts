export const SITE_URL = "https://carlispecial.com";
export const BOOKING_URL = "https://carlihyde.glossgenius.com/services";
export const SITE_NAME = "Carli Special";
export const SERVICE_AREA = "Wheaton, IL 60189";
export const DEFAULT_DESCRIPTION =
  "Carli Special is a personalized hair studio in Wheaton, IL, specializing in balayage, lived-in color, highlights, grey coverage, styling, and beautiful, customized hair.";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

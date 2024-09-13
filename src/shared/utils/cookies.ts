export function setCookie(name: string, value: string, days = 7): void {
  let expires = "";
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  expires = "; expires=" + date.toUTCString();

  document.cookie = `${name}=${encodeURIComponent(value) || ""}${expires}; path=/`;
}

export function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const cookiesArray = document.cookie.split(";");
  for (let cookie of cookiesArray) {
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
    }
  }
  return null;
}

export function deleteCookie(name: string): void {
  setCookie(name, "", -1);
}

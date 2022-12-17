const basePath = `${process.env.PUBLIC_URL}/images`;

const AppImagesPaths = {
  slidebg1: "slide-bg-2.png",
  excel: "excel.png",
  cloud: "cloud.png",
  e: "e.png",
  azure: "azure.png",
  office: "office.png",
  v: "v.png",
  word: "word.png",
  microsoftRound: "round-microsoft.png",
  roundAward: "round-award.png",
  roundAzure: "round-azure.png",
  windows: "windows.png",
  about: "about.png",
  cta1: "cta1.png",
  cta2: "cta2.png",
  logo: "logo.png",
  logoBg: "logoBg.png",
  microsoft: "microsoft.png",
  loginPopupImage: "login-pop-up-img.png",
  img404: "img-404.png",
}

export const AppImages = new Proxy(AppImagesPaths, {
  get(target, property, receiver) {
    return `${basePath}/${(AppImagesPaths as Record<string, string>)[property as string]}`;
  }
});
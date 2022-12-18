export const getImageProxy = (basePath: string, AppImagesPaths: Record<string, string>) => new Proxy(AppImagesPaths, {
  get(target, property, receiver) {
    return `${basePath}/${AppImagesPaths[property as string]}`;
  }
});
export abstract class Page {
  private static url: string;
  public static getUrl() {
    return this.url;
  }

  public static getRootElement() {}
}

const cheerio = require("cheerio");
const axios = require("axios");
const valid_url = require("valid-url");
const WebsiteData = {
  get: async (link) => {
    const url = link;
    const baseUrl = link.split("/")[2];
    const protocol = link.split("/")[0];
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const title =
      $("title").text() || $('meta[property="og:title"]').attr("content");
    const description =
      $("meta[name=description]").attr("content") ||
      $("meta[property='og:description']").attr("content");
    let iconUrl = $("link[rel='icon']").attr("href");
    if (iconUrl && iconUrl[0] !== "/") {
      iconUrl = "/" + iconUrl;
    }
    const icon = valid_url.is_uri(iconUrl)
      ? iconUrl
      : iconUrl
      ? protocol + "//" + baseUrl + iconUrl
      : protocol + "//" + baseUrl + "/favicon.ico";
    const imageUrl = $("meta[property='og:image']").attr("content");
    const image = valid_url.is_uri(imageUrl)
      ? imageUrl
      : protocol + "//" + baseUrl + imageUrl;
    return { url, title, description, icon, image };
  },
};
module.exports = WebsiteData;

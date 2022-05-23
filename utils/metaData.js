const cheerio = require("cheerio");
const axios = require("axios");
const valid_url = require("valid-url");

const WebsiteData = {
  get: async (link) => {
    const url = new URL(link);
    const baseUrl = url.origin;
    const protocol = url.protocol;
    const { data } = await axios.get(link);
    const $ = cheerio.load(data);
    const title =
      $("title").text() || $('meta[property="og:title"]').attr("content");
    const description =
      $("meta[name=description]").attr("content") ||
      $("meta[property='og:description']").attr("content");
    let iconUrl = $("link[rel='icon']").attr("href");
    const icon = valid_url.is_uri(iconUrl)
      ? iconUrl
      : iconUrl && new URL(iconUrl, url.href).href;

    const imageUrl = $("meta[property='og:image']").attr("content");
    const image = valid_url.is_uri(imageUrl)
      ? imageUrl
      : imageUrl !== undefined
      ? new URL(imageUrl, url.href).href
      : "";
    return { url: link, title, description, icon, image };
  },
};

module.exports = WebsiteData;

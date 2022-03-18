const cheerio = require("cheerio");
const axios = require("axios");
const valid_url = require("valid-url");
const WebsiteData = {
  get: async (link) => {
    const url = link;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const title =
      $("title").text() || $('meta[property="og:title"]').attr("content");
    const description =
      $("meta[name=description]").attr("content") ||
      $("meta[property='og:description']").attr("content");
    const iconUrl = $("link[rel='icon']").attr("href");
    const classicUrl = url + "favicon.ico";
    const icon = valid_url.is_uri(iconUrl)
      ? iconUrl
      : iconUrl
      ? url + iconUrl
      : classicUrl;
    const imageUrl = $("meta[property='og:image']").attr("content");
    const image = valid_url.is_uri(imageUrl) ? imageUrl : url + imageUrl;
    return { url, title, description, icon, image };
  },
};
module.exports = WebsiteData;

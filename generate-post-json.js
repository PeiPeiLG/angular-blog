const fs = require("fs");
const path = require("path");
const fm = require("front-matter");

// 定義文章資料夾的路徑
const contentDir = path.join(__dirname, "public", "post");
const outputFile = path.join(__dirname, "public", "post", "post.json");

// 定義要輸出的結果結構
const articles = [];

// 讀取 `content` 目錄下的所有資料夾
const folders = fs.readdirSync(contentDir);

folders.forEach((folder) => {
  const folderPath = path.join(contentDir, folder);
  const filePath = path.join(folderPath, "index.md");

  // 檢查該資料夾中是否存在 `index.md` 檔案
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf-8");

    // 使用 `front-matter` 解析 YAML front matter
    const parsed = fm(content);

    // 將文章資訊加入列表
    articles.push({
      id: folder, // 文章 ID，可能用於路由等
      title: parsed.attributes.title || "No Title",
      cover: parsed.attributes.cover || "Uncategorized",
      category: parsed.attributes.category || "Uncategorized",
      date: parsed.attributes.date || "Unknown Date",
      tags: parsed.attributes.tags || [], // 解析 `tags` 陣列
      content: parsed.body.replace(/\.\.\//g, ''), // 文章的 Markdown 內容
    });
  } else {
    console.warn(`跳過資料夾：${folder}（找不到 index.md）`);
  }
});

// 將文章資訊導出為 JSON 檔案
fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2), "utf-8");

console.log("文章分類資料已成功生成到:", outputFile);

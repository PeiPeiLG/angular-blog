const fs = require('fs');
const path = require('path');

// 取得命令行參數，作為文章資料夾名稱
const args = process.argv.slice(2);
const articleName = args[0] || 'new-post'; // 預設資料夾名

// 定義文章主資料夾和 'file' 子資料夾的路徑
const articleDir = path.join(__dirname,'public', 'post', articleName);
const fileDir = path.join(articleDir, 'file');
const filePath = path.join(articleDir, 'index.md');

// 定義 YAML front matter ' 789 '
const template = `---
title: "Your Title Here"
category: "Uncategorized"
tags:
  - "tag1"
date: "${new Date().toISOString().split('T')[0]}"
---

# 你的內容開始於此
`;

// 檢查資料夾是否已經存在
if (fs.existsSync(articleDir)) {
  console.error('文章資料夾已經存在:', articleDir);
  process.exit(1);
}

// 建立主資料夾和 'file' 子資料夾
fs.mkdirSync(articleDir, { recursive: true });
fs.mkdirSync(fileDir);

// 寫入 `index.md` 檔案
fs.writeFileSync(filePath, template, 'utf-8');

console.log(`已建立新文章資料夾: ${articleDir}`);
console.log(`已建立新 Markdown 檔案: ${filePath}`);

# CYPD Module

## I. Quick Start

* 利用 npx 安裝開發環境

```
yarn create-react-app my-app --template typescript
yarn add typescript @types/node @types/react @types/react-dom @types/jest
npm install --save https://github.com/ChoFrank/cypd.git
# my-app可自由替換成專案名稱

也可以使用
npm install --save ChoFrank/cypd

如要安裝其他分之支
npm install --save ChoFrank/cypd#ct_style
```

* 利用 npm/yarn 測試/編譯您的 javascript project

```
npm run start 
# run your project through the entry point (usually index.js/index.tsx/index.jsx)
npm run build 
# compile your project to ES5 javascript code
```

## II. Upgrade Library

```
npm update cypd
```

Update to speific version
```
npm install --save https://github.com/ChoFrank/cypd.git#${commit}
# commit fillin version number
```

## III. Detail of Component & Example

* [Bar 拉霸及進度條](https://github.com/ChoFrank/cypd/tree/master/src/bar)
* [Book 書](https://github.com/ChoFrank/cypd/tree/master/src/story)
* [Button 按鍵](https://github.com/ChoFrank/cypd/tree/master/src/button)
* [Checkbox & SwitchButton 勾選方塊及二元切換鍵](https://github.com/ChoFrank/cypd/tree/master/src/checkbox)
* [Datetime 時間與日期選擇器](https://github.com/ChoFrank/cypd/tree/master/src/datetime)
* [Dropdown 下拉內容](https://github.com/ChoFrank/cypd/tree/master/src/dropdown)
* [Empty & Cone 提示區塊](https://github.com/ChoFrank/cypd/tree/master/src/empty)
* [Flat 平面規劃](https://github.com/ChoFrank/cypd/tree/master/src/flat)
* [Form 表單](https://github.com/ChoFrank/cypd/tree/master/src/form)
* [Href 超連結](https://github.com/ChoFrank/cypd/tree/master/src/href)
* [Icon 圖標](https://github.com/ChoFrank/cypd/tree/master/src/icon)
* [Input 文字輸入框](https://github.com/ChoFrank/cypd/tree/master/src/input)
* [Layout 布局](https://github.com/ChoFrank/cypd/tree/master/src/layout)
* [List 列表](https://github.com/ChoFrank/cypd/tree/master/src/list)
* [Modal 對話視窗](https://github.com/ChoFrank/cypd/tree/master/src/modal)
* [Notify 通知](https://github.com/ChoFrank/cypd/tree/master/src/notify)
* [RadioGroup 單選群組](https://github.com/ChoFrank/cypd/tree/master/src/radio)
* [Select & Option 選擇框與選項](https://github.com/ChoFrank/cypd/tree/master/src/select)
* [Spin 讀取](https://github.com/ChoFrank/cypd/tree/master/src/spin)
* [Table 表格](https://github.com/ChoFrank/cypd/tree/master/src/table)
* [Tooltip 滑鼠停留提示](https://github.com/ChoFrank/cypd/tree/master/src/tooltip)
* [Tree 樹](https://github.com/ChoFrank/cypd/tree/master/src/tree)
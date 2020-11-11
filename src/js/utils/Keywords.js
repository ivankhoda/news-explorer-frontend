export default class Keyword {
  constructor(keywords) {
    this._keywords = keywords;
    this._keywordsArray = [];
  }

  setKeywords(keyword) {
    this._keywordsArray.push(keyword);
  }

  getTopKeywords() {
    const obj = this._keywordsArray.reduce(
      (o, key) => {
        o[key] = (o[key]) ? o[key] + 1 : 1;
        return o;
      },
      {},
    );
    const sorted = Object.keys(obj).map(
      (key) => ({ key, occurs: obj[key] }),
    )
      .sort(
        (a, b) => ((b.occurs - a.occurs === 0)
          ? a.key - b.key
          : b.occurs - a.occurs),
      );
    if (sorted.length > 3) {
      return `По ключевым словам <b>${sorted[0].key}</b>, <b>${sorted[1].key}</b>, и ${sorted.length - 2} другим`;
    }
    if (sorted.length === 4) {
      return `По ключевым словам <b>${sorted[0].key}</b>, <b>${sorted[1].key}</b>, <b>${sorted[2].key}</b> и ${sorted.length - 3} другому`;
    }
    if (sorted.length === 3) {
      return `По ключевым словам <b>${sorted[0].key}</b>, <b>${sorted[1].key}</b>, <b>${sorted[2].key}</b>`;
    }
    if (sorted.length === 2) {
      return `По ключевым словам <b>${sorted[0].key}</b>, <b>${sorted[1].key}</b>`;
    }
    if (sorted.length === 1) {
      return `По ключевому слову <b>${sorted[0].key}</b>`;
    }
  }
}

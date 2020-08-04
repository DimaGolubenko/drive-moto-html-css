class Tabs {
  constructor(container, selectors = {}, callback = () => {}) {
    this.callback = callback;
    this.selectors = {
      tabsItem: selectors.tabsItem || 'tabs__item',
      tabsContentItem: selectors.tabsContentItem || 'tabs-content__item',
      selected: selectors.selected || 'selected'
    }
    this.$tabs = document.querySelectorAll(`${container} .${this.selectors.tabsItem}`);
    this.$contents = document.querySelectorAll(`${container} .${this.selectors.tabsContentItem}`);
  }

  init() {
    this.$tabs.forEach((tab) => tab.addEventListener("click", this.handleTabClick.bind(this)));
  }

  handleTabClick(e) {
    this.addSelected(e);
    this.callback();
  }

  _getIndexOfSelectedEl(nodeList, selectedEl) {
    return Array.from(nodeList).indexOf(selectedEl);
  }

  addSelected(e) {
    e.preventDefault();
    this.clearAllSelected();

    const index = this._getIndexOfSelectedEl(this.$tabs, e.target);
    e.target.classList.add(`${this.selectors.tabsItem}--${this.selectors.selected}`);
    this.$contents[index].classList.add(`${this.selectors.tabsContentItem}--${this.selectors.selected}`);
  }

  clearAllSelected() {
    this.$tabs.forEach((tab) => tab.classList.remove(`${this.selectors.tabsItem}--${this.selectors.selected}`));
    this.$contents.forEach((content) => content.classList.remove(`${this.selectors.tabsContentItem}--${this.selectors.selected}`));
  }
}

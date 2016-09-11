import controller from './header.controller';
import template from './header.html';
import './header.styl';

class Header {

  constructor($window) {
    this.restrict = 'E';
    this.bindings = {
      search: '='
    };
    this.template = template;
    this.controller = controller;
    this.controllerAs = '$ctrl';
    this.bindToController = true;

    this.$window = $window;
    this.link = this.link.bind(this);
  }

  link(scope, element, attribute) {
    this._searchElement(element).blur(this._onSearchBlur(element));
    this._searchElement(element).focus(this._onSearchFocus(element));
    this._searchButton(element).click(this._onSearchButtonClick(element));
    $(this.$window).resize(this._onWindowResive(element));
  }

  _width(element) {
    return $(element).width() - 80;
  }

  _searchButton(element) {
    return $(element).find('span.search-button');
  }

  _searchElement(element) {
    return $(element).find('input[name="search"]');
  }

  _onWindowResive(element) {
    return () => this._searchElement(element).blur();
  }

  _onSearchButtonClick(element) {
    return () => {
      if (this._searchElement(element).width() === 0) {
        this._searchElement(element).focus()
      }
    };
  }

  _onSearchFocus(element) {
    return () => this._searchElement(element).animate({ width: `+=${this._width(element)}`, padding: '6px 12px' });
  }

  _onSearchBlur(element) {
    return () => this._searchElement(element).animate({ width: `-=${this._width(element)}`, padding: 0 });
  }
}

export default Header;

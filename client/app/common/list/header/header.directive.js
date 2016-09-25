import controller from './header.controller';
import template from './header.html';
import './header.styl';

class Header {

  constructor($window, $timeout) {
    this.restrict = 'E';
    this.scope = {
      search: '=',
      searchChanged: '<'
    };
    this.template = template;
    this.controller = controller;
    this.controllerAs = '$ctrl';
    this.bindToController = true;

    this.$window = $window;
    this.$timeout = $timeout;
    this._searchButton = null;
    this._searchInput = null;
    this.link = this.link.bind(this);
  }

  link(scope, element) {
    this._initElements(element);
    let searchButtonClick = this._onSearchButtonClick(scope, element);
    let searchFocus = this._onSearchFocus(scope, element);
    let windowResize = this._onWindowResize(scope, element);
    let bodyClick = this._onBodyClick(scope, element);
    this._bindHandlers(searchButtonClick, searchFocus, windowResize, bodyClick, element);
  }

  _initElements(element) {
    this._searchButton = $(element).find('span.search-button');
    this._searchInput = $(element).find('input[name="search"]');
  }

  _onSearchButtonClick(scope, element) {
    return () => {
      if (scope.$ctrl.search && this._isSearchInputVisible) {
        scope.$ctrl.search = null;
        scope.$ctrl.searchChanged({ search: null });
      }

      if (this._isSearchInputVisible) {
        this._hideSearchInput(element, scope)
      } else {
        this._showSearchInput(element, scope)
      }
    };
  }

  _onSearchFocus(scope, element) {
    return () => this._showSearchInput(element, scope);
  }

  _onWindowResize(scope, element) {
    return () => {
      if (this.searchInput.width() > 0) {
        this._hideSearchInput(element, scope)
      }
    };
  }

  _onBodyClick(scope, element) {
    return (e) => {
      if (this._shouldHideSearchInput(e)) {
        this._hideSearchInput(element, scope);
      }
    };
  }

  _shouldHideSearchInput(e) {
    return !this._isSearchButton(e.target) && !this._isChildOfSearchButton(e.target) && !this._isSearchInput(e.target);
  }

  _bindHandlers(searchButtonClick, searchFocus, windowResize, bodyClick, element) {
    this.searchButton.click(searchButtonClick);
    this.searchInput.focus(searchFocus);
    $(this.$window).resize(windowResize);
    $('body').click(bodyClick);
    element.on('$destroy', () => this._unbindHandlers(searchButtonClick, searchFocus, windowResize, bodyClick));
  }

  _unbindHandlers(searchButtonClick, searchFocus, windowResize, bodyClick) {
    this.searchButton.unbind('click', searchButtonClick);
    this.searchInput.unbind('focus', searchFocus);
    $(this.$window).unbind('resize', windowResize);
    $('body').unbind('click', bodyClick);
  }

  _showSearchInput(element, scope) {
    if (!this._isSearchInputVisible) {
      this.searchInput.animate({width: `+=${this._width(element)}`, padding: '6px 12px'}, () => {
        this.$timeout(() => scope.$ctrl.searchVisible = true);
        this.searchInput.focus();
      });
    }
  }

  _hideSearchInput(element, scope) {
    if (this._isSearchInputVisible) {
      this.searchInput.animate({ width: `-=${this._width(element)}`, padding: 0 }, () => {
        this.$timeout(() => scope.$ctrl.searchVisible = false);
        this.searchInput.blur();
      });
    }
  }

  _isSearchButton(target) {
    return $(target).is(this.searchButton)
  }

  _isChildOfSearchButton(target) {
    return this.searchButton.has(target).length > 0;
  }

  _isSearchInput(target) {
    return $(target).is(this.searchInput);
  }

  _width(element) {
    return $(element).width() - 80;
  }

  get _isSearchInputVisible() {
    return this.searchInput.width() > 0;
  }

  get searchButton() {
    return this._searchButton;
  }

  get searchInput() {
    return this._searchInput;
  }
}

export default Header;

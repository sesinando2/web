import controller from './header.controller';
import template from './header.html';
import './header.styl';

class Header {

  constructor($window, $timeout) {
    this.restrict = 'E';
    this.scope = {
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
    this.initElements(element);
    let searchButtonClick = this.onSearchButtonClick(scope, element);
    let searchFocus = this.onSearchFocus(scope, element);
    let windowResize = this.onWindowResize(element);
    let bodyClick = this.onBodyClick(scope, element);
    this.bindHandlers(searchButtonClick, searchFocus, windowResize, bodyClick, element);
  }

  bindHandlers(searchButtonClick, searchFocus, windowResize, bodyClick, element) {
    this.searchButton.click(searchButtonClick);
    this.searchInput.focus(searchFocus);
    $(this.$window).resize(windowResize);
    $('body').click(bodyClick);
    element.on('$destroy', () => {
      this.searchButton.unbind('click', searchButtonClick);
      this.searchInput.unbind('focus', searchFocus);
      $(this.$window).unbind('resize', windowResize);
      $('body').unbind('click', bodyClick);
    });
  }

  initElements(element) {
    this._searchButton = $(element).find('span.search-button');
    this._searchInput = $(element).find('input[name="search"]');
  }

  isSearchButton(target) {
    return $(target).is(this.searchButton)
  }

  isChildOfSearchButton(target) {
    return this.searchButton.has(target).length > 0;
  }

  width(element) {
    return $(element).width() - 80;
  }

  onWindowResize() {
    return () => {
      if (this.searchInput.width() > 0) {
        this.searchInput.blur();
      }
    };
  }

  onSearchButtonClick(scope, element) {
    return () => {
      if (scope.$ctrl.search && this.isSearchInputVisible) {
        scope.$ctrl.search = null;
        scope.$ctrl.searchChanged({ search: null });
      }

      if (this.isSearchInputVisible) {
        this.hideSearchInput(element, scope)
      } else {
        this.showSearchInput(element, scope)
      }
    };
  }

  onSearchFocus(scope, element) {
    return () => this.showSearchInput(element, scope);
  }

  onBodyClick(scope, element) {
    return (e) => {
      if (!this.isSearchButton(e.target) && !this.isChildOfSearchButton(e.target)) {
        this.hideSearchInput(element, scope);
      }
    };
  }

  showSearchInput(element, scope) {
    if (!this.isSearchInputVisible) {
      this.searchInput.animate({width: `+=${this.width(element)}`, padding: '6px 12px'}, () => {
        this.$timeout(() => scope.$ctrl.searchVisible = true);
        this.searchInput.focus();
      });
    }
  }

  hideSearchInput(element, scope) {
    if (this.isSearchInputVisible) {
      this.searchInput.animate({ width: `-=${this.width(element)}`, padding: 0 }, () => {
        this.$timeout(() => scope.$ctrl.searchVisible = false);
        this.searchInput.blur();
      });
    }
  }

  get isSearchInputVisible() {
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

import MenuItemModule from './menuItem'
import MenuItemController from './menuItem.controller';
import MenuItemComponent from './menuItem.component';
import MenuItemTemplate from './menuItem.html';

describe('MenuItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MenuItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MenuItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MenuItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MenuItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MenuItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MenuItemController);
      });
  });
});

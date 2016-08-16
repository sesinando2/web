import GroupModule from './group'
import GroupController from './group.controller';
import GroupComponent from './group.component';
import GroupTemplate from './group.html';

describe('Group', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GroupModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GroupController();
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
      expect(GroupTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GroupComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GroupTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GroupController);
      });
  });
});

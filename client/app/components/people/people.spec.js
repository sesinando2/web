import PeopleModule from './people'
import PeopleController from './people.controller';
import PeopleComponent from './people.component';
import PeopleTemplate from './people.html';

describe('People', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PeopleModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PeopleController();
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
      expect(PeopleTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PeopleComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PeopleTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PeopleController);
      });
  });
});

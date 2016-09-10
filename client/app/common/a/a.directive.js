class A {

  constructor() {
    this.restrict = 'E';
  }

  link(scope, elem, attrs) {
    if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
      elem.on('click', function(e) {
        e.preventDefault();
      });
    }
  }
}

export default A;

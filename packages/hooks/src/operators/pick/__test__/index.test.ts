import { of } from 'rxjs';
import { pick } from '../index';

describe("pick operator",()=>{
  it('should be true', function(done) {
    const observable = of({hello:'world'});
    observable.pipe(
      pick('hello')
    ).subscribe(x=>{
      expect(x).toBe('world');
      done();
    })
  });
})

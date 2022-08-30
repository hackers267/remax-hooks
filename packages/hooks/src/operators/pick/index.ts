import { map, pipe } from 'rxjs';

export function pick(key:string){
  return pipe(
    map(x=>x[key])
  )
}

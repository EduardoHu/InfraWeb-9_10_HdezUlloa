import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterListT'
})
export class FilterListTPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultPost = [];
    console.log(args.toString());

    for (const post of value) {
      if (
        post.calidad.toLowerCase().indexOf(args[0].toLowerCase()) > -1
        // && post.lugar.toLowerCase().indexOf(args[1].toLowerCase()) > -1
        // && post.luz.toLowerCase().indexOf(args[2].toLowerCase()) > -1
        // && post.agua.toLowerCase().indexOf(args[3].toLowerCase()) > -1
        && post.personasMax <= args[4]
        // && post.reservadaPor.toLowerCase().indexOf(args[0].toLowerCase()) > -1
        // && post.reservada != "No"
      ) {

        resultPost.push(post);
      };
    };
    return resultPost;
  }

}

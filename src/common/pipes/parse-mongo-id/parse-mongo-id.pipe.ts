import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {

  transform(value: string, metadata: ArgumentMetadata) {
    
    console.log( {value, metadata} );

    // Validamos que se un id de mongo con la función que trae mongoose.
    if( !isValidObjectId( value ) ) {
      throw new BadRequestException( `${ value } is not a valid MongoID` );
    }
    
    return value;
  }

}

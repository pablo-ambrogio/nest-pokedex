import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema() // Schema base de datos, lo extramos de nest
export class Pokemon extends Document { //Extendemos de Document para que esto sea un documento

    @Prop({
        unique: true,   // name es unico
        index: true     // indice es unico
    })
    name:   string;
    @Prop({
        unique: true,
        index: true  
    })
    no:     number;

}

// Lo exportamos
export const PokemonSchema = SchemaFactory.createForClass( Pokemon );
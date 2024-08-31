import {DBPokemon} from "../db/types";
import {POKIAPI_URL} from "../consts";
import axios from "axios";
import sharp from "sharp";

export async function fetchPokemon(pokeCache: Map<string, DBPokemon>): Promise<any> {
    const maxPokemon = 50
    try {
        for (let i = 1; i <= maxPokemon; i++) {
            const response = await axios.get(`${POKIAPI_URL}/${i}`)
            const pokemon = response.data
            pokeCache.set(pokemon.id.toString(), {
                id: pokemon.id.toString(),
                name: pokemon.name,
                imgURL: pokemon.sprites.front_default
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export async function createSilhouette(imageURL: string): Promise<Buffer> {
    const response = await axios.get(imageURL, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');

    return await sharp(buffer)
        .grayscale()
        .modulate({
            brightness: 0.0,
            saturation: 0,
        })
        .toBuffer();
}

// Generate a random number between min and max excluding the numbers in the exclude array
export function generateRandomExcluding(min: number, max: number, exclude: number[]): number {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return exclude.includes(num) ? generateRandomExcluding(min, max, exclude) : num;
}

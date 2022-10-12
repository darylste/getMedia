export interface ICollection {
	artistName: string;
	artworkUrl100: string;
	collectionName: string;
	previewUrl: string;
	primaryGenreName: string;
	releaseDate: string;
	trackId: number;
}

export interface ICartItem {
	name: string;
	price: number;
	quantity: number;
}

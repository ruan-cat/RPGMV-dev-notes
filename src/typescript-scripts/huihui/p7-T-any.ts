interface HasId {
	id: string;
}

interface HasIdObject extends HasId {
	[keyname: string]: unknown;
}

type GetInfoParams<T> = {
	record: T;
	targetKey: string & keyof T;
	absoluteUrl: string;
	listTitle: string;
};

function getInfo<T extends HasIdObject>(params: GetInfoParams<T>): string {
	const { record, targetKey, absoluteUrl, listTitle } = params;
	return `${absoluteUrl}/list/${listTitle}/Attachments/${record.id}`;
}

type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

type Test = Prettify<HasIdObject>;

const localStorageKeyName = 'recordList';
const model = {
	clone(data: RecordItem[] | RecordItem) {
		return JSON.parse(JSON.stringify(data));
	},
	fetch() {
		const x: RecordItem[] = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
		return x;
	},
	save(data: RecordItem[]) {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
	}
};
export default model;
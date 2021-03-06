import createID from '@/lib/createId';

const localStorageKeyName = 'tagList';
type Tag = {
	id: string;
	name: string;
}
type TagListModel = {
	data: Tag[];
	fetch: () => Tag[];
	new: (name: string) => 'success' | 'duplicated';//string//可以用字符串表示意思//如果字符串少可以直接用单词写返回值
	update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
	remove: (id: string) => boolean;
	save: () => void;//void表示没有返回值
}
const tagListModel: TagListModel = {
	data: [],
	fetch() {
		this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
		return this.data;
	},
	new(name: string) {
		const names = this.data.map(item => item.name);
		if (names.indexOf(name) >= 0) {return 'duplicated';}
		const id = createID().toString();
		this.data.push({id, name: name});
		this.save();
		return 'success';
	},
	update(id: string, name: string) {
		const idList = this.data.map(item => item.id);
		if (idList.indexOf(id) >= 0) {
			const names = this.data.map(item => item.name);
			if (names.indexOf(name) >= 0) {
				return 'duplicated';
			} else {
				const tag = this.data.filter(item => item.id === id)[0];
				tag.name = name;
				tag.id = name;
				this.save();
				return 'success';
			}
		} else {
			return 'not found';
		}
	},
	remove(id: string) {
		let index = -1;
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i].id === id) {
				index = i;
				break;
			}
		}
		console.log('index');
		console.log(index);
		this.data.splice(index, 1);
		this.save();
		return true;
	},
	save() {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
	}
};
export default tagListModel;
const localStorageKeyName = 'tagList';
type Tag={
	id: string;
	name: string;
}
type TagListModel = {
	data: Tag[];
	fetch: () => Tag[];
	new: (name: string) => 'success'|'duplicated';//string//可以用字符串表示意思//如果字符串少可以直接用单词写返回值
	save: () => void;//void表示没有返回值
}
const tagListModel: TagListModel = {
	data: [],
	fetch() {
		this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
		return this.data;
	},
	new(name: string) {
		const names=this.data.map(item=>item.name)
		if (names.indexOf(name) >= 0) {return 'duplicated';}
		this.data.push({id:name,name:name});
		this.save();
		return 'success';
	},
	save() {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
	}
};
export default tagListModel;
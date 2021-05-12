const localStorageKeyName = 'tagList';
type TagListModel = {
	data: string[];
	fetch: () => string[];
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
		if (this.data.indexOf(name) >= 0) {return 'duplicated';}
		this.data.push(name);
		this.save();
		return 'success';
	},
	save() {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
	}
};
export default tagListModel;
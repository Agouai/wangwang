let id: number = parseInt(window.localStorage.getItem('_idMax')||'0')||0;

function createID() {
	id++;
	return id;
}
export default createID;
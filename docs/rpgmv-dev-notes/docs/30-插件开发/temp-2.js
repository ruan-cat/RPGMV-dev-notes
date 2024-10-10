class LittleGirl {
	constructor() {
		this.defaultLines = "嘤嘤嘤";
	}
	coquetry() {
		console.log(" 发出了： " + this.defaultLines + " 的声音。");
	}
}

class LittleAlice extends LittleGirl {
	constructor() {
		super();
		this.defaultLines = "不可以涩涩哦~";
	}
}

const ruanCat = new LittleAlice();
ruanCat.coquetry();

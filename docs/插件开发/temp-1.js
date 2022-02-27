/**
 * 小萝莉类
 * @class LittleGirl
 * @classdesc 小萝莉类，作为小女孩的基础类
 * @description
 * 类的命名规范，我们总是默认让类的命名遵循大驼峰命名法
 */
function LittleGirl() {
  this.defaultLines = "嘤嘤嘤";
};

/**
 * 撒娇方法
 * @memberof LittleGirl
 * @description 小萝莉对象撒娇
 */
LittleGirl.prototype.coquetry = function () {
  console.log(" 发出了： " + this.defaultLines + " 的声音。");
};





/**
 * 小爱丽丝类
 * @class LittleAlice
 * @classdesc 小爱丽丝类，特指钻头的小爱丽丝。
 */
function LittleAlice() {
  LittleGirl.call(this);
  this.defaultLines = "不可以涩涩哦~";
};

// 用Object.create方法实现原型链的继承
LittleAlice.prototype = Object.create(LittleGirl.prototype);
// 指定小爱丽丝类的构造器为小萝莉
LittleAlice.prototype.constructor = LittleGirl;

/**
 * 阮喵喵 属于一种小爱丽丝
 * @description
 * 用new关键字执行构造函数 实例化对象
 */
var ruanCat = new LittleAlice();
// 阮喵喵开始撒娇
ruanCat.coquetry();
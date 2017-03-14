//这不是一个React组件，就是一个纯DOM组件

class Carousel{
	constructor($bigbox){
		this.$bigbox = $bigbox;

		this.$leftbtn = this.$bigbox.find(".pdb_leftBtn");
		this.$rightbtn = this.$bigbox.find(".pdb_rightBtn");
		this.$ul = this.$bigbox.find("ul");
		this.$li = this.$ul.find("li");

		var self = this;
		this.amount = this.$li.length;

		var r = 0; //已经加载好的图片数量
		this.$bigbox.find("img").load(function(){
			r++;
			if(r == self.amount){
				self.init();
			}
		});

	}
	init(){
		//信号量
		this.idx = 0;
		//每个小图的宽度数组
		this.perwarr = [];
		
		this.zongkuangdu = 0;
		var self = this;
		this.$li.each(function(){
			self.perwarr.push($(this).outerWidth(true));
			self.zongkuangdu += parseInt($(this).outerWidth(true));
		});

		//如果图片总宽度超过了盒子宽度，此时才显示按钮。并且复制火车。
		if(this.zongkuangdu > $(".pdb .inner").innerWidth()){
			//克隆一份
			this.$li.clone().appendTo(this.$ul);
			//绑定监听
			this.bindEvent();
		}else{
			this.$leftbtn.hide();
			this.$rightbtn.hide();
		}
	}

	bindEvent(){
		var self = this;
		//右边按钮的事件
		this.$rightbtn.click(function(){
			if(self.$ul.is(":animated")){
				return;
			}
			self.$ul.animate({"left" : "-=" + self.perwarr[self.idx] + "px"},200,function(){
				self.idx++;
				if(self.idx >= self.amount){
					 
					self.idx = 0;
					self.$ul.css("left",0);
				}
			});
		});


		//右边按钮的事件
		this.$leftbtn.click(function(){
			if(self.$ul.is(":animated")){
				return;
			}

			self.idx--;
			if(self.idx < 0){
				self.$ul.css("left",-self.zongkuangdu);
				self.idx = self.amount - 1;
			}

			self.$ul.animate({"left" : "+=" + self.perwarr[self.idx] + "px"},200);
		});
	}
}

export default Carousel;
//reducer
export default (state,action) => {
	if(state === undefined){
		//这里就是默认的Redux Action
		return {
			"alltypes" : []		,		//从数据库上得到的所有类型的名字和URL
			"showLogin" : false  ,		//是否显示登录框 
			"showRegist" : false, 		//是否显示注册框
			"login" : false      , 		//登录与否
			"allbriefs" : [],			//所有文章的缩略，里面有图片数组
			"showContentBox" : false,	//是否显示内容框
			"tiezi" : {}			,	//帖子内容
			"cid" : NaN,				//帖子编号
			"page" : 0 ,				//滚动到底部加载更多，当前滚动到第几个页面了
			"lock" : true  ,             //锁,
			"dongxi" : ""	,			//此时的内容
			"allUser":[]
		};
	}

	if(action.type === "SHEZHIDONGXI"){
		return {
			...state,
			"dongxi" : action.dongxi
		}
	}

	if(action.type === "GETALLTYPE"){
		//这里改变state对象
		return{
			...state,
			"alltypes" : action.alltypes 
		}
	}

	if(action.type === "GETALLBIAOTI"){
		//这里改变state对象
		return{
			...state,
			"allbriefs" : state.allbriefs.concat(action.allbriefs)
		}
	}

	if(action.type === "SHOWLOGINBOX"){
		//这里改变state对象
		return{
			...state,
			"showLogin" : action.v
		}
	}

	if(action.type === "SHOWREGISTBOX"){
		//这里改变state对象
		return{
			...state,
			"showRegist" : action.v
		}
	}

	//注册成功
	if(action.type === "REGISTSUCCESS"){
		return {
			...state,
			"showRegist" : false
		}
	}

	//登录成功
	if(action.type === "LOGINSUCCESS"){
		return {
			...state,
			"showLogin" : false,
			"login" : true
		}
	}

	//检查是否已经登录了
	if(action.type === "CHECKLOGIN"){
		return {
			...state,
			"username" : action.username,
			"login" : action.login
		}
	}

	
	if(action.type === "FABIAO"){
		return {
			...state
		}
	}


	if(action.type === "GETTIEZI"){
		return {
			...state,
			"tiezi" : action.tiezi,
			"cid" : action.cid,
			"showContentBox" : true
		}
	}

	

	if(action.type === "GUANBICONTENT"){
		return {
			...state,
			 
			"showContentBox" : false
		}
	}


	if(action.type === "PAGEJIA"){
		return {
			...state,
			"page" : state.page + 1
		}
	}

	if(action.type === "SHEZHILOCK"){
		return {
			...state,
			"lock" : action.lock
		}
	}

	if(action.type === "FUYUAN"){
		return {
			...state,
			"lock" : true,
			"page" : 0,
			"allbriefs" : new Array() 
		}
	}
	//查询所有用户
	if(action.type === "GETALLUSER"){
		return {
			...state,
			"allUser":action.allUser
		}
	}


	return state;
}
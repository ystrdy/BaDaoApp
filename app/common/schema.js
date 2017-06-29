/**
 * create: 2017-6-22 17:17:21
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: realm数据库表结构
 */

// 搜索历史记录
const SearchHistorySchema = {
	name : 'SearchHistory',
	properties : {
		name : {
			type : 'string',
			indexed : true
		},
		createTime : 'date'
	}
};

const FavouriteBooksSchema = {
	name : 'FavouriteBooks',
	primaryKey : 'id',
	properties : {
		id : 'string',
		name : 'string',
		cover : 'string',
		updateAt : 'string',
		local : {
			type : 'bool',
			default : true
		}
	}
};

export default [SearchHistorySchema, FavouriteBooksSchema];
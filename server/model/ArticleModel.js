import query from '../utils/query'
import eacape from '../utils/eacape'
class ArticleModel {
    async getAllArticles(){
        return await query("SELECT * FROM ARTICLE ORDER BY createTime DESC")
    }
    async addArticle(){
        return await query("INSERT INTO ARTICLE SET title='新文章',tags='',createTime=NOW(),publishTime=NOW(),content=''")
    }
    async getOneArticle(id){
        return await query(`SELECT * FROM ARTICLE WHERE id=${id}`)
    }
    async updateArticle(id,{title,tags,content,isPublished}){
        return await query(eacape`UPDATE ARTICLE SET title=${title}, tags=${tags},content=${content} WHERE id=${id}`)
    }
    async deleteArticle(id){
        return await query(eacape`DELETE FROM ARTICLE WHERE id=${id}`)
    }
    async publishArticle(id){
        return await query(eacape`UPDATE ARTICLE SET publishTime=NOW(), isPublished=1 WHERE id=${id}`)
    }
    async getAllArticlesList(){
        return await query(eacape`SELECT * FROM ARTICLE WHERE isPublished=1 ORDER BY publishTime  DESC`)
    }
    async getOnecontent(id){
        return await query(eacape`SELECT * FROM ARTICLE  WHERE  id=${id}`)
    }
    async showPage(skip,pageSize) {
        return new Promise((resolve,reject)=>{
            // find({})方法是查找所有的数据;sort方法是使数据倒序,skip()是跳过skip条数据;limit方法是限制每页显示多少条数据
            ArticleModel.find({}).sort({'create_time':-1}).skip(skip).limit(pageSize).exec((err,doc)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(doc);
                }
            })
        })
    }
    async showNum () {
        return new Promise((resolve,reject)=>{
            // find({})方法是查找所有的数据;sort方法是使数据倒序,skip()是跳过skip条数据;limit方法是限制每页显示多少条数据
            ArticleModel.find({}).count().exec((err,doc)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(doc);
                }
            })
        })
    }
}
export default new ArticleModel()
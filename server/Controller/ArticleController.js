import Article from '../model/ArticleModel'
class ArticleController {
    async getArticles(ctx){
        ctx.body = await Article.getAllArticles()
    }
    async addArticle(ctx){
        const res = await Article.addArticle()
        ctx.body = res
    }
    async getOneArticle(ctx){
        const res = await Article.getOneArticle(ctx.params.id)
        ctx.body = res
    }
    async updateArticle(ctx){
        const id = ctx.params.id
        const res = await Article.updateArticle(id,ctx.request.body)
        ctx.body = res
    }
    async deleteArticle(ctx){
        const id = ctx.params.id
        const res = await Article.deleteArticle(id)
        ctx.body = res
    }
    async publishArticle(ctx){
        const id = ctx.params.id
        const res = await Article.publishArticle(id)
        ctx.body = res
    }
    async getArticlesList(ctx){
        ctx.body = await Article.getAllArticlesList()
    }
    async showPage(ctx){
        let page = parseInt(ctx.request.query.page);
        let pageSize = parseInt(ctx.request.query.pageSize);
        let skip = parseInt((page - 1) * pageSize);
        let doc = await ArticleModel.showPage(skip,pageSize);
        let nub = await ArticleModel.showNum();
        ctx.body = {
            show:doc,
            nub:nub
        }
    }
    async getContent(ctx){
        const id = ctx.params.id
        console.log(id)
        ctx.body = await Article.getOnecontent(id)
    }
}
export default new ArticleController()
'use strict'

const Post = use ('App/Models/cursos')

class CursoController {

    async store({ request, response}){

        const {curso, videos, canais, tags} = request.all();

        const post = await Post.create({curso, videos, canais, tags});

        return post;
    }

    async index({ request, response}){
        const posts = await Post.all();

        const post = await Post.create({curso, videos, canais, tags});

        return posts;

    }





}

module.exports = CursoController

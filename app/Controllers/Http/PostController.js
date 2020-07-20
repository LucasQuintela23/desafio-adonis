'use strict'


const Post = use('app/Models/Post');

class PostController {


    async store({ request, response}){

        const {titulo, texto} = request.all();

        const post = await Post.create({titulo, texto});

        return post;
    }

    async index({ request, response}){
        const posts = await Post.all();

        const post = await Post.create({titulo, texto});

        return posts;

    }

    async update({ request, response, params}){

        const post = await Post.create({titulo, texto});

        return post = await Post.find(params.id);

        if (!post){
          return response.status(404).send({message: "usuario não encontrado"})
        }

        post.titulo = titulo;
        post.texto = texto;

        await post.save();

        return post;
    }
    async destroy({response, params}){
        const post = await Post.create({titulo, texto});

        return post = await Post.find(params.id);

        if (!post){
          return response.status(404).send({message: "usuario não encontrado"})
        }

        await post.delete();
        return response.status(200).send({mensage: "Post deletado"})

    }

}

module.exports = PostController

import React from "react";

import user_pic from './images/user_pic_test.jpg'
import post_pic from './images/post_pic_test.jpeg'
import logo_pic from './images/logo.png'

export class card{
    private autorPic:string
    private postPic:string
    private postText:string
    
    constructor(autorPic?: string, postPic?:string,postText?: string)   {
        if(autorPic !== undefined){
            this.autorPic = autorPic;
        }
        else{
            this.autorPic = '';
        }
        if(postPic !==undefined){
            this.postPic = postPic;
        }
        else{
            this.postPic = '';
        }
        if(postText !== undefined){
            this.postText = postText;
        }
        else{
            this.postText = this.test1();
        }

    }

    private test1() {
        let text = '';
        this.getAPIRequest('https://geek-jokes.sameerkumar.website/api?format=json','joke')
            .then((dataText) => {
                //console.log(dataText);
                text = dataText;
                //return null;
            }).then(()=>{this.postText=text})
            .catch((err)=>{
                return '';
            });
            
        return text; 
    }
    private DataParser(data:any,tag:string):string{
        // console.log(data);
        // console.log(data[tag]);
       //let jsonson = JSON.parse(data);
        //console.log(jsonson);
        // console.log(JSON.parse(data));
        //console.log('obj ='+ jsonson+'\nobj[tag] = '+ jsonson[tag]);
        if(data[tag] == undefined){return ''};
        return data[tag];
    }

    private async getAPIRequest(url:string,tag:string):Promise<string>{
        let text:string ='';
        try {
            const response = await fetch(url);
            // если запрос был успешный
            if (response.status === 200) {
                // какой метод объекта Response вызывать зависит от того,
                // в каком формате сервер прислал ответ
                // это можно проверить в заголовках ответа
                // response.headers.get('Content-Type')
                const data = await response.json();
                //console.log(data);
                text = this.DataParser(data,tag);
            } else {
                throw new Error('Something went wrong');
            }
        } catch(err) {
            //handleError(err);
        }
        return text;
    }
    // getPostText(){
    //     return this.postText;
    // }

    renderCard(){
        return(
            <div className='card'>
                <div className='user_info'>
                    <img className='user_pic' src={user_pic}></img>
                    <a href='#' className='user_name link'>Имя_пользователь</a>
                </div>
                <div>
                    <div className='tag_block'>
                        <a href='#' className='tag link'>Тег1</a>
                        <a href='#' className='tag link'>Тег2</a>
                        <a href='#' className='tag link'>Тег3</a>
                    </div>
                    <p className='post_text'>{this.postText}</p>
                    <img className='post_pic' src={post_pic}></img>
                    <div className='post_info'>
                        <span className='publish_date'>18.Mar.2022 00:38</span>
                        <div className='rating_info'>
                            <span className='rating'>1.5</span>
                            <a href='#' className='plus link'>+</a>
                            <a href='#' className='minus link'>-</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
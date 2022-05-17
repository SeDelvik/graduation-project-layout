import React from "react";
import Rating from './rating'

/**
 * Принимает URL запрос и неопределенное количество ключей не менее одного к API и возвращает отформатированный текст. 
 * @param {string} url
 * @param {...string[]} keys
 * @returns {string} текст из json по переданным параметрам. Выыод каждого параметра разделен пробелом
 * 
*/
export function useCard(url:string,...keys:string[]){
    const [ans, setAns] = React.useState('');

  const getAnswer = async () => {
    let text = '';
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json();
        keys.forEach((elem)=>{
            try {
              text = text+' '+data[0][elem];
            } catch (error) {
                text = text+' '+data[elem];
            }
        })
    }
    
    setAns(text);
  };

  React.useEffect(() => {
    getAnswer();
  }, []);

  return ans;
}
/**
 * На основе нескольких запросов формирует почти рандомную карточку-пост
 * @returns {ReactElement} готовая карточка-элемент
 */
export default function Card(){
    const postText = useCard('https://geek-jokes.sameerkumar.website/api?format=json','joke');
    const postPic = useCard('https://random.dog/woof.json','url');
    const userName = useCard('https://api.randomdatatools.ru/?gender=unset&params=LastName,FirstName','FirstName','LastName');
    let numPic = Math.floor(Math.random()*1000);
    const userPic = useCard('https://picsum.photos/v2/list?page='+numPic+'&limit=1','download_url')
    const date = randomDate(new Date(2015,0,1),new Date());
    

    return(
        <div className='card'>
            <div className='user_info'>
                <img className='user_pic' src={userPic}></img>
                <a href='#' className='user_name link'>{userName}</a>
            </div>
            <div>
                <div className='tag_block'>
                    <a href='#' className='tag link'>Тег1</a>
                    <a href='#' className='tag link'>Тег2</a>
                    <a href='#' className='tag link'>Тег3</a>
                </div>
                <p className='post_text'>{postText}</p>
                <img className='post_pic' src={postPic}></img>
                <div className='post_info'>
                    <span className='publish_date'>{date}</span>
                    <Rating/>
                </div>
            </div>
        </div>
    );
}
/**
 * Генерирует рандомную дату между двумя переданными датами
 * @param {Date} start 
 * @param {Date} end 
 * @returns {String} Текст-дата в формате YYYY-MM-DD HH:mm:ss
 */
function randomDate(start:Date, end:Date) {
    let date = new Date(start.getTime() 
            + Math.random() * (end.getTime() - start.getTime()));
    return date.getFullYear() + '-'
    + ('0' + (date.getMonth() + 1)).slice(-2) 
    + '-' + ('0' + date.getDate()).slice(-2)
    + ' '
    +  ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
    + ':' + ('0' + date.getSeconds()).slice(-2)
}


import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import logo_pic from './images/logo.png'
import cat from './images/котэ-животные-реактора-обнимашки-7272973.jpeg'
import com from './images/eldercactus-Комиксы-перевел-сам-7272966.jpeg'
import hr from './images/hr-it-юмор-geek-презентация-7225978.jpeg'
import Card from './CardMade'

let array:ReactElement[] = [];

function App() {
  return (
    <div className="App">
        <header className='header'>
            <nav className="top_bar">
                <a href='#' className='top_button link'>Что-то</a>
                <a href='#' className='top_button link'>И вот это</a>
            </nav> 
            <a href='#' className='logo_text link'>
                <img className='logo_pic' src={logo_pic}/>
                Смешные картинки</a>
        </header>
        
        <main className="margin">
            <nav className="nav_container">
                <div>
                    <a href='#' className="button active_b link">Лента</a>
                    <a href='#' className="button link">О проекте</a>
                    <a href='#' className="button link">Кнопка</a>
                </div>
                <a href='#' className="button random_post link">Случайный пост {'>'}</a>
                <div className='search_menu button'>
                    <form >
                        <input id='search_field' type="text" placeholder='Поиск'/>
                        <input id='submit_button' type="submit" value=''/>
                    </form>
                </div>
                
            </nav>
            <nav className="post_filter">
                <a href='#' className="button active_b link">всё</a>
                <a href='#' className="button link">хорошее</a>
                <a href='#' className="button link">лучшее</a>
            </nav>
            <div className="background">
                 <section className="content" id="content">
                 {array.map((post) => <>{post}</>)}
                </section>
                <nav className="right_bar">
                    <div className='segment_nav'>
                        <h1 className='title'>Привет!</h1>
                        <p className='text'>Возможно какой то полезный текст</p>
                        <a href='#' className='new_post link'>Кнопка</a>
                    </div>
                    <div className='segment_nav'>
                        <h1 className='title'>большие теги</h1>
                        <ul className='list'>
                            <li className='item_list'>
                                <a href='#' className='tag_big link'>Тег 1</a>
                                <img className='img_tag_background' src={cat}/>
                            </li>
                            <li className='item_list'>
                                <a href='#' className='tag_big link'>Тег 2</a>
                                <img className='img_tag_background' src={com}/>
                            </li>
                            <li className='item_list'>
                                <a href='#' className='tag_big link'>Тег 3</a>
                                <img className='img_tag_background' src={hr}/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </main>
        <footer className='margin footer'>
            <p className='text_footer'>2022</p>
        </footer>
    </div>
  );
}

export default App;

/**
 * Создание нескольких рандомных постов и добавление в лист
 */
function AddPost(){
    for(let i = 0;i<10;i=i+1){
        array.push(<Card/>);
    }
    ReactDOM.render(<React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root'))
}
{AddPost()}
